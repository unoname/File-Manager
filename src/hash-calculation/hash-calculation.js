import { createReadStream } from 'fs';
import { logErrorInput, logErrorOperation } from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';
import { isFile } from '../helpers/checkOn.js';

const { createHash } = await import('crypto');

export const calculateHash = async source => {
  try {
    const hash = createHash('sha256');
    const [src] = parsePath(source);
    if (isFile(src)) {
      const input = await createReadStream(src);
      input.on('data', chunk => {
        hash.update(chunk);
      });
      input.on('end', () => {
        console.log(hash.digest('hex'));
      });
    } else {
      logErrorInput();
    }
  } catch {
    logErrorOperation();
  }
};
