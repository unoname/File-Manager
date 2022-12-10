import fs from 'fs';
import os from 'os';
import { constants } from 'fs';

const { createHash } = await import('crypto');

export const calculateHash = (src, pathToCurrentDir) => {
  const hash = createHash('sha256');
  fs.access(src, constants.F_OK, err => {
    if (err) {
      console.log(`file ${err ? 'does not exist' : 'exists'}`);
    }
  });
  const input = fs.createReadStream(src);
  input.on('data', chunk => {
    hash.update(chunk);
  });
  input.on('end', () => {
    console.log(hash.digest('hex'));
  });
};
