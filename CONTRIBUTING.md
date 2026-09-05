# Contributing

Thanks for helping improve Awesome Computer Use Ecosystem.

## Add a Project

Open a pull request that adds one entry to its product ecosystem. Use the
capability index to link the project from each relevant functional category
without duplicating its full description.

Use this format:

```markdown
- [Project Name](https://github.com/owner/repository)
  - One factual sentence describing what it implements or investigates.
  - `Platform` `Interface` `Language` `License`
```

Keep the description under 30 words. Do not use promotional claims such as
"best", "leading", or "revolutionary".

Edit project facts in `README.md`, then regenerate the machine-readable
navigation and catalog with Node.js 22 or newer:

```sh
node scripts/catalog.mjs
node --test scripts/catalog.test.mjs
node scripts/catalog.mjs --check
```

Commit `data/projects.json` and `llms.txt` with the README changes. Do not edit
generated files by hand. CI checks generation drift, entry completeness,
duplicate URLs, capability references, and README navigation anchors.
It does not verify upstream availability, licenses, or runtime capabilities.
An empty `capabilities` array means an entry has no link in the capability
index; it is not a claim that the project has no capabilities.

Keep the Chinese guide's ecosystem links aligned with the English list.
Do not refresh dates unless the corresponding facts were actually verified.
See [repository discoverability](docs/discoverability.md) for hosting boundaries
and the scope of the search and AI-readability improvements.

In the pull request description, include:

- the product ecosystem or independent-project group it belongs to;
- the application, workflow, or Computer Use lifecycle capability it enables;
- why the project is in scope;
- whether it is an implementation, compatibility layer, wrapper, or research
  project;
- supported operating systems and browsers;
- the repository license;
- the evidence you used to verify the description.

## Requirements

The repository must:

- be publicly accessible;
- contain meaningful source code or reproducible research artifacts;
- have a clear license;
- document its relationship to any proprietary product it studies or uses;
- avoid distributing credentials, signing materials, proprietary binaries, or
  private user data.

Maintainers may decline projects that are inactive, misleading, duplicative,
too narrow, or only repair one short-lived product build.

## Update or Remove a Project

Open a pull request when a link, license, scope, or maintenance status changes.
Removal is appropriate when a repository disappears, becomes unsafe or
misleading, loses its license, or no longer contains a usable implementation
or reproducible evidence.
