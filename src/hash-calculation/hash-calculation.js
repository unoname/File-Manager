import { createReadStream, access } from 'fs';

const { createHash } = await import('crypto');

export const calculateHash = (src, pathToCurrentDir) => {
  const hash = createHash('sha256');
  access(src, err => {
    if (err) {
      console.log(`file ${err ? 'does not exist' : 'exists'}`);
    }
  });
  const input = createReadStream(src);
  input.on('data', chunk => {
    hash.update(chunk);
  });
  input.on('end', () => {
    console.log(hash.digest('hex'));
  });
};
