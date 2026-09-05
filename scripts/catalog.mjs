import assert from 'node:assert/strict';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const repository = 'https://github.com/hqhq1025/awesome-computer-use-ecosystem';
const raw = 'https://raw.githubusercontent.com/hqhq1025/awesome-computer-use-ecosystem/main';
const root = fileURLToPath(new URL('../', import.meta.url));
const projectLink = /^- \[([^\]]+)\]\((https:\/\/[^)]+)\)$/;
const links = /\[([^\]]+)\]\((https:\/\/[^)]+)\)/g;

export function anchor(heading) {
  return heading.toLowerCase().replace(/[^\p{L}\p{N}_ -]/gu, '').replace(/ /g, '-');
}

// Parse this repository's documented entry format, not arbitrary Markdown.
export function buildCatalog(readme) {
  const blocks = readme.split(/^## /m).slice(1).map((block) => {
    const newline = block.indexOf('\n');
    return { title: block.slice(0, newline).trim(), body: block.slice(newline + 1) };
  });
  const projects = [];
  for (const { title, body } of blocks) {
    if (!title.endsWith(' Ecosystem') && title !== 'Independent Runtimes and Applications') continue;
    let current;
    for (const line of body.split(/\r?\n/)) {
      const match = line.match(projectLink);
      if (match) {
        current = {
          name: match[1], url: match[2], ecosystem: title,
          description: '', tags: [], capabilities: [],
          readmeUrl: `${repository}#${anchor(title)}`,
        };
        projects.push(current);
      } else if (current && /^  - `/.test(line)) {
        current.tags = [...line.matchAll(/`([^`]+)`/g)].map((tag) => tag[1]);
      } else if (current && /^ {2,}\S/.test(line)) {
        current.description += `${current.description ? ' ' : ''}${line.trim().replace(/^- /, '')}`;
      } else if (line.startsWith('- ')) {
        throw new Error(`Unrecognized project entry in ${title}: ${line}`);
      }
    }
  }
  assert(projects.length, 'No project entries found');
  const byUrl = new Map();
  for (const project of projects) {
    assert(!byUrl.has(project.url), `Duplicate project URL: ${project.url}`);
    assert(project.description && project.tags.length, `Incomplete entry: ${project.name}`);
    byUrl.set(project.url, project);
  }
  const capabilityBlock = blocks.find(({ title }) => title === 'Browse by Capability');
  assert(capabilityBlock, 'Missing capability index');
  const capabilities = [];
  for (const line of capabilityBlock.body.split(/\r?\n/)) {
    const row = line.match(/^\| ([^|]+) \| (.+) \|$/);
    if (!row || !row[2].includes('https://')) continue;
    const capability = row[1].trim();
    assert(!capabilities.includes(capability), `Duplicate capability: ${capability}`);
    capabilities.push(capability);
    const seen = new Set();
    for (const [, name, url] of row[2].matchAll(links)) {
      const project = byUrl.get(url);
      assert(project, `Capability link has no project entry: ${name} (${url})`);
      assert(!seen.has(url), `Duplicate capability link: ${capability} / ${url}`);
      seen.add(url);
      project.capabilities.push(capability);
    }
  }
  assert(capabilities.length, 'Empty capability index');
  const headings = new Set(blocks.map(({ title }) => anchor(title)));
  for (const [, target] of readme.matchAll(/\]\(#([^)]+)\)/g)) {
    assert(headings.has(target), `Broken README anchor: ${target}`);
  }
  return {
    schemaVersion: 1,
    name: 'Awesome Computer Use Ecosystem',
    url: repository,
    source: `${raw}/README.md`,
    license: 'CC0-1.0',
    licenseScope: 'Catalog content only; listed projects retain their own licenses.',
    capabilities,
    projects,
  };
}

export function buildNavigation(catalog) {
  const ecosystems = [...new Set(catalog.projects.map((project) => project.ecosystem))];
  return `# ${catalog.name}

> A curated directory of Computer Use applications, desktop and browser automation,
> accessibility tools, computer history, record and replay, and evaluation for AI agents.

The canonical source is the GitHub README. Projects are grouped by ecosystem and
indexed by capability. Descriptions distinguish implementations, bridges, developer
tools, and research. Platform tags are not guarantees of feature parity.

## Main sources

- [Complete project descriptions](${raw}/README.md): Canonical list in plain Markdown.
- [Structured catalog](${raw}/data/projects.json): Names, URLs, ecosystem, descriptions, tags, and capabilities generated from the README.
- [Chinese navigation](${raw}/docs/README.zh-CN.md): Chinese task and ecosystem guide.
- [Contribution criteria](${raw}/CONTRIBUTING.md): Inclusion, evidence, and maintenance requirements.
- [List change history](${repository}/commits/main/README.md): Changes to the list, not upstream verification dates.

## Ecosystems

${ecosystems.map((name) => `- [${name}](${repository}#${anchor(name)}): Project entries in this group.`).join('\n')}

## Scope and licensing

Maintained by Haoqing Wang and community contributors. The catalog is CC0-1.0;
listed projects retain their own licenses, including noncommercial restrictions.
Inclusion does not imply vendor affiliation, endorsement, a security audit, or
accessibility certification. Consult upstream sources for current capabilities.
`;
}

export async function generate({ check = false, directory = root } = {}) {
  const readme = await readFile(resolve(directory, 'README.md'), 'utf8');
  const catalog = buildCatalog(readme);
  const outputs = {
    'data/projects.json': `${JSON.stringify(catalog, null, 2)}\n`,
    'llms.txt': buildNavigation(catalog),
  };
  for (const [path, content] of Object.entries(outputs)) {
    if (check) {
      assert.equal(await readFile(resolve(directory, path), 'utf8'), content,
        `${path} is stale; run node scripts/catalog.mjs`);
    } else {
      await mkdir(resolve(directory, path, '..'), { recursive: true });
      await writeFile(resolve(directory, path), content);
    }
  }
  console.log(`${check ? 'Checked' : 'Generated'} ${catalog.projects.length} projects across ${catalog.capabilities.length} capabilities.`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  assert(process.argv.slice(2).every((arg) => arg === '--check'), 'Usage: node scripts/catalog.mjs [--check]');
  await generate({ check: process.argv.includes('--check') });
}
