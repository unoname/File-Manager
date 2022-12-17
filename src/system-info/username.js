import os from 'os';
import { strLogPath } from '../helpers/messages.js';

export const getUsername = () => {
  const result = os.userInfo();
  console.log(result.username, strLogPath);
};
