import { readdir } from 'fs/promises';
import { cwd } from 'process';
import { logPath } from '../helpers/messages.js';

export const list = async () => {
  const readDir = await readdir(cwd());
  const arrNameFile = [];
  readDir.map(file => {
    arrNameFile.push(file);
  });
  console.table(arrNameFile);
  logPath();
};
