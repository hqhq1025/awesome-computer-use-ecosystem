# Repository Discoverability

## Scope

This is a GitHub-hosted Awesome list, not a separately deployed website.
The September 5, 2026 review covered public GitHub HTML, repository metadata,
README navigation, and machine-readable exports. It did not include Google
Search Console, Bing Webmaster Tools, analytics, crawler logs, backlink data,
or AI-platform citation measurements.

## Baseline and Changes

| Area | Observed baseline | Change |
| --- | --- | --- |
| Public access | Repository returned HTTP 200; README text was in the initial HTML | Preserve public Markdown as the canonical content |
| Page and sharing summary | Repository description appeared in the HTML title and description metadata | Name desktop/browser automation, MCP, accessibility, history, replay, and evaluation directly |
| GitHub discovery | Seven repository topics | Preserve them and add seven relevant topic labels |
| Content | Brand and capability indexes already existed | Define Computer Use, clarify practical scope, and explain licensing and maintenance |
| Chinese navigation | No Chinese entry point | Add a concise linked guide without duplicating project descriptions |
| Machine-readable catalog | No structured export | Generate JSON and `llms.txt` from the README |
| Maintenance | No automated catalog check | Add tests and a read-only CI job that rejects stale exports and invalid references |

The Markdown README already provides full project descriptions. `llms.txt`
links to it rather than maintaining an additional `llms-full.txt` copy.
These exports support direct reuse; no search engine or AI system is assumed
to automatically discover or honor a repository-level `llms.txt`.

## Hosting Boundaries

GitHub controls its HTML metadata, HTTP headers, root `robots.txt`, crawler
policy, and sitemaps. Files committed to this repository do not change those
site-wide controls. No repository-level `robots.txt`, sitemap, custom meta tags,
or JSON-LD were added as substitutes. No training permission was changed.

The homepage field remains empty because there is no independent project
website. No domain, GitHub Pages site, webmaster submission, paid service,
or recurring monitoring was created.

## Maintenance

Use the commands in [CONTRIBUTING.md](../CONTRIBUTING.md) after editing project
entries. README content is authoritative; JSON and AI navigation are generated.
List changes are visible in Git history, but do not imply fresh verification
of every upstream capability or license.

CI validates the catalog format and consistency, not network availability,
indexing, ranking, runtime safety, or software quality. Check upstream sources
when changing factual descriptions. Review public HTML after metadata changes.

## Reference Material

- [GitHub repository topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics): topic discovery and naming constraints.
- [Google AI features and websites](https://developers.google.com/search/docs/appearance/ai-features): standard SEO practices apply; no special AI optimization is required.

Both references were retrieved during this review. No ranking, traffic,
indexing, or citation improvement has been measured or promised.
