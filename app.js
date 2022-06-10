import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import os from 'os';
import { constants as mode } from 'node:fs';
import { copy } from './scripts/basic-operations/copy.js';
import { list } from './scripts/navigation/list.js';
import { read } from './scripts/basic-operations/cat.js';
import { getEol } from './scripts/system-info/EOL.js';
import { getUsername } from './scripts/system-info/username.js';
import { getHomeDir } from './scripts/system-info/home-directory.js';
import { getArch } from './scripts/system-info/architectures.js';
import { getCpu } from './scripts/system-info/cpu.js';
import { remove } from './scripts/basic-operations/delete.js';
import { compress } from './scripts/compress/compress.js';
import { decompress } from './scripts/compress/decompress.js';
import {calculateHash } from './scripts/hash-calculation/hash-calculation.js';
import { create } from './scripts/basic-operations/create.js';
import { rename } from './scripts/basic-operations/rename.js';
import { move } from './scripts/basic-operations/move.js';

const rl = readline.createInterface({ input, output });
const username = process.argv.slice(2).join('').split('=')[1];
const pathToHomeDir = os.homedir();
const commands = ['.exit', 'up', 'cd', 'ls', 'cat', 'cp', 'rm', 'add', 'mv', 'rn', 'compress',
 'decompress', '--cpus', '--homedir', '--architecture', '--EOL', '--username', 'hash'];
const greetings = `Welcome to the File Manager, ${username}!`;
const farewellMessage = `Thank you for using File Manager, ${username}!`;

rl.write(`${greetings}\nYou are currently in ${pathToHomeDir}\n`);

rl.on('line', (data) => {	
	let command = data.split(' ')[0] === 'os' ? data.split(' ')[1] : data.split(' ')[0];
	if(commands.indexOf(command) === -1) {	
	console.log(`Invalid input\nYou are currently in ${pathToHomeDir}\n`);		
	}
	let args = data.split(' ');
	let src = args[1];
	let dest = args[2];
	switch(command) {
		case '.exit': rl.write(farewellMessage);
	process.exit();
	case 'up': output.write(`You are currently in ${pathToHomeDir}\n`); break;
	case 'cd': output.write(`You are currently in ${pathToHomeDir}\n`); break;
	case 'ls': list(src, {withFileTypes: true}, pathToHomeDir); break;
	case 'cat': read(src, pathToHomeDir); break;
	case 'cp': copy(src, dest, mode.COPYFILE_EXCL, pathToHomeDir); break; 
	case 'rm': remove(src, dest, pathToHomeDir); break; 
	case 'add': create(src, '', {flag: 'ax'}); output.write(`You are currently in ${pathToHomeDir}\n`); break;	
	case 'mv': move(src, dest, mode.COPYFILE_EXCL, pathToHomeDir); break;
	case 'rn': rename(src, dest, pathToHomeDir); break;
	case 'compress': compress(src, dest, pathToHomeDir);  break;
	case 'decompress': decompress(src, dest, pathToHomeDir); break;
	case '--EOL': getEol(); output.write(`You are currently in ${pathToHomeDir}\n`); break; 
	case '--cpus': getCpu(); output.write(`You are currently in ${pathToHomeDir}\n`); break;
  case '--homedir': getHomeDir(); output.write(`${pathToHomeDir}\nYou are currently in ${pathToHomeDir}\n`); break;
	case '--architecture': getArch(); output.write(`You are currently in ${pathToHomeDir}\n`); break;
	case '--username': getUsername(); output.write(`You are currently in ${pathToHomeDir}\n`); break;	
	case 'hash': calculateHash(src, pathToHomeDir); break;
	}
})

rl.on("SIGINT", () => {
	rl.write(farewellMessage);
	process.exit();
})


