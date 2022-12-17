import { readFile } from 'fs/promises';
import { isFile } from '../helpers/checkOn.js';
import {
  logErrorInput,
  logErrorOperation,
  strLogPath,
} from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const read = async src => {
  try {
    const [path] = parsePath(src);
    if (isFile(src)) {
      const data = await readFile(path);
      const result = data.toString();
      console.log(result, strLogPath);
    } else {
      logErrorInput();
    }
  } catch {
    logErrorOperation();
  }
};
