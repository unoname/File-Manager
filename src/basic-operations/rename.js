import { rename } from 'fs/promises';

export const rn = async (oldPath, newPath) => {
  await rename(oldPath, newPath);
};
