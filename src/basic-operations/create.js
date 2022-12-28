import { appendFile } from 'fs/promises';
import {
  logErrorInput,
  logErrorOperation  
} from '../helpers/messages.js';
import { parsePath } from '../helpers/parsePath.js';

export const create = async function ([source]) {
  try {
    if (source) {
      const [src] = parsePath(source);
      await appendFile(src, '');      
    } else {
      logErrorInput();
    }
  } catch (e) {
    logErrorOperation();
  }
};
