import { isAbsolute, resolve } from 'path';
import { cwd } from 'process';

export const parsePath = function (...args) {
  return [...args].map(path => {
    if (isAbsolute(path)) {
      return path;
    } else {
      return resolve(cwd(), path);
    }
  });
};
