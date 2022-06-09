import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import os from 'os';
import { copy, copyFile} from './scripts/basic-operations/copy.js';
import { list } from './scripts/navigation/list.js';

const rl = readline.createInterface({ input, output });
const username = process.argv.slice(2).join('').split('=')[1];
const pathToHomeDir = os.homedir;
const commands = ['.exit', 'up', 'cd', 'ls', 'cat', 'cp', 'rm', 'add', 'mv', 'rn', 'compress',
 'decompress', '--cpus', '--homedir', '--architecture']

rl.write(`Welcome to the File Manager, ${username}!\nYou are currently in ${pathToHomeDir}\n`);
rl.on('line', (data) => {	
	let command = data.split(' ')[0] === 'os' ? data.split(' ')[1] : data.split(' ')[0];
	if(commands.indexOf(command) === -1) {	
	console.log(`Invalid input\nYou are currently in ${pathToHomeDir}\n`);		
	}
	let args = data.split(' ');
	let fromPath = args[1];
	let toPath = args[2];
	switch(command) {
		case '.exit': rl.write(`Thank you for using File Manager, ${username}!`);
	process.exit();
	case 'up': output.write(`You are currently in ${pathToHomeDir}\n`); break;
	case 'cd': output.write(`You are currently in ${pathToHomeDir}\n`); break;
	case 'ls': list(fromPath, {withFileTypes: true}); 
	output.write(`You are currently in ${pathToHomeDir}\n`); 
	break;
	case 'cat': output.write(`You are currently in ${pathToHomeDir}\n`); break;
	case 'cp': copy(fromPath, {withFileTypes: true}, toPath); 
	output.write(`You are currently in ${pathToHomeDir}\n`);
	break; 
	case 'rm': output.write(`You are currently in ${pathToHomeDir}\n`); break; 
	case 'add': output.write(`You are currently in ${pathToHomeDir}\n`); break;	
	case 'mv': output.write(`You are currently in ${pathToHomeDir}\n`); break;
	case 'rn': output.write(`You are currently in ${pathToHomeDir}\n`); break;
	case 'compress':output.write(`You are currently in ${pathToHomeDir}\n`); break;
	case 'decompress': output.write(`You are currently in ${pathToHomeDir}\n`); break;
	case '--cpus': output.write(`You are currently in ${pathToHomeDir}\n`); break;
  case '--homedir': output.write(`${pathToHomeDir}\nYou are currently in ${pathToHomeDir}\n`); break;
	case '--architecture': output.write(`You are currently in ${pathToHomeDir}\n`); break;	
	}
})
rl.on("SIGINT", () => {
	rl.write(`Thank you for using File Manager, ${username}!`);
	process.exit();
})


