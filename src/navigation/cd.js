import { resolve } from 'path';
import { stat } from 'fs/promises';
import { cwd, chdir } from 'process';
import { logErrorInput, logPath } from '../helpers/messages.js';

export const cd = async destinationPath => {
  const [dest] = parsePath(destinationPath);
  try {
    const dirStat = await stat(dest);
    if (dirStat.isDirectory()) {
      chdir(dest);
      logPath();
    }
  } catch {
    logErrorInput();
  }
};
