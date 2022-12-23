import { stat } from 'fs/promises';
import { logErrorInput } from './messages.js';

export const isFile = src => {
  try {
    const statFile = stat(src);
    return statFile.then(file => {
      return file.isFile();
    });
  } catch (e) {
    return false;
  }
};

export const isDirectory = source => {
  try {
    const src = source
      .split('/')
      .filter((e, i, arr) => i != arr.length - 1)
      .join('/');
    const statDir = stat(src);
    return statDir.then(dir => {
      return dir.isDirectory();
    });
  } catch (e) {
    return false;
  }
};
