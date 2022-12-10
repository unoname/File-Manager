import { copyFile, rm } from 'fs/promises';

export const move = async (src, dest, options) => {
  await copyFile(src, dest, options);
  await rm(src);
};
