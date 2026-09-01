# Awesome Computer Use Ecosystem

> Applications, workflows, infrastructure, open implementations, and
> evidence-backed research for agents that use computers.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-lightgrey.svg)](LICENSE)

Computer Use is growing beyond click-and-type automation. Agents can now work
through desktop applications and browsers, remember past activity, learn from
demonstrations, replay workflows, and operate inside isolated environments.

Projects are organized by product ecosystem, with a separate capability index
for finding implementations that solve the same kind of problem.

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

- [Browse by Capability](#browse-by-capability)
- [Codex Ecosystem](#codex-ecosystem)
- [Qwen Ecosystem](#qwen-ecosystem)
- [Kimi Ecosystem](#kimi-ecosystem)
- [Z.ai and ZCode Ecosystem](#zai-and-zcode-ecosystem)
- [CUA Ecosystem](#cua-ecosystem)
- [Apache Maka (Incubating) Ecosystem](#apache-maka-incubating-ecosystem)
- [OpenClaw Ecosystem](#openclaw-ecosystem)
- [Hermes Agent Ecosystem](#hermes-agent-ecosystem)
- [Independent Applications](#independent-applications)
- [Scope and Inclusion Criteria](#scope-and-inclusion-criteria)
- [Contributing](#contributing)

## Browse by Capability

| Capability | Projects |
| --- | --- |
| Desktop execution | [Open Computer Use](https://github.com/iFurySt/open-codex-computer-use), [Qwen Open Computer Use](https://github.com/QwenLM/open-computer-use), [CUA Driver](https://github.com/trycua/cua/tree/main/libs/cua-driver), [Apache Maka (Incubating)](https://github.com/apache/maka), [Maka CU](https://github.com/maka-agent/maka-cu), [OpenClaw Computer Tool](https://github.com/openclaw/openclaw/blob/main/src/agents/tools/computer-tool.ts), [Peekaboo](https://github.com/openclaw/Peekaboo), [Hermes Computer Use](https://github.com/NousResearch/hermes-agent/tree/main/tools/computer_use), [Open ZCode Computer Use](https://github.com/hqhq1025/open-zcode-computer-use) |
| Browser execution | [Open Browser Use](https://github.com/iFurySt/open-browser-use), [CUA Driver](https://github.com/trycua/cua/tree/main/libs/cua-driver), [Qwen CUA Driver](https://github.com/QwenLM/qwen-code/tree/main/packages/cua-driver), [OpenClaw CUA Provider](https://github.com/openclaw/openclaw/tree/main/extensions/cua-computer), [Hermes Browser Automation](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/browser.md) |
| Memory and history | [Open Codex Computer History](https://github.com/hqhq1025/open-codex-computer-history), [OpenClaw Logbook](https://github.com/openclaw/openclaw/tree/main/extensions/logbook) |
| Demonstration and replay | [Open Codex Record & Replay](https://github.com/hqhq1025/open-codex-record-and-replay), [OpenClaw CUA Provider](https://github.com/openclaw/openclaw/tree/main/extensions/cua-computer) |
| Evaluation and training | [CUA](https://github.com/trycua/cua), [LongHorizon Harness](https://github.com/AMAP-ML/LongHorizon-Harness) |
| Compatibility bridges | [Kimi Computer Use](https://github.com/songkeys/kimi-computer-use) |
| Reverse engineering and clean-room research | [Codex Computer Use Reverse Engineering Lab](https://github.com/hqhq1025/codex-computer-use-lab), [Kimi Computer Use Reverse Engineering Lab](https://github.com/hqhq1025/kimi-computer-use-lab), [Open ZCode Computer Use](https://github.com/hqhq1025/open-zcode-computer-use) |

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

- [CUA Driver](https://github.com/trycua/cua/tree/main/libs/cua-driver)
  - Cross-platform desktop and browser automation runtime from CUA, available
    through MCP, CLI, native SDK bindings, and embeddable interfaces.
  - `macOS` `Linux` `Windows` `Browser` `MCP` `Rust` `MIT`
- [CUA](https://github.com/trycua/cua)
  - Sandboxes, SDKs, and benchmarks for building, training, and evaluating
    agents that operate full desktops.
  - `macOS` `Linux` `Windows` `Sandbox` `SDK` `MIT`

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
  - OpenClaw's default macOS Computer Use provider. Its native Swift runtime
    supplies screen capture, accessibility inspection, clicks, typing, menus,
    dialogs, Dock actions, and window management without a separate driver
    daemon.
  - `macOS` `Computer Use provider` `Accessibility` `CoreGraphics` `Swift` `MIT`
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

## Independent Applications

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

## Disclaimer

This is an independent community list. It is not affiliated with or endorsed
by OpenAI, Anthropic, browser vendors, or the maintainers of listed projects.
