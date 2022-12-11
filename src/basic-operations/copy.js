import { copyFile } from 'node:fs/promises';

export const copy = async (src, dest, options) => {
  await copyFile(src, dest, options);
};
