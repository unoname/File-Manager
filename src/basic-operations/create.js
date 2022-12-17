import { appendFile } from 'fs/promises';
import { logErrorInput, logErrorOperation, logPath } from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const create = async function (source) {
  try {
    if (source) {
      const [src] = parsePath(source);
      await appendFile(src, '');
			logPath();
    } else {
      logErrorInput();
    }
  } catch {
    logErrorOperation();
  }
};
