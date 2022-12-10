import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import os from 'os';

export const compress = async (src, dest, pathToHomeDir) => {
  const readStream = createReadStream(src);
  const writeStream = createWriteStream(dest);
  const zip = createBrotliCompress();
  await pipeline(readStream, zip, writeStream, err => {
    if (err) {
      throw new Error(
        'Operation failed\nYou are currently in ${pathToCurrentDir}'
      );
    }
  });
};
