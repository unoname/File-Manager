import { rename } from 'fs/promises';
import { isFile } from '../helpers/checkOn.js';
import { logErrorInput, logErrorOperation } from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const rn = async (oldPath, newPath) => {
  try {
    const [path] = parsePath(oldPath);
    if (await isFile(path)) {
      await rename(path, newPath);
    } else {
      logErrorInput();
    }
  } catch (e) {
    logErrorOperation();
  }
};
