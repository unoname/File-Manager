import { appendFile } from 'fs/promises';

export const create = async (src, data, flag) => {
  await appendFile(src, data, flag);
};
