import { stat } from 'fs/promises';
import { chdir } from 'process';
import { logErrorInput, logPath } from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const cd = async destinationPath => {
  try {
    if (destinationPath) {
      const [dest] = parsePath(destinationPath);
      const dirStat = await stat(dest);
      if (dirStat.isDirectory()) {
        chdir(dest);
        logPath();
      }
    } else {
      logErrorInput();
    }
  } catch {
    logErrorInput();
  }
};
