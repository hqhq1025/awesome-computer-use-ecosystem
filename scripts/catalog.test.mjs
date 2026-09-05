import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { buildCatalog, buildNavigation, generate } from './catalog.mjs';

const fixture = `# Example

- [Example Ecosystem](#example-ecosystem)

## Browse by Capability

| Capability | Projects |
| --- | --- |
| Desktop execution | [Short alias](https://github.com/example/desktop) |
| Accessibility | [Desktop](https://github.com/example/desktop), [Skill](https://github.com/example/skill) |

## Example Ecosystem

- [Example Desktop](https://github.com/example/desktop)
  - Operates windows with
    state-scoped actions.
  - \`macOS\` \`MIT\`

## Independent Runtimes and Applications

- [Example Skill](https://github.com/example/skill)
  - Checks semantics.
  - \`Agent Skills\` \`PolyForm Noncommercial 1.0.0\`

## Contributing

Other prose is not a project.
`;

test('catalog preserves descriptions, license restrictions and aliased capability membership', () => {
  const catalog = buildCatalog(fixture);
  assert.equal(catalog.projects.length, 2);
  assert.equal(catalog.projects[0].description, 'Operates windows with state-scoped actions.');
  assert.deepEqual(catalog.projects[0].capabilities, ['Desktop execution', 'Accessibility']);
  assert.deepEqual(catalog.projects[1].tags, ['Agent Skills', 'PolyForm Noncommercial 1.0.0']);
  assert.deepEqual(buildCatalog(fixture.replace(/\n/g, '\r\n')), catalog);
  assert.match(buildNavigation(catalog), /#example-ecosystem/);
});

test('rejects unresolved, duplicate, incomplete entries and broken navigation', () => {
  assert.throws(() => buildCatalog(fixture.replace('[Short alias](https://github.com/example/desktop)', '[Unknown](https://github.com/example/missing)')), /no project entry/);
  assert.throws(() => buildCatalog(fixture.replace('- [Example Skill](https://github.com/example/skill)', '- [Duplicate](https://github.com/example/desktop)')), /Duplicate project/);
  assert.throws(() => buildCatalog(fixture.replace('  - `macOS` `MIT`', '')), /Incomplete entry/);
  assert.throws(() => buildCatalog(fixture.replace('](#example-ecosystem)', '](#missing)')), /Broken README anchor/);
  assert.throws(() => buildCatalog('# Empty'), /No project entries/);
});

test('regeneration follows README changes and check mode catches stale outputs', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'awesome-catalog-'));
  try {
    await writeFile(join(directory, 'README.md'), fixture);
    await generate({ directory });
    await generate({ directory, check: true });
    await writeFile(join(directory, 'README.md'), fixture.replace('Checks semantics.', 'Checks control semantics.'));
    await assert.rejects(generate({ directory, check: true }), /is stale/);
    await generate({ directory });
    await generate({ directory, check: true });
    const data = JSON.parse(await readFile(join(directory, 'data/projects.json'), 'utf8'));
    assert.equal(data.projects[1].description, 'Checks control semantics.');
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
