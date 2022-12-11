import { readFile } from 'fs/promises';

export const read = async src => {
  const data = await readFile(src);
  const result = data.toString();
  console.log(result);
};
