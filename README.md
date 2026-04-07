# LyUI Cursor Skill

将 LyUI 官网中文文档（`website/docs/zh-CN`）同步到本包 `docs/`，并附带 Cursor Agent 可用的 `SKILL.md`、文档索引脚本与分层目录，便于单独发布到 GitHub。

## 目录结构

```
lyui-skill/
├── src/
│   ├── core/           # 文档清单 doc-manifest.ts、registry、类型
│   ├── adapters/       # Vue 为主；React / Angular 占位说明
│   ├── ui/             # 占位（真实 UI 在 npm ly-ui）
│   ├── utils/          # 路径等工具
│   └── index.ts
├── examples/           # 导读与摘录
├── docs/               # 全部 zh-CN 组件/指南 .md（101 个）
├── scripts/
│   └── sync-docs.mjs   # 从 monorepo 同步 docs 并刷新 manifest
├── SKILL.md            # Cursor Agent 入口
├── skill.json          # 元数据（框架、路径、触发词等）
├── package.json
└── tsconfig.json
```

## 使用

### Cursor

将本目录复制到 `~/.cursor/skills/lyui/` 或项目内 `.cursor/skills/lyui/`，保留根目录 `SKILL.md`。

### 同步文档（monorepo 内）

```bash
cd lyui-skill
npm install
npm run sync-docs
```

若不存在 `../website/docs/zh-CN`（例如单独克隆了本包），脚本会跳过复制，仍根据现有 `docs/` 生成 `src/core/doc-manifest.ts`。

### 类型检查

```bash
npm run typecheck
```

## 与 ly-ui 的关系

- **文档与 Skill**：在本仓库维护；`docs/installation.md` 描述的是**在业务项目里安装 `ly-ui`**，不是安装本 Skill 目录。
- **可运行组件**：须在目标项目的 `package.json` 中安装 `ly-ui`，并按 `docs/quickstart.md` 引入样式与入口；未装依赖时，其他文档中的示例无法直接跑通。
