import { createBrotliDecompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'node:stream';
import { logErrorInput, logErrorOperation } from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';
import { isFile, isDirectory } from '../helpers/checkOn.js';

export const decompress = async ([source, destination]) => {
  try {
    const [src, dest] = parsePath(source, destination);
    if ((await isFile(src)) && (await isDirectory(dest))) {
      const readStream = createReadStream(src);
      const writeStream = createWriteStream(dest);
      const unzip = createBrotliDecompress();
      await pipeline(readStream, unzip, writeStream, err => {
        if (err) {
          logErrorOperation();
        }
      });
    } else {
      logErrorInput();
    }
  } catch (e) {
    logErrorOperation();
  }
};
