import { cwd } from 'process';
import { username } from './exit.js';
import { homedir } from 'os';

export const logErrorOperation = () => {
  console.log(`Operation failed\n`);
};

export const logErrorInput = () => {
  console.log(`Invalid input\n`);
};

export const logPath = () => {
  console.log(`You are currently in ${cwd()}`);
};

export const strLogPath = `\nYou are currently in ${cwd()}`;

export const greetings = `Welcome to the File Manager, ${username}!\nYou are currently in ${homedir()}`;
