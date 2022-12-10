import { readdir } from 'fs/promises';
import { cwd } from 'process';

export const list = async () => {
  const readDir = await readdir(cwd());
  const arrNameFile = [];
  readDir.map(file => {
    arrNameFile.push(file.name);
  });
  console.table(arrNameFile);
};
