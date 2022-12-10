import fs from 'node:fs/promises';
import os from 'os';

export const copy = async (src, dest, options, pathToCurrentDir) => {
  pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
  await fs.copyFile(src, dest, options);
};
