import os from 'os';
import { strLogPath } from '../helpers/messages.js';

export const getEol = () => {
  const result = JSON.stringify(os.EOL);
  console.log(result, strLogPath);
};
