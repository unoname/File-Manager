import { stat } from 'fs/promises';
import { basename } from 'path';

export const isFile = async src => {
  try {
    const statFile = stat(src);
    return statFile.then(file => {
      return file.isFile();
    });
  } catch (e) {
    return false;
  }
};

export const isDirectory = async dest => {
  try {
    const pathToDir = dest.replace(basename(dest), '');
    const statDir = stat(pathToDir);
    return statDir.then(dir => {
      return dir.isDirectory();
    });
  } catch (e) {
    return false;
  }
};
