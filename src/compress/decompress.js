import { createBrotliDecompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'node:stream';
import os from 'os';

export const decompress = async (src, dest, pathToHomeDir) => {
  const readStream = createReadStream(src);
  const writeStream = createWriteStream(dest);
  const unzip = createBrotliDecompress();
  await pipeline(readStream, unzip, writeStream, err => {
    if (err) {
      throw new Error(
        'Operation failed\nYou are currently in ${pathToCurrentDir}'
      );
    }
  });
};
