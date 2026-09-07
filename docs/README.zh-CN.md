# Awesome Computer Use Ecosystem 中文导览

这个清单整理 Computer Use 的应用与落地：让 AI 智能体通过截图、无障碍树和输入动作操作桌面应用与浏览器，也收录活动历史、演示录制、工作流回放和评测工具。

项目完整说明以 [英文 README](../README.md) 为准。本页提供中文导航，不重复维护一份项目清单。

## 桌面精选

先看 [桌面入门导航](../README.md#desktop-starting-points) 和
[选型依据、star 快照及限制](desktop-selection.md)。

首页按应用与 Agent、原生执行工具、GUI 自动化测试、桌面沙箱与虚拟机、
活动历史与记忆、参考实现区分用途。项目全文仍按生态归属整理，同一项目可以
出现在多个能力索引中，避免把应用、驱动、模型和环境当作同类产品比较。

## 按任务查找

| 需求 | 能力索引中的分类 |
| --- | --- |
| 找完整桌面 Agent、应用或工作区 | Desktop agents and workspaces |
| 操作桌面应用，比较执行后端 | Desktop execution |
| 操作浏览器，查找 CDP、MCP 与 CLI 工具 | Browser execution |
| 读取无障碍树、定位控件，改进应用自身语义 | Accessibility and semantic grounding |
| 为应用提供智能体可调用的接口或开发工作流 | Agent-native interfaces and harnesses |
| 部署隔离桌面，管理本地或云端虚拟机 | Desktop sandboxes and virtualization |
| 编写 GUI 自动化、断言和查看执行报告 | GUI testing and assertions |
| 检索电脑活动和工作历史 | Memory and history |
| 录制操作演示、回放流程、生成可复用技能 | Demonstration and replay |
| 运行评测、训练或长任务测试 | Evaluation and training |
| 复用已有工具，了解兼容层与依赖边界 | Compatibility bridges |
| 查阅逆向分析与独立实现的证据 | Reverse engineering and clean-room research |

[打开完整能力索引](../README.md#browse-by-capability)。

## 按生态查找

- [ByteDance TARS / UI-TARS Desktop](../README.md#bytedance-tars-ecosystem)
- [Microsoft UFO / Galaxy](../README.md#microsoft-ufo-ecosystem)
- [Agent S](../README.md#agent-s-ecosystem)
- [Midscene](../README.md#midscene-ecosystem)
- [Codex](../README.md#codex-ecosystem)
- [Anthropic 参考实现](../README.md#anthropic-ecosystem)
- [Qwen](../README.md#qwen-ecosystem)
- [Kimi](../README.md#kimi-ecosystem)
- [Z.ai / ZCode](../README.md#zai-and-zcode-ecosystem)
- [CUA / CUA Driver](../README.md#cua-ecosystem)
- [E2B 桌面沙箱](../README.md#e2b-ecosystem)
- [screenpipe 活动历史](../README.md#screenpipe-ecosystem)
- [Apache Maka (Incubating)](../README.md#apache-maka-incubating-ecosystem)
- [OpenClaw](../README.md#openclaw-ecosystem)
- [Hermes Agent](../README.md#hermes-agent-ecosystem)
- [Pi](../README.md#pi-ecosystem)
- [独立运行时、应用与开发者工具](../README.md#independent-runtimes-and-applications)

## 选型与复用

项目条目会说明它是运行时、集成桥接、开发工具还是研究资料。平台标签不代表所有功能在各平台上完全一致；使用前请核对上游文档、权限要求与许可证。

Star 属于整个仓库，不能视为某个子组件独立的热度或生产可靠性。参考示例和
研究框架不等于完整商业产品；screenpipe 当前源码采用商业许可证，应按
source-available 理解，不沿用历史版本的 MIT 标签。

清单由 [Haoqing Wang](https://github.com/hqhq1025) 与社区维护。清单内容采用 [CC0-1.0](../LICENSE)，收录项目保留各自许可证，包含可能的非商业限制。

需要机器读取时，可使用从英文 README 生成的 [JSON 项目目录](../data/projects.json) 和 [llms.txt 导航](../llms.txt)。新增项目请参照 [贡献指南](../CONTRIBUTING.md)。
