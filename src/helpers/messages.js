import { cwd } from 'process';
import { username } from './exit.js';

export const logErrorOperation = () => {
  console.log(`Operation failed${strLogPath}\n`);
};

export const logErrorInput = () => {
  console.log(`Invalid input${strLogPath}\n`);
};

export const logPath = () => {
  console.log(`You are currently in ${cwd()}`);
};

export const strLogPath = `\nYou are currently in ${cwd()}`;

export const greetings = `Welcome to the File Manager, ${username}!`;
