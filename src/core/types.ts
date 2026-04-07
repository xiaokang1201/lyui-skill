/**
 * 与框架无关的文档索引类型（Skill 侧元数据，非运行时 UI）。
 */
export interface DocIndexEntry {
  /** 文档文件名，如 button.md */
  file: string;
  /** 不含扩展名的 id，如 button */
  id: string;
}

export type SupportedAdapter = 'vue' | 'react' | 'angular';
