import { rm } from 'node:fs/promises';

export const remove = async src => {
  await rm(src);
};
