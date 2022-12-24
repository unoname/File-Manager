import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { logErrorInput, logErrorOperation } from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';
import { isFile, isDirectory } from '../helpers/checkOn.js';

export const compress = async (source, destination) => {
  try {
    const [src, dest] = parsePath(source, destination);
    if ((await isFile(src)) && (await isDirectory(dest))) {
      const readStream = createReadStream(src);
      const writeStream = createWriteStream(dest);
      const zip = createBrotliCompress();
      await pipeline(readStream, zip, writeStream, err => {
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
