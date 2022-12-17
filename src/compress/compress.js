import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { logErrorInput, logErrorOperation } from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const compress = async (source, destination) => {
  try {
    const [src, dest] = parsePath(source, destination);
    const readStream = await createReadStream(src);
    const writeStream = await createWriteStream(dest);
    const zip = await createBrotliCompress();
    await pipeline(readStream, zip, writeStream, err => {
      if (err) {
        logErrorOperation();
      }
    });
  } catch {
    logErrorInput();
  }
};
