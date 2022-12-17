import { appendFile } from 'fs/promises';
import { isFile } from '../helpers/checkOn.js';
import { logErrorInput, logErrorOperation } from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const create = async function (source) {
  try {
    if (source) {
      const [src] = parsePath(source);
      if (!isFile(src)) await appendFile(src, '');
    } else {
      logErrorInput();
    }
  } catch {
    logErrorOperation();
  }
};
