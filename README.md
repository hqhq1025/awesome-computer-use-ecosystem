# Awesome Computer Use Ecosystem

> Applications, workflows, infrastructure, open implementations, and
> evidence-backed research for agents that use computers.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-lightgrey.svg)](LICENSE)

Computer Use is growing beyond click-and-type automation. Agents can now work
through desktop applications and browsers, remember past activity, learn from
demonstrations, replay workflows, and operate inside isolated environments.

This list follows that full path from an execution layer to a useful agent
capability.

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

- [Applications and Workflows](#applications-and-workflows)
- [Memory, Demonstration, and Replay](#memory-demonstration-and-replay)
- [Browser Use](#browser-use)
- [Execution Layers](#execution-layers)
- [Evaluation and Training](#evaluation-and-training)
- [Compatibility and Platforms](#compatibility-and-platforms)
- [Reverse Engineering and Clean-Room Research](#reverse-engineering-and-clean-room-research)
- [Scope and Inclusion Criteria](#scope-and-inclusion-criteria)
- [Contributing](#contributing)

## Applications and Workflows

- [LongHorizon Harness](https://github.com/AMAP-ML/LongHorizon-Harness)
  - Runs long-lived agents across desktop applications and terminals with
    recoverable state, progress verification, evaluation, and independent
    auditing.
  - `Desktop` `CLI` `Evaluation` `Long-running agents`

## Memory, Demonstration, and Replay

- [Open Codex Computer History](https://github.com/hqhq1025/open-codex-computer-history)
  - Clean-room event history for desktop interaction, with privacy filtering,
    summaries, search, MCP tools, and native macOS recording.
  - `macOS` `History` `Event stream` `Swift` `MIT`
- [Open Codex Record & Replay](https://github.com/hqhq1025/open-codex-record-and-replay)
  - Open record-and-replay pipeline spanning native capture, session storage,
    evaluation, workflow controls, and reusable agent Skill generation.
  - `macOS` `Demonstration` `Replay` `Skill generation` `MIT`

## Browser Use

- [Open Browser Use](https://github.com/iFurySt/open-browser-use)
  - Lets agents operate a user's real Chrome through a browser extension, CLI,
    MCP server, and JavaScript, Python, and Go SDKs.
  - `Chrome` `MCP` `CLI` `SDK` `MIT`
## Execution Layers

- [CUA Driver](https://github.com/trycua/cua/tree/main/libs/cua-driver)
  - Cross-platform desktop and browser automation runtime from CUA, available
    through MCP, CLI, native SDK bindings, and embeddable interfaces.
  - `macOS` `Linux` `Windows` `Browser` `MCP` `Rust` `MIT`
- [Open Computer Use](https://github.com/iFurySt/open-codex-computer-use)
  - Cross-platform Computer Use service exposed through MCP with native
    accessibility, screenshot, and input backends.
  - `macOS` `Linux` `Windows` `MCP` `MIT`
- [Qwen Open Computer Use](https://github.com/QwenLM/open-computer-use)
  - Qwen Code's cross-platform adaptation of Open Computer Use, distributed as
    an MCP service and command-line tool for Qwen Code and other agents.
  - `macOS` `Linux` `Windows` `Qwen Code` `MCP` `MIT`
- [Qwen CUA Driver](https://github.com/QwenLM/qwen-code/tree/main/packages/cua-driver)
  - Qwen Code's vendored distribution of CUA Driver, with Qwen-owned product
    identity, patches, releases, and Python and TypeScript SDK integration.
  - `macOS` `Linux` `Windows` `Browser` `MCP` `Rust` `Apache-2.0`
- [Maka CU](https://github.com/maka-agent/maka-cu)
  - Native macOS execution layer for Maka Computer Use, derived from Open
    Computer Use with Maka-specific targeting and runtime integration.
  - `macOS` `Maka` `Accessibility` `Swift` `MIT`
- [Open ZCode Computer Use](https://github.com/hqhq1025/open-zcode-computer-use)
  - Clean-room macOS implementation of the ZCode CUA 0.5.12 MCP contract, with
    all 30 tool schemas and independently implemented execution.
  - `macOS` `ZCode` `Clean room` `MCP` `JavaScript` `Swift` `MIT`

## Evaluation and Training

- [CUA](https://github.com/trycua/cua)
  - Sandboxes, SDKs, and benchmarks for building, training, and evaluating
    agents that operate full desktops.
  - `macOS` `Linux` `Windows` `Sandbox` `SDK` `MIT`

## Compatibility and Platforms

- [Kimi Computer Use](https://github.com/songkeys/kimi-computer-use)
  - Unofficial bridge that lets Kimi Code use an existing OpenAI Computer Use
    installation on macOS; it is separate from the proprietary KimiCU runtime.
  - `macOS` `Kimi Code` `MCP` `Bridge` `MIT`

## Reverse Engineering and Clean-Room Research

- [Codex Computer Use Reverse Engineering Lab](https://github.com/hqhq1025/codex-computer-use-lab)
  - Experiment-backed analysis of the macOS Codex Computer Use architecture,
    protocol, accessibility state, input path, policy gates, and lifecycle.
  - `macOS` `Research` `Protocol` `MIT`
- [Kimi Computer Use Reverse Engineering Lab](https://github.com/hqhq1025/kimi-computer-use-lab)
  - Static and controlled dynamic study of KimiCU 0.5.4, covering packaging,
    MCP, native modules, XPC trust, WebView input, and stale-element behavior.
  - `macOS` `Kimi Code` `Research` `Security` `MIT`

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

Projects are grouped by the role they play in the Computer Use lifecycle.
Inclusion is not an endorsement, and descriptions should remain factual and
concise.

## Disclaimer

This is an independent community list. It is not affiliated with or endorsed
by OpenAI, Anthropic, browser vendors, or the maintainers of listed projects.
