---
name: lyui
description: >-
  Guides implementation with the LyUI (ly-ui) Vue 3 component library using the
  bundled zh-CN docs under lyui-skill/docs, plus standalone packages (e.g. ad-dialog).
  Use when the user works on LyUI, ly-* components, ly-ui install/on-demand import,
  tables/forms/dialogs, or cites LyUI documentation.
---

# LyUI 组件库（Agent Skill）

## 权威文档位置

本 Skill 包内已镜像**全部**中文组件与指南 Markdown，路径为：

`lyui-skill/docs/*.md`

共 101 个文件，与 `website/docs/zh-CN` 同源；**不要凭记忆编造 API**。更新文档请在 monorepo 内执行 `npm run sync-docs`（于 `lyui-skill` 目录）。

## 目录结构（本包）

- `docs/` — API 与用法示例（Markdown）
- `src/core/` — 文档清单与注册表（`doc-manifest.ts` 由脚本生成）
- `src/adapters/` — 框架说明：`vue` 为主实现；`react` / `angular` 为占位说明
- `src/ui/` — 无运行时代码；真实组件在 npm `ly-ui`
- `src/utils/` — 路径等小工具
- `examples/` — 导读与代码摘录

元数据见根目录 `skill.json`。

## 使用前提（必读）

- **`docs/installation.md` 的适用对象**：需要在**业务项目**里安装 npm 包 `ly-ui` 的工程；文档写的是私服 registry、`npm install ly-ui` / `yarn add ly-ui` 等步骤。
- **未安装 `ly-ui` 时**：其他 `docs/*.md` 里的组件示例（模板标签、`import`、`app.use(LyUi)` 等）**无法运行**；Agent 应提示用户先完成安装与 `docs/quickstart.md` 中的样式/入口配置，再对照各组件文档开发。

## LyUI（ly-ui）核心约定

- **框架**：Vue 3；**包名**：`ly-ui`（**须已安装依赖**，安装与 registry 见 `docs/installation.md`）。
- **完整引入**：`app.use(LyUi, { locale })`，样式 `import 'ly-ui/dist/index.css'`；见 `docs/quickstart.md`。
- **按需引入**：从 `ly-ui` 引入组件并注册；模板多为 **`ly-` 前缀** kebab-case（如 `ly-button`）。
- **表格**：`table.md`、`table-config.md`、`table-page.md`、`table-view.md`、`table-page-virtual.md` 职责不同，实现前读对应文档。

## 独立包：ad-dialog

不属于 `ly-ui` 主包：`yarn add ad-dialog`。详见 `docs/ad-dialog-doc.md`。

## 推荐工作流

1. 按组件名在 `docs/` 中查找同名 `.md`（或用 `src/core/registry.ts` 中的清单）。
2. Read `lyui-skill/docs/<文件>.md` 获取 props、事件与示例。
3. 实现时保持与文档一致的 import、标签名与样式引入。

## 指南类（非单一组件）

| 主题 | 文件 |
|------|------|
| 设计原则 | `docs/design.md` |
| 注意事项 | `docs/beCareful.md` |
| 部署 | `docs/deploy.md` |
| Nuxt | `docs/nuxt.md` |
| JS 错误 | `docs/jsError.md` |
| 脚手架 | `docs/zjCli.md` |
