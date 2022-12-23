import { copyFile } from 'node:fs/promises';
import { isDirectory, isFile } from '../helpers/checkOn.js';
import { logErrorInput, logErrorOperation } from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const copy = async (source, destination) => {
  try {
    const [src, dest] = parsePath(source, destination);
    console.log(src, dest);
    if (await isFile(src) && await isDirectory(dest)) {
      await copyFile(src, dest);
    } else {
      logErrorInput();
    }
  } catch(e) {
    logErrorOperation();
  }
};
