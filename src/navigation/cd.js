import { stat } from 'fs/promises';
import { chdir } from 'process';
import { parsePath } from '../helpers/parsePath.js';

export const cd = async ([destinationPath]) => {
  const [dest] = parsePath(destinationPath);
  const dirStat = await stat(dest);
  if (await dirStat.isDirectory()) {
    chdir(dest);
  }
};
