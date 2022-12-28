import * as readline from 'readline';
import { homedir } from 'os';
import { stdin as input, stdout as output, chdir } from 'process';
import {
  logErrorInput,
  greetings,
  logPath,
  logErrorOperation,
} from './src/helpers/messages.js';
import { ex } from './src/helpers/exit.js';
import { runCommand } from './src/index.js';

chdir(homedir());
console.log(greetings);
const rl = readline.createInterface({
  input,
  output,
});

rl.on('line', async data => {
  const command =
    data.trim().split(' ')[0] === 'os'
      ? data.trim().split(' ')[1]
      : data.trim().split(' ')[0];

  const args = data
    .trim()
    .replace(/\s{2,}/g, ' ')
    .split(' ');
  const src = args[1];
  const dest = args[2];
  await runCommand(command, src, dest);
})
  .on('SIGINT', () => {
    ex();
  })
  .on('error', err => {
    console.log(err.message);
  });
