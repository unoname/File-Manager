import { createReadStream } from 'fs';
import { stdout } from 'process';
import { isFile } from '../helpers/checkOn.js';
import { logErrorInput } from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const read = async function ([src]) {
  const [path] = parsePath(src);
  if (await isFile(path)) {
    const readStream = await createReadStream(path);
    readStream.on('error', err => {
      console.log('Invalid input', err.message);
    });
    readStream.pipe(stdout);
  } else {
    logErrorInput();
  }
};
