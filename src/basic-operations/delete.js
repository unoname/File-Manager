import { rm } from 'node:fs/promises';
import { isFile } from '../helpers/checkOn.js';
import { logErrorInput, logErrorOperation } from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const remove = async source => {
  try {
    const [src] = parsePath(source);
    if (isFile(src)) {
      await rm(src);
    } else {
      logErrorInput();
    }
  } catch {
    logErrorOperation();
  }
};
