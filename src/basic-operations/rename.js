import { rename } from 'fs/promises';
import os from 'os';

export const rn = async (oldPath, newPath) => {
  await rename(oldPath, newPath);
};
