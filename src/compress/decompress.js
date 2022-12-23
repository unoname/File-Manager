import { createBrotliDecompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'node:stream';
import { logErrorInput, logErrorOperation } from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const decompress = async (source, destination) => {
  try {
    if ((await isFile(src)) && (await isDirectory(dest))) {
      const [src, dest] = parsePath(source, destination);
      const readStream = await createReadStream(src);
      const writeStream = await createWriteStream(dest);
      const unzip = await createBrotliDecompress();
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
