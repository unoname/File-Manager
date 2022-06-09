import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import os from 'os';

const rl = readline.createInterface({ input, output });
const username = process.argv.slice(2).join('').split('=')[1];
const pathToHomeDir = os.homedir;
rl.write(`Welcome to the File Manager, ${username}!\n You are currently in ${pathToHomeDir}\n`);
rl.on('line', (data) => {
	switch(data) {
		case '.exit': rl.write(`Thank you for using File Manager, ${username}!`);
	process.exit();
	}
})
rl.on("SIGINT", () => {
	rl.write(`Thank you for using File Manager, ${username}!`);
	process.exit();
})


