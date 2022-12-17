import path from 'path';
import { chdir, cwd } from 'process';
import { logPath } from '../helpers/messages.js';

export const up = () => {
  let pathToCurrentDir = path.resolve(cwd(), '..');
  chdir(pathToCurrentDir);
  logPath();
};
