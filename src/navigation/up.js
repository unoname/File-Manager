import path from 'path';
import { chdir, cwd } from 'process';

export const up = async () => {
  let pathToCurrentDir = path.resolve(cwd(), '..');
  chdir(pathToCurrentDir);
};
