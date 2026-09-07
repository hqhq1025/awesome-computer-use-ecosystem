# Desktop Selection Evidence

This page records why the desktop starting points are useful to investigate.
Project descriptions remain canonical in the [README](../README.md).

## Classification

Use two views of the same entries:

- Ecosystem ownership groups related applications, SDKs, drivers, and deployment
  components without implying they are separate competing products.
- Capability membership describes what an implementation actually enables.
  Applications and agent workspaces, native execution, GUI testing, desktop
  environments, history, replay, and evaluation are distinct roles.

Reference implementations remain labeled examples. Activity-history tools do not
automatically provide input replay. A visual execution report is not evidence of
re-executing recorded actions. Model weights alone are not desktop applications.

## Repository Attention

GitHub repository stars checked on 2026-09-07 through the GitHub API. These are
dated discovery signals, not live counters, active-user counts, or reliability
scores. They belong to the named repository, including all its components.

| Repository | Stars | Scope of the count |
| --- | ---: | --- |
| [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | 38,881 | UI-TARS Desktop, Agent TARS, and shared SDKs |
| [trycua/cua](https://github.com/trycua/cua) | 22,277 | Driver, sandboxes, Bench, Lume, and other components |
| [screenpipe/screenpipe](https://github.com/screenpipe/screenpipe) | 21,451 | Activity capture, history application, and integrations |
| [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts) | 17,620 | All quickstarts, not just desktop examples |
| [web-infra-dev/midscene](https://github.com/web-infra-dev/midscene) | 14,798 | Desktop, web, mobile, and shared automation tooling |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,289 | Entire agent workspace, not just its Computer Use module |
| [e2b-dev/E2B](https://github.com/e2b-dev/E2B) | 13,686 | E2B monorepo, including desktop SDKs |
| [simular-ai/Agent-S](https://github.com/simular-ai/Agent-S) | 12,236 | Agent S framework and research implementations |
| [microsoft/UFO](https://github.com/microsoft/UFO) | 9,660 | Desktop AgentOS and Galaxy |
| [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 6,920 | Windows MCP server |
| [openclaw/Peekaboo](https://github.com/openclaw/Peekaboo) | 5,121 | Peekaboo application, CLI, and MCP integration |
| [e2b-dev/open-computer-use](https://github.com/e2b-dev/open-computer-use) | 2,241 | E2B desktop agent application |
| [e2b-dev/desktop](https://github.com/e2b-dev/desktop) | 1,472 | Desktop templates/examples; SDK source moved to E2B |

## Implementation and Adoption Boundaries

Sources were inspected on 2026-09-06 and selected entries rechecked on 2026-09-07.
This is a source/documentation review, not an installation test or security audit.

| Project | Primary evidence | Boundary to preserve |
| --- | --- | --- |
| UI-TARS Desktop | [Quick start](https://github.com/bytedance/UI-TARS-desktop/blob/main/docs/quick-start.md), [desktop operator](https://github.com/bytedance/UI-TARS-desktop/blob/main/apps/ui-tars/src/main/agent/operator.ts), [v0.2.4 assets](https://github.com/bytedance/UI-TARS-desktop/releases/tag/v0.2.4) | Desktop DMG/EXE assets inspected were released on 2025-08-21. Repository v0.3.0 is Agent TARS CLI, not the Desktop application. Local execution does not imply local model inference. |
| CUA | [Component guide](https://github.com/trycua/cua/blob/main/README.md), [Driver](https://github.com/trycua/cua/tree/main/libs/cua-driver), [Bench](https://github.com/trycua/cua/tree/main/cua-bench), [Lume](https://github.com/trycua/cua/tree/main/libs/lume) | Background input has platform/action-specific conditions. Cloud service access, guest OS terms, and optional dependencies are separate from the MIT project license. |
| Midscene | [Desktop setup](https://github.com/web-infra-dev/midscene/blob/main/apps/site/docs/en/platforms/desktop.mdx), [computer SDK](https://github.com/web-infra-dev/midscene/tree/main/packages/computer) | Native desktop, RDP, assertions, and HTML reports are implemented. Windows privilege boundaries and Linux display dependencies still apply. Reports are not a general demonstration-replay engine. |
| cc-haha | [Platform executor](https://github.com/NanmiCoder/cc-haha/blob/main/src/utils/computerUse/executor.ts), [macOS actions](https://github.com/NanmiCoder/cc-haha/blob/main/native/cu-helper/Sources/cu-helper/AXAction.swift), [v0.6.0 assets](https://github.com/NanmiCoder/cc-haha/releases/tag/v0.6.0) | macOS uses a native helper; Windows uses Python screenshot/input tools. Linux application packages do not establish Linux Computer Use support. |
| Agent S | [Setup and SDK](https://github.com/simular-ai/Agent-S/blob/main/README.md), [S3 CLI](https://github.com/simular-ai/Agent-S/blob/main/gui_agents/s3/cli_app.py) | Requires planning/grounding configuration and documents a single-monitor requirement. Hosted Sai is a related product, not evidence that its complete implementation is public. |
| UFO | [Windows controller](https://github.com/microsoft/UFO/blob/main/ufo/automator/ui_control/controller.py), [project status and setup](https://github.com/microsoft/UFO/blob/main/README.md) | UFO Desktop AgentOS provides Windows execution; Galaxy orchestrates device agents and remains under active development. |
| Windows-MCP | [Tools, setup, and configuration](https://github.com/CursorTouch/Windows-MCP/blob/main/README.md), [security guidance](https://github.com/CursorTouch/Windows-MCP/blob/main/SECURITY.md) | Needs an agent client. Includes powerful system tools and default-enabled anonymous telemetry. UIA observation does not mean every action is semantic. |
| Peekaboo | [Installation and commands](https://github.com/openclaw/Peekaboo/blob/main/README.md), [permissions](https://github.com/openclaw/Peekaboo/blob/main/docs/permissions.md) | CLI, menu-bar app, MCP, and agent sessions are available; released builds require macOS 15+. Background input depends on the target and action. |
| E2B Desktop | [SDK migration and examples](https://github.com/e2b-dev/desktop/blob/main/README.md), [desktop agent](https://github.com/e2b-dev/open-computer-use) | Standard examples require E2B service access and run in a Linux guest, not on the user's native desktop. SDKs moved to the E2B monorepo. |
| screenpipe | [Capture and integration](https://github.com/screenpipe/screenpipe/blob/main/README.md), [current license](https://github.com/screenpipe/screenpipe/blob/main/LICENSE.md) | Source-available under Screenpipe Commercial License. Historical MIT releases do not determine current licensing. Local storage does not exclude telemetry or optional cloud processing. |
| Anthropic examples | [Linux demo](https://github.com/anthropics/claude-quickstarts/tree/main/computer-use-demo), [macOS example](https://github.com/anthropics/claude-quickstarts/tree/main/computer-use-best-practices) | MIT reference implementations; model service access is separate. They are not the source of proprietary desktop products or production isolation guarantees. |

## Selection Policy

Prefer a working implementation path, installation documentation, explicit
platform boundaries, and maintained operational guidance. Repository popularity
helps discover candidates but cannot override missing source, archival,
proof-of-concept status, or an unclear license.

Small foundational projects can still qualify under the general inclusion
criteria. The starting-points table is a curated subset, not the complete catalog.
