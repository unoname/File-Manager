import { createReadStream, createWriteStream } from 'fs';
import { isDirectory, isFile } from '../helpers/checkOn.js';
import {
  logErrorInput,
  logErrorOperation,
  logPath,
} from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const copy = async (source, destination) => {
  try {
    const [src, dest] = parsePath(source, destination);
    if ((await isFile(src)) && (await isDirectory(dest))) {
      const readStream = createReadStream(src);
      const writeStream = createWriteStream(dest);
      await readStream.pipe(writeStream);
      logPath();
    } else {
      logErrorInput();
    }
  } catch (e) {
    logErrorOperation();
  }
};
