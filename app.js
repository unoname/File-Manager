import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import os from 'os';
import { constants as mode } from 'node:fs';
import { copy } from './src/basic-operations/copy.js';
import { list } from './src/navigation/list.js';
import { read } from './src/basic-operations/cat.js';
import { getEol } from './src/system-info/EOL.js';
import { getUsername } from './src/system-info/username.js';
import { getHomeDir } from './src/system-info/home-directory.js';
import { getArch } from './src/system-info/architectures.js';
import { getCpu } from './src/system-info/cpu.js';
import { remove } from './src/basic-operations/delete.js';
import { compress } from './src/compress/compress.js';
import { decompress } from './src/compress/decompress.js';
import { calculateHash } from './src/hash-calculation/hash-calculation.js';
import { create } from './src/basic-operations/create.js';
import { rn } from './src/basic-operations/rename.js';
import { move } from './src/basic-operations/move.js';
import { up } from './src/navigation/up.js';
import { cd } from './src/navigation/cd.js';

const rl = readline.createInterface({ input, output });
const username = process.argv.slice(2).join('').split('=')[1]
  ? process.argv.slice(2).join('').split('=')[1]
  : 'User';
const pathToHomeDir = os.homedir();
const commands = [
  '.exit',
  'up',
  'cd',
  'ls',
  'cat',
  'cp',
  'rm',
  'add',
  'mv',
  'rn',
  'compress',
  'decompress',
  '--cpus',
  '--homedir',
  '--architecture',
  '--EOL',
  '--username',
  'hash',
];
const greetings = `Welcome to the File Manager, ${username}!`;
const farewellMessage = `Thank you for using File Manager, ${username}!`;
let pathToCurrentDir = '';

rl.write(`${greetings}\nYou are currently in ${pathToHomeDir}\n`);

rl.on('line', data => {
  let command =
    data.split(' ')[0] === 'os' ? data.split(' ')[1] : data.split(' ')[0];
  if (commands.indexOf(command) === -1) {
    console.log(`Invalid input\nYou are currently in ${pathToHomeDir}\n`);
  }

  let args = data.split(' ');
  let src = args[1];
  let dest = args[2];
  switch (command) {
    case '.exit':
      rl.write(farewellMessage);
      process.exit();
    case 'up':
      pathToCurrentDir = up(pathToCurrentDir);
      break;
    case 'cd':
      pathToCurrentDir = cd(src, pathToCurrentDir);
      break;
    case 'ls':
      list(pathToCurrentDir, { withFileTypes: true });
      break;
    case 'cat':
      read(src, pathToCurrentDir);
      break;
    case 'cp':
      copy(src, dest, mode.COPYFILE_EXCL);
      break;
    case 'rm':
      remove(src, dest);
      break;
    case 'add':
      create(src, '', { flag: 'ax' });
      break;
    case 'mv':
      move(src, dest, mode.COPYFILE_EXCL, pathToCurrentDir);
      break;
    case 'rn':
      rn(src, dest);
      break;
    case 'compress':
      compress(src, dest, pathToCurrentDir);
      break;
    case 'decompress':
      decompress(src, dest, pathToCurrentDir);
      break;
    case '--EOL':
      getEol(pathToCurrentDir);
      break;
    case '--cpus':
      getCpu(pathToCurrentDir);
      break;
    case '--homedir':
      getHomeDir(pathToCurrentDir);
      break;
    case '--architecture':
      getArch(pathToCurrentDir);
      break;
    case '--username':
      getUsername(pathToCurrentDir);
      break;
    case 'hash':
      calculateHash(src, pathToCurrentDir);
      break;
  }
  pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : pathToHomeDir;
});

rl.on('SIGINT', () => {
  rl.write(farewellMessage);
  process.exit();
});
