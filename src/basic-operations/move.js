import { copyFile, rm } from 'fs/promises';
import { isFile } from '../helpers/checkOn.js';
import { logErrorInput, logErrorOperation } from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const move = async (source, destination) => {
  try {
    const [src, dest] = parsePath(source, destination);
    if (await isFile(src)) {
      await copyFile(src, dest);
      await rm(src);
    } else {
      logErrorInput();
    }
  } catch(e) {
    logErrorOperation();
  }
};
