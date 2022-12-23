import * as readline from 'readline';
import { homedir } from 'os';
import { stdin as input, stdout as output, chdir } from 'process';
import { logErrorInput, greetings } from './src/helpers/messages.js';
import { ex } from './src/helpers/exit.js';
import { commands } from './src/index.js';

chdir(homedir());
console.log(greetings);
const rl = readline.createInterface({
  input,
  output,
});

rl.on('line', data => {
  let command =
    data.trim().split(' ')[0] === 'os'
      ? data.trim().split(' ')[1]
      : data.trim().split(' ')[0];

  let args = data
    .trim()
    .replace(/\s{2,}/g, ' ')
    .split(' ');
  let src = args[1];
  let dest = args[2];

  if (command in commands) {
    commands[command](src, dest);
  } else {
    logErrorInput();
  }
}).on('SIGINT', () => {
  ex();
});
