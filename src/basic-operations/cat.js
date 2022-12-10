import fs from 'node:fs/promises';
import { constants } from 'fs';
import os from 'os';

export const read = async (src, pathToCurrentDir) => {
	pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
try {		
	const data = await fs.readFile(src);
	const result = data.toString();
	console.log(result);
	console.log(`You are currently in ${pathToCurrentDir}`);		 	
	}	catch {
	console.log('Operation failed');
	console.log(`You are currently in ${pathToCurrentDir}`)
	}  
};