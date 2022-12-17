import { stat } from 'fs/promises';
import { logErrorInput } from './messages.js';

export const isFile = async src => {
  try {
    const statFile = await stat(src);
    return statFile.isFile();
  } catch {
    return false;
  }
};

export const isDirectory = async source => {
  try {
    const src = source
      .split('/')
      .filter((e, i, arr) => i != arr.length - 1)
      .join('/');
    const statDir = await stat(src);
    return statDir.isDirectory();
  } catch {
    return false;
  }
};
