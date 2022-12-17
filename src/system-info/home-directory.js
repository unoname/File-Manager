import os from 'os';
import { strLogPath } from '../helpers/messages.js';

export const getHomeDir = () => {
  const result = os.homedir();
  console.log(result, strLogPath);
};
