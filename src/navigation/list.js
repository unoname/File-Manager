import { readdir } from 'fs/promises';
import { cwd } from 'process';
import { logPath } from '../helpers/messages.js';

export const list = async () => {
  const readDir = await readdir(cwd(), { withFileTypes: true });
  const arrNameFile = readDir
    .sort((a, b) => a.isFile() - b.isFile())
    .filter(dirent => !dirent.isSymbolicLink())
    .map(dirent => ({
      name: dirent.name,
      type: dirent.isDirectory() ? 'directory' : 'file',
    }));
  console.table(arrNameFile);
};
