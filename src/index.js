import { function_wrapper } from './helpers/function-wrapper.js';
import { copy } from './basic-operations/copy.js';
import { list } from './navigation/list.js';
import { read } from './basic-operations/cat.js';
import { getEol } from './system-info/EOL.js';
import { getUsername } from './system-info/username.js';
import { getHomeDir } from './system-info/home-directory.js';
import { getArch } from './system-info/architectures.js';
import { getCpu } from './system-info/cpu.js';
import { remove } from './basic-operations/delete.js';
import { compress } from './compress/compress.js';
import { decompress } from './compress/decompress.js';
import { calculateHash } from './hash-calculation/hash-calculation.js';
import { create } from './basic-operations/create.js';
import { rn } from './basic-operations/rename.js';
import { move } from './basic-operations/move.js';
import { up } from './navigation/up.js';
import { cd } from './navigation/cd.js';
import { ex } from './helpers/exit.js';

export const commands = {
  '.exit': ex,
  up: up,
  cd: cd,
  ls: list,
  cat: read,
  cp: copy,
  rm: remove,
  add: create,
  mv: move,
  rn: rn,
  compress: compress,
  decompress: decompress,
  '--cpus': getCpu,
  '--homedir': getHomeDir,
  '--architecture': getArch,
  '--EOL': getEol,
  '--username': getUsername,
  hash: calculateHash,
};
export const runCommand = function (command, ...args) {
  
    function_wrapper(commands[command], ...args);
 
};
