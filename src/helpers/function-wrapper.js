import { logError, logPath } from './messages.js';

export const function_wrapper = async (func, ...arg) => {
  try {
    await func(...arg);
    logPath();
  } catch {
    logError();
  }
};
