import * as readline from 'readline';
import { stdin as input, stdout as output, cwd } from 'process';

import { runCommand } from './src/index.js';
import { logPath } from './src/helpers/messages.js';
import { greetings } from './src/helpers/messages.js';
import { ex } from './src/helpers/exit.js';
import { commands } from './src/index.js';

const rl = readline.createInterface({
  input,
  output,
  prompt: `${greetings}\n${logPath()}\n`,
});

rl.on('line', data => {
  let command =
    data.split(' ')[0] === 'os' ? data.split(' ')[1] : data.split(' ')[0];
  let args = data.split(' ');
  let src = args[1];
  let dest = args[2];

  if ([command] in commands) {
    runCommand(command, src, dest);
  } else {
    console.log(`Invalid input\n${logPath()}\n`);
  }
});

rl.on('SIGINT', () => {
  ex();
});
