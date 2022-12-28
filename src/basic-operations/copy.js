import { createReadStream, createWriteStream } from 'fs';
import { isDirectory, isFile } from '../helpers/checkOn.js';
import {
  logErrorInput,
  logErrorOperation,
  logPath,
} from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const copy = async function ([source, destination]) {
  const [src, dest] = parsePath(source, destination);
  if ((await isFile(src)) && (await isDirectory(dest))) {
    const readStream = await createReadStream(src);
    readStream.on('error', err => {
      console.log('Invalid input', err.message);
    });
    const writeStream = await createWriteStream(dest);
    writeStream.on('error', err => {
      console.log('Invalid input', err.message);
    });
    await readStream.pipe(writeStream);
  } else {
    logErrorInput();
  }
};
