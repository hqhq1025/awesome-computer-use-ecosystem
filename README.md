# Awesome Computer Use Ecosystem

> A curated list of Computer Use tools for AI agents: desktop and browser
> automation, accessibility, computer history, record and replay, and evaluation.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-lightgrey.svg)](LICENSE)

Computer Use lets AI agents observe and operate desktop applications and
browsers through screenshots, accessibility trees, and input actions. This
list focuses on practical applications and deployment, including MCP servers,
SDKs, Agent Skills, activity history, workflow replay, and evaluation tools.

Projects are organized by product ecosystem, with a separate capability index
for finding implementations that solve the same kind of problem. Start with
the desktop selection below, or browse ecosystems and independent projects.

[中文导览](docs/README.zh-CN.md) |
[Project catalog (JSON)](data/projects.json) |
[AI-readable navigation](llms.txt) |
[Suggest a project](CONTRIBUTING.md)

Descriptions distinguish open implementations, compatibility bridges, developer
tools, and research. Platform and license tags describe individual projects;
check their upstream documentation before adopting them.

```text
observe and act
      |
      +--> remember activity
      |
      +--> record demonstrations
      |
      +--> replay and evaluate workflows
      |
      +--> generate reusable agent skills
```

## Contents

- [Desktop Starting Points](#desktop-starting-points)
- [Browse by Capability](#browse-by-capability)
- [ByteDance TARS Ecosystem](#bytedance-tars-ecosystem)
- [Microsoft UFO Ecosystem](#microsoft-ufo-ecosystem)
- [Agent S Ecosystem](#agent-s-ecosystem)
- [Midscene Ecosystem](#midscene-ecosystem)
- [Codex Ecosystem](#codex-ecosystem)
- [Anthropic Ecosystem](#anthropic-ecosystem)
- [Qwen Ecosystem](#qwen-ecosystem)
- [Kimi Ecosystem](#kimi-ecosystem)
- [Z.ai and ZCode Ecosystem](#zai-and-zcode-ecosystem)
- [CUA Ecosystem](#cua-ecosystem)
- [E2B Ecosystem](#e2b-ecosystem)
- [screenpipe Ecosystem](#screenpipe-ecosystem)
- [Apache Maka (Incubating) Ecosystem](#apache-maka-incubating-ecosystem)
- [OpenClaw Ecosystem](#openclaw-ecosystem)
- [Hermes Agent Ecosystem](#hermes-agent-ecosystem)
- [Pi Ecosystem](#pi-ecosystem)
- [Independent Runtimes and Applications](#independent-runtimes-and-applications)
- [Scope and Inclusion Criteria](#scope-and-inclusion-criteria)
- [Contributing](#contributing)
- [Data and Maintenance](#data-and-maintenance)

## Desktop Starting Points

This selection emphasizes established repository attention, documented desktop
execution, and usable installation or development entry points. It is not a
runtime reliability ranking. Each project has one full entry under its ecosystem
or the independent group; capabilities provide cross-links.

| Role | Starting points | What to compare |
| --- | --- | --- |
| Desktop applications and agent frameworks | [UI-TARS Desktop](https://github.com/bytedance/UI-TARS-desktop), [Agent S](https://github.com/simular-ai/Agent-S), [UFO](https://github.com/microsoft/UFO/tree/main/ufo), [cc-haha](https://github.com/NanmiCoder/cc-haha) | Task loop, application UI, model setup, supported operating systems |
| Native execution tools | [CUA Driver](https://github.com/trycua/cua/tree/main/libs/cua-driver), [Peekaboo](https://github.com/openclaw/Peekaboo), [Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | Observation, input backend, permissions, SDK/CLI/MCP integration |
| GUI automation and testing | [Midscene](https://github.com/web-infra-dev/midscene) | Scripted actions, assertions, Playground, execution reports |
| Desktop sandboxes and virtualization | [CUA](https://github.com/trycua/cua), [E2B Desktop](https://github.com/e2b-dev/desktop), [Lume](https://github.com/trycua/cua/tree/main/libs/lume) | Local versus hosted environments, isolation, provisioning, screen streaming |
| Activity history and memory | [screenpipe](https://github.com/screenpipe/screenpipe) | Capture, search, agent context, privacy and source-available licensing |
| Reference implementations | [Anthropic Linux demo](https://github.com/anthropics/claude-quickstarts/tree/main/computer-use-demo), [Anthropic macOS example](https://github.com/anthropics/claude-quickstarts/tree/main/computer-use-best-practices) | Model-tool loop and debugging examples, not complete production products |

See [selection evidence and dated repository stars](docs/desktop-selection.md)
for installation, maintenance, and licensing caveats. Stars belong to repositories,
not individual SDKs or subdirectories, and do not establish adoption or reliability.

## Browse by Capability

| Capability | Projects |
| --- | --- |
| Desktop agents and workspaces | [UI-TARS Desktop](https://github.com/bytedance/UI-TARS-desktop), [Agent S](https://github.com/simular-ai/Agent-S), [UFO Desktop AgentOS](https://github.com/microsoft/UFO/tree/main/ufo), [UFO Galaxy](https://github.com/microsoft/UFO/tree/main/galaxy), [cc-haha](https://github.com/NanmiCoder/cc-haha), [Apache Maka (Incubating)](https://github.com/apache/maka), [Peekaboo](https://github.com/openclaw/Peekaboo), [E2B Open Computer Use](https://github.com/e2b-dev/open-computer-use), [Orkas](https://github.com/Orkas-AI/Orkas) |
| Desktop execution | [UI-TARS Desktop](https://github.com/bytedance/UI-TARS-desktop), [UI-TARS SDK](https://github.com/bytedance/UI-TARS-desktop/tree/main/packages/ui-tars/sdk), [Agent S](https://github.com/simular-ai/Agent-S), [UFO Desktop AgentOS](https://github.com/microsoft/UFO/tree/main/ufo), [Midscene](https://github.com/web-infra-dev/midscene), [cc-haha](https://github.com/NanmiCoder/cc-haha), [Windows-MCP](https://github.com/CursorTouch/Windows-MCP), [Open Computer Use](https://github.com/iFurySt/open-codex-computer-use), [Qwen Open Computer Use](https://github.com/QwenLM/open-computer-use), [Qwen CUA Driver](https://github.com/QwenLM/qwen-code/tree/main/packages/cua-driver), [CUA Driver](https://github.com/trycua/cua/tree/main/libs/cua-driver), [MacosUseSDK](https://github.com/mediar-ai/MacosUseSDK), [Apache Maka (Incubating)](https://github.com/apache/maka), [Maka CU](https://github.com/maka-agent/maka-cu), [OpenClaw Computer Tool](https://github.com/openclaw/openclaw/blob/main/src/agents/tools/computer-tool.ts), [OpenClaw CUA Provider](https://github.com/openclaw/openclaw/tree/main/extensions/cua-computer), [Peekaboo](https://github.com/openclaw/Peekaboo), [Hermes Computer Use](https://github.com/NousResearch/hermes-agent/tree/main/tools/computer_use), [Hermes CUA Backend](https://github.com/NousResearch/hermes-agent/blob/main/tools/computer_use/cua_backend.py), [Pi Computer Use](https://github.com/injaneity/pi-computer-use), [Tactile](https://github.com/yliust/Tactile), [Open ZCode Computer Use](https://github.com/hqhq1025/open-zcode-computer-use), [E2B Desktop](https://github.com/e2b-dev/desktop), [E2B Open Computer Use](https://github.com/e2b-dev/open-computer-use), [Anthropic Linux demo](https://github.com/anthropics/claude-quickstarts/tree/main/computer-use-demo), [Anthropic macOS example](https://github.com/anthropics/claude-quickstarts/tree/main/computer-use-best-practices) |
| Browser execution | [Open Browser Use](https://github.com/iFurySt/open-browser-use), [Playwright MCP](https://github.com/microsoft/playwright-mcp), [Playwright CLI](https://github.com/microsoft/playwright-cli), [OpenCLI](https://github.com/jackwener/OpenCLI), [CUA Driver](https://github.com/trycua/cua/tree/main/libs/cua-driver), [Qwen CUA Driver](https://github.com/QwenLM/qwen-code/tree/main/packages/cua-driver), [OpenClaw CUA Provider](https://github.com/openclaw/openclaw/tree/main/extensions/cua-computer), [Hermes Browser Automation](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/browser.md), [Pi Computer Use](https://github.com/injaneity/pi-computer-use), [Orkas](https://github.com/Orkas-AI/Orkas) |
| Accessibility and semantic grounding | [UFO Desktop AgentOS](https://github.com/microsoft/UFO/tree/main/ufo), [Windows-MCP](https://github.com/CursorTouch/Windows-MCP), [cc-haha](https://github.com/NanmiCoder/cc-haha), [MacosUseSDK](https://github.com/mediar-ai/MacosUseSDK), [Tactile](https://github.com/yliust/Tactile), [Peekaboo](https://github.com/openclaw/Peekaboo), [Hermes Computer Use](https://github.com/NousResearch/hermes-agent/tree/main/tools/computer_use), [Pi Computer Use](https://github.com/injaneity/pi-computer-use), [Better AX for Computer Use](https://github.com/hqhq1025/better-ax-for-computer-use) |
| Agent-native interfaces and harnesses | [OpenCLI](https://github.com/jackwener/OpenCLI), [CLI-Anything](https://github.com/HKUDS/CLI-Anything), [Pi Computer Use](https://github.com/injaneity/pi-computer-use), [Better AX for Computer Use](https://github.com/hqhq1025/better-ax-for-computer-use) |
| Desktop sandboxes and virtualization | [CUA](https://github.com/trycua/cua), [Lume](https://github.com/trycua/cua/tree/main/libs/lume), [E2B Desktop](https://github.com/e2b-dev/desktop) |
| GUI testing and assertions | [Midscene](https://github.com/web-infra-dev/midscene), [Playwright CLI](https://github.com/microsoft/playwright-cli) |
| Memory and history | [screenpipe](https://github.com/screenpipe/screenpipe), [Open Codex Computer History](https://github.com/hqhq1025/open-codex-computer-history), [OpenClaw Logbook](https://github.com/openclaw/openclaw/tree/main/extensions/logbook) |
| Demonstration and replay | [Open Codex Record & Replay](https://github.com/hqhq1025/open-codex-record-and-replay), [OpenClaw CUA Provider](https://github.com/openclaw/openclaw/tree/main/extensions/cua-computer) |
| Evaluation and training | [CUA](https://github.com/trycua/cua), [CUA Bench](https://github.com/trycua/cua/tree/main/cua-bench), [LongHorizon Harness](https://github.com/AMAP-ML/LongHorizon-Harness) |
| Compatibility bridges | [Kimi Computer Use](https://github.com/songkeys/kimi-computer-use) |
| Reverse engineering and clean-room research | [Codex Computer Use Reverse Engineering Lab](https://github.com/hqhq1025/codex-computer-use-lab), [Kimi Computer Use Reverse Engineering Lab](https://github.com/hqhq1025/kimi-computer-use-lab), [Open ZCode Computer Use](https://github.com/hqhq1025/open-zcode-computer-use) |

## ByteDance TARS Ecosystem

- [UI-TARS Desktop](https://github.com/bytedance/UI-TARS-desktop)
  - Desktop application with visual task execution, status feedback, and local
    or remote operators; shares its repository with Agent TARS and SDKs.
  - `macOS` `Windows` `Desktop application` `Visual agent` `Apache-2.0`
- [UI-TARS SDK](https://github.com/bytedance/UI-TARS-desktop/tree/main/packages/ui-tars/sdk)
  - Embeddable screenshot-model-action loop with operator interfaces, events,
    and pause/stop controls; desktop integration uses a separate native input operator.
  - `SDK` `TypeScript` `Operator-dependent platforms` `Apache-2.0`

## Microsoft UFO Ecosystem

- [UFO Desktop AgentOS](https://github.com/microsoft/UFO/tree/main/ufo)
  - Windows desktop agent coordinating applications through UIA, Win32, and COM,
    with screenshot observations, hybrid GUI/API actions, and reusable application knowledge.
  - `Windows` `Agent framework` `Accessibility` `COM` `Python` `MIT`
- [UFO Galaxy](https://github.com/microsoft/UFO/tree/main/galaxy)
  - Cross-device task planning and orchestration using dynamic dependency graphs;
    delegates Windows desktop execution to UFO Desktop AgentOS.
  - `Multi-device orchestration` `DAG` `Active development` `Python` `MIT`

## Agent S Ecosystem

- [Agent S](https://github.com/simular-ai/Agent-S)
  - Desktop agent framework with a CLI and Python SDK, screenshot-based planning,
    grounding, and PyAutoGUI actions; requires model configuration and is distinct from hosted Sai.
  - `macOS` `Windows` `Linux` `Agent framework` `SDK` `CLI` `Apache-2.0`

## Midscene Ecosystem

- [Midscene](https://github.com/web-infra-dev/midscene)
  - Visual automation framework with native desktop and remote Windows RDP
    support, a JavaScript SDK, Playground, AI assertions, and execution reports.
  - `macOS` `Windows` `Linux` `GUI testing` `SDK` `TypeScript` `MIT`

## Codex Ecosystem

- [Open Computer Use](https://github.com/iFurySt/open-codex-computer-use)
  - Open implementation of the Codex Computer Use execution layer, exposed
    through MCP with native accessibility, screenshot, and input backends.
  - `macOS` `Linux` `Windows` `Desktop execution` `MCP` `MIT`
- [Open Browser Use](https://github.com/iFurySt/open-browser-use)
  - Open implementation of the browser execution path reconstructed from the
    Codex Computer Use ecosystem, with a Chrome extension, CLI, MCP server, and
    JavaScript, Python, and Go SDKs.
  - `Chrome` `Browser execution` `MCP` `CLI` `SDK` `MIT`
- [Codex Computer Use Reverse Engineering Lab](https://github.com/hqhq1025/codex-computer-use-lab)
  - Experiment-backed analysis of the macOS Codex Computer Use architecture,
    protocol, accessibility state, input path, policy gates, and lifecycle.
  - `macOS` `Reverse engineering` `Protocol` `MIT`
- [Open Codex Computer History](https://github.com/hqhq1025/open-codex-computer-history)
  - Clean-room event history for desktop interaction, with privacy filtering,
    summaries, search, MCP tools, and native macOS recording.
  - `macOS` `History` `Event stream` `Swift` `MIT`
- [Open Codex Record & Replay](https://github.com/hqhq1025/open-codex-record-and-replay)
  - Open record-and-replay pipeline spanning native capture, session storage,
    evaluation, workflow controls, and reusable agent Skill generation.
  - `macOS` `Demonstration` `Replay` `Skill generation` `MIT`

## Anthropic Ecosystem

- [Anthropic Linux Computer Use Demo](https://github.com/anthropics/claude-quickstarts/tree/main/computer-use-demo)
  - Reference agent loop with a containerized Linux desktop, screenshots,
    xdotool input, VNC, and Streamlit; Claude service access is separate.
  - `Linux` `Docker` `Reference implementation` `Python` `MIT`
- [Anthropic macOS Computer Use Example](https://github.com/anthropics/claude-quickstarts/tree/main/computer-use-best-practices)
  - macOS reference implementation with PyAutoGUI input, coordinate handling,
    batched tools, trajectory inspection, and debugging; not the source of a proprietary desktop product.
  - `macOS` `Reference implementation` `Python` `MIT`

## Qwen Ecosystem

- [Qwen Open Computer Use](https://github.com/QwenLM/open-computer-use)
  - Qwen Code's cross-platform adaptation of Open Computer Use, distributed as
    an MCP service and command-line tool for Qwen Code and other agents.
  - `macOS` `Linux` `Windows` `Qwen Code` `MCP` `MIT`
- [Qwen CUA Driver](https://github.com/QwenLM/qwen-code/tree/main/packages/cua-driver)
  - Qwen Code's vendored distribution of CUA Driver, with Qwen-owned product
    identity, patches, releases, and Python and TypeScript SDK integration.
  - `macOS` `Linux` `Windows` `Browser` `MCP` `Rust` `Apache-2.0`

## Kimi Ecosystem

- [Kimi Computer Use](https://github.com/songkeys/kimi-computer-use)
  - Unofficial bridge that lets Kimi Code use an existing OpenAI Computer Use
    installation on macOS; it is separate from the proprietary KimiCU runtime.
  - `macOS` `Kimi Code` `MCP` `Bridge` `MIT`
- [Kimi Computer Use Reverse Engineering Lab](https://github.com/hqhq1025/kimi-computer-use-lab)
  - Static and controlled dynamic study of KimiCU 0.5.4, covering packaging,
    MCP, native modules, XPC trust, WebView input, and stale-element behavior.
  - `macOS` `Kimi Code` `Research` `Security` `MIT`

## Z.ai and ZCode Ecosystem

- [Open ZCode Computer Use](https://github.com/hqhq1025/open-zcode-computer-use)
  - Clean-room macOS implementation of the ZCode CUA 0.5.12 MCP contract, with
    all 30 tool schemas and independently implemented execution.
  - `macOS` `Z.ai` `ZCode` `Clean room` `MCP` `JavaScript` `Swift` `MIT`

## CUA Ecosystem

Official Cua Driver engineering deep dives explain how observation and background
input work on each desktop platform:

| Platform | Article | Published | Topics |
| --- | --- | --- | --- |
| macOS | [Inside macOS window internals: how SkyLight enables multi-cursor background agents](https://cua.ai/blog/inside-macos-window-internals) | 2026-04-23 | SkyLight event routing, focus without raising windows, accessibility trees, and capture modes |
| Windows | [Inside Windows computer-use: synthetic cursors for background agents](https://cua.ai/blog/inside-windows-computer-use) | 2026-05-27 | UIA/MSAA, window capture, input routing, synthetic cursor overlays, and interactive-session daemons |
| Linux | [Inside Linux computer-use: AT-SPI, XTEST, and background agents](https://cua.ai/blog/inside-linux-computer-use) | 2026-06-18 | AT-SPI over D-Bus, toolkit-specific input, X11/XWayland, and native Wayland limitations |

These articles describe their publication-time implementations and include
limitations and exploratory explanations. For current behavior and platform
support, consult the [Driver documentation](https://cua.ai/docs/reference/cua-driver/platform-support)
and source below. They are reading resources, not separate project entries.

- [CUA Driver](https://github.com/trycua/cua/tree/main/libs/cua-driver)
  - Cross-platform desktop and browser automation runtime from CUA, available
    through MCP, CLI, native SDK bindings, and embeddable interfaces.
  - `macOS` `Linux` `Windows` `Browser` `MCP` `Rust` `MIT`
- [CUA](https://github.com/trycua/cua)
  - Sandboxes, SDKs, and benchmarks for building, training, and evaluating
    agents that operate full desktops.
  - `macOS` `Linux` `Windows` `Sandbox` `SDK` `MIT`
- [CUA Bench](https://github.com/trycua/cua/tree/main/cua-bench)
  - Desktop evaluation and reinforcement-learning environments with image
    provisioning, benchmark adapters, custom tasks, and trajectory export.
  - `Desktop` `Evaluation` `Training` `CLI` `MIT`
- [Lume](https://github.com/trycua/cua/tree/main/libs/lume)
  - Creates and manages macOS and Linux virtual machines on Apple Silicon
    through Apple's Virtualization.Framework, providing local desktop environments for agents.
  - `macOS host` `Apple Silicon` `Virtualization` `CLI` `MIT`

## E2B Ecosystem

- [E2B Desktop Sandbox](https://github.com/e2b-dev/desktop)
  - Linux desktop templates and examples with screenshots, input, window control,
    and authenticated streaming; desktop SDK sources live in the E2B monorepo.
  - `Linux guest` `Sandbox` `Hosted service` `Python SDK` `JavaScript SDK` `Apache-2.0`
- [E2B Open Computer Use](https://github.com/e2b-dev/open-computer-use)
  - Desktop agent application with a screen stream and interaction controls,
    executing tasks inside an E2B Linux sandbox; requires E2B service access.
  - `Linux guest` `Desktop agent` `Hosted sandbox` `Apache-2.0`

## screenpipe Ecosystem

- [screenpipe](https://github.com/screenpipe/screenpipe)
  - Captures desktop activity into searchable local history and exposes context
    through APIs, MCP, and scheduled workflows; current source uses the Screenpipe Commercial License.
  - `macOS` `Windows` `Linux` `Memory and history` `Source-available` `Screenpipe Commercial License`

## Apache Maka (Incubating) Ecosystem

- [Apache Maka (Incubating)](https://github.com/apache/maka)
  - Local-first agent workspace with an optional Computer Use runtime,
    snapshot-bound actions, native executor supervision, and durable execution
    records.
  - `macOS` `Agent workspace` `Computer Use` `Electron` `Apache-2.0`

- [Maka CU](https://github.com/maka-agent/maka-cu)
  - Native macOS execution layer used by Apache Maka's Computer Use runtime,
    with Maka-specific targeting and protocol integration.
  - `macOS` `Maka` `Accessibility` `Swift` `MIT`

## OpenClaw Ecosystem

- [OpenClaw Built-in Computer Tool](https://github.com/openclaw/openclaw/blob/main/src/agents/tools/computer-tool.ts)
  - Capability-driven agent tool that observes through `screen.snapshot` and
    executes through `computer.act`. It binds coordinate actions to captured
    frames, returns post-action screenshots, and exposes only the action,
    target, observation, and delivery families advertised by the selected
    node provider.
  - `Desktop execution` `Paired nodes` `Screenshots` `Capability discovery` `MIT`
- [Peekaboo](https://github.com/openclaw/Peekaboo)
  - macOS CLI, menu-bar application, and MCP toolset with screen capture,
    accessibility inspection, native actions, and agent sessions; also integrates as an OpenClaw Computer Use provider.
  - `macOS` `Computer Use provider` `CLI` `MCP` `Accessibility` `Swift` `MIT`
- [OpenClaw CUA Computer Provider](https://github.com/openclaw/openclaw/tree/main/extensions/cua-computer)
  - CUA Driver-backed provider for desktop, window, and element control on
    macOS, Windows, and Linux. It also exposes browser preparation,
    navigation, element interaction, dialogs, downloads, file inputs,
    recording, and trajectory replay through execution-scoped opaque handles.
  - `macOS` `Windows` `Linux` `Browser execution` `Record and replay` `CUA Driver` `MIT`
- [OpenClaw Codex Computer Use Integration](https://github.com/openclaw/openclaw/tree/main/extensions/codex)
  - Prepares Codex app-server to discover, install, enable, and health-check
    the native Codex Computer Use MCP plugin. Codex owns the native tool calls;
    this path is separate from OpenClaw's Peekaboo and CUA node providers.
  - `macOS` `Codex` `MCP` `Plugin lifecycle` `Health checks` `MIT`
- [OpenClaw Logbook](https://github.com/openclaw/openclaw/tree/main/extensions/logbook)
  - Optional automatic work journal that samples screen snapshots, turns them
    into timestamped timeline cards, generates daily standup notes, and answers
    questions grounded in a tracked day's activity.
  - `Computer history` `Screen activity` `Timeline` `Daily summaries` `MIT`

## Hermes Agent Ecosystem

- [Hermes Computer Use Toolset](https://github.com/NousResearch/hermes-agent/tree/main/tools/computer_use)
  - Model-agnostic `computer_use` tool for capture, app and window discovery,
    clicks, drag, scroll, typing, keys, value setting, and app focus. It
    supports screenshot, set-of-marks, and accessibility-tree observations,
    prefers background input, and returns structured verify-or-escalate
    verdicts after actions.
  - `macOS` `Windows` `Linux` `Desktop execution` `Set of marks` `Accessibility` `Python` `MIT`
- [Hermes CUA Driver Backend](https://github.com/NousResearch/hermes-agent/blob/main/tools/computer_use/cua_backend.py)
  - Cross-platform backend that runs CUA Driver as an MCP stdio service,
    maintains a session-scoped execution surface, and maps Hermes permission
    modes and approvals onto desktop actions. Installation, status, and
    structured diagnostics are available through `hermes computer-use`. The
    backend contains recording and trajectory-replay methods, but the public
    `computer_use` tool schema does not currently expose those actions.
  - `macOS` `Windows` `Linux` `CUA Driver` `MCP` `Diagnostics` `Permissions` `MIT`
- [Hermes Browser Automation](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/browser.md)
  - Separate browser toolset supporting Browser Use CLI, local Chromium over
    CDP, agent-browser, Lightpanda, Camofox, and Browser Use, Browserbase, or
    Firecrawl cloud sessions. It includes isolated sessions, optional
    real-profile snapshots, and local sidecars for private URLs.
  - `Browser execution` `Browser Use` `CDP` `Cloud browsers` `Session isolation` `MIT`

## Pi Ecosystem

- [Pi Computer Use](https://github.com/injaneity/pi-computer-use)
  - Pi Coding Agent extension that exposes desktop windows and managed CDP
    pages through one immutable, state-scoped interface. It combines macOS
    Accessibility, Windows UI Automation, and Linux AT-SPI2 semantics with
    platform-specific capture and policy-gated input for observation, search,
    checked actions, text reading, and UI-change waits.
  - `macOS` `Windows` `Linux` `Browser execution` `Pi extension` `Accessibility` `CDP` `TypeScript` `Rust` `Swift` `MIT`

## Independent Runtimes and Applications

- [cc-haha](https://github.com/NanmiCoder/cc-haha)
  - Agent desktop workspace with local Computer Use, application permissions,
    macOS AX/CGEvent execution, and Windows screenshot/input execution; Linux packages do not imply Linux Computer Use support.
  - `macOS` `Windows` `Agent workspace` `Desktop application` `MIT`

- [Orkas](https://github.com/Orkas-AI/Orkas)
  - Local-first desktop AI workspace with Commander-led specialists, shared browser observation and actions, local project files, and supported own-provider API keys.
  - `macOS` `Windows` `Browser execution` `Electron` `MIT`

- [Windows-MCP](https://github.com/CursorTouch/Windows-MCP)
  - Windows MCP server exposing UIA observations, screenshots, input, window
    control, and system tools, with documented client integration, authentication, and tool restrictions.
  - `Windows` `MCP` `Accessibility` `Python` `MIT`

- [Playwright MCP](https://github.com/microsoft/playwright-mcp)
  - Official Playwright MCP server for agents that operate Chromium, Firefox,
    and WebKit through structured accessibility snapshots and deterministic
    browser actions. It supports persistent browser context and rich page
    introspection without requiring a vision model.
  - `Browser execution` `Accessibility snapshots` `MCP` `Playwright` `TypeScript` `Apache-2.0`

- [Playwright CLI](https://github.com/microsoft/playwright-cli)
  - Official token-efficient CLI and Agent Skill interface for Playwright.
    It provides snapshot refs, browser actions, named or persistent sessions,
    storage and network controls, screenshots, tracing, video recording, test
    generation, and a dashboard for monitoring or taking over agent sessions.
  - `Browser execution` `CLI` `Agent Skills` `Session management` `Testing` `TypeScript` `Apache-2.0`

- [OpenCLI](https://github.com/jackwener/OpenCLI)
  - Turns websites and Electron applications into deterministic commands while
    reusing the user's logged-in Chrome profiles. Its browser bridge exposes
    DOM snapshots, navigation, interaction, extraction, network inspection,
    tabs, screenshots, and adapter generation through CLI-oriented Agent
    Skills.
  - `Browser execution` `Logged-in browser` `Electron` `CDP` `CLI` `Agent Skills` `Apache-2.0`

- [CLI-Anything](https://github.com/HKUDS/CLI-Anything)
  - Framework and registry for generating agent-native CLI harnesses around
    desktop software, creative tools, engineering applications, and services.
    Generated harnesses use structured JSON, reusable Skills, tests, stateful
    sessions, and preview or trajectory loops so agents can operate application
    capabilities through deterministic commands.
  - `Application harnesses` `CLI generation` `Agent Skills` `Structured output` `Python` `Apache-2.0`

- [Better AX for Computer Use](https://github.com/hqhq1025/better-ax-for-computer-use)
  - Developer Agent Skill for improving accessibility semantics in
    source-modifiable applications, with a partial Chromium AX audit tool and
    guidance for verifying focus, actions, and business effects.
  - `Agent Skills` `Accessibility` `Application development` `Chromium` `JavaScript` `MIT`

- [MacosUseSDK](https://github.com/mediar-ai/MacosUseSDK)
  - Native Swift library and CLI toolkit for traversing macOS Accessibility
    trees and operating other applications through AX actions or CoreGraphics
    input. It includes app discovery and activation, structured traversal,
    clicks, typing, keyboard input, scrolling, action-state diffs, and visual
    overlays for debugging. Tactile's macOS stack bundles and extends these
    lower-level primitives.
  - `macOS` `SDK` `CLI` `Accessibility` `CoreGraphics` `Swift` `MIT`

- [Tactile](https://github.com/yliust/Tactile)
  - Accessibility-first operating layer for agents that prioritizes AX or UIA
    semantics, falls back to OCR-grounded coordinates, and uses visual Computer
    Use when structured interfaces are insufficient. It includes a nine-tool
    macOS MCP facade plus macOS and Windows Skills for observation, input,
    bounded workflows, verification, app guides, traces, and evaluation.
  - `macOS` `Windows` `MCP` `Agent Skills` `Accessibility` `OCR` `Semantic grounding` `PolyForm Noncommercial 1.0.0`

- [LongHorizon Harness](https://github.com/AMAP-ML/LongHorizon-Harness)
  - Runs long-lived agents across desktop applications and terminals with
    recoverable state, progress verification, evaluation, and independent
    auditing.
  - `Desktop` `CLI` `Evaluation` `Long-running agents`

## Scope and Inclusion Criteria

A project belongs here when it contributes to a concrete part of the Computer
Use lifecycle:

- an end-user application or repeatable cross-application workflow;
- desktop or browser execution for an agent;
- interaction memory, demonstration capture, replay, or Skill generation;
- remote access, isolation, deployment, training, or evaluation;
- an open implementation or reproducible study that enables those uses.

Submissions should have public source code, usable documentation, a clear
license, and evidence that the described capability exists. Descriptions must
distinguish independent implementations, compatibility layers, wrappers, and
dependencies on proprietary software.

Generic RPA libraries, broad agent frameworks with no demonstrated Computer
Use workflow, prompt-only repositories, transient repair scripts, and
abandoned proofs of concept are normally out of scope.

## Contributing

Pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before
submitting a project.

Projects are grouped by product ecosystem. The capability index provides a
second view without duplicating project descriptions. Inclusion is not an
endorsement, and descriptions should remain factual and concise.

## Data and Maintenance

Maintained by [Haoqing Wang](https://github.com/hqhq1025) with community
contributions. The canonical list is this README. Its
[commit history](https://github.com/hqhq1025/awesome-computer-use-ecosystem/commits/main/README.md)
records list changes; an edit does not mean every upstream project was re-audited.

For programmatic reuse, [projects.json](data/projects.json) contains project
names, repository or implementation URLs, ecosystem groups, descriptions, tags,
and capability categories. [llms.txt](llms.txt) links to raw Markdown and JSON
without a GitHub interface. Both are generated from the README and checked in CI.

The list is licensed under [CC0-1.0](LICENSE). Listed software keeps its own
license, including any noncommercial restrictions. Inclusion is not a security
audit, accessibility certification, or endorsement.

## Disclaimer

This is an independent community list. It is not affiliated with or endorsed
by OpenAI, Anthropic, browser vendors, or the maintainers of listed projects.
