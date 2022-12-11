import { cwd } from 'process';
import { username } from './exit.js';

export const logError = path => {
  console.log(`Operation failed\nYou are currently in ${path}`);
};

export const logPath = () => {
  console.log(`You are currently in ${cwd()}`);
};

export const greetings = `Welcome to the File Manager, ${username}!`;
