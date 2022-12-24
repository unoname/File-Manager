import { createReadStream } from 'fs';
import { stdout } from 'process';
import { isFile } from '../helpers/checkOn.js';
import {
  logErrorInput,
  logErrorOperation,
  logPath,
} from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const read = async src => {
  try {
    const [path] = parsePath(src);
    if (isFile(path)) {
      const readStream = await createReadStream(path);
      readStream.pipe(stdout);
      logPath();
    } else {
      logErrorInput();
    }
  } catch (e) {
    logErrorOperation();
  }
};
