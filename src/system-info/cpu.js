import os from 'os';
import { strLogPath } from '../helpers/messages.js';

export const getCpu = () => {
  const result = os.cpus();
  console.log(result, strLogPath);
};
