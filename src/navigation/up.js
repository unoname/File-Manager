import path from 'path';
import { chdir, cwd } from 'process';

export const up = () => {
  pathToCurrentDir = path.resole(cwd(), '..');
  chdir(pathToCurrentDir);
};
