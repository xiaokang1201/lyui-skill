import { DOC_FILES } from './doc-manifest';
import type { DocIndexEntry } from './types';

export function listDocFiles(): readonly string[] {
  return DOC_FILES;
}

export function toDocIndexEntry(file: string): DocIndexEntry {
  const id = file.replace(/\.md$/i, '');
  return { file, id };
}

export function allDocEntries(): DocIndexEntry[] {
  return DOC_FILES.map(toDocIndexEntry);
}

export function hasDocFile(file: string): boolean {
  return (DOC_FILES as readonly string[]).includes(file);
}
