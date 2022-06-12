import path from 'node:path';
import fs from 'node:fs/promises';
import os from 'os';

export const list = async (pathToCurrentDir, options) => {  
	  pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
	try {
		const readDir = await fs.readdir(pathToCurrentDir, options);
		const arrNameFile = [];
	readDir.map(file => {
		arrNameFile.push(file.name);
		});
		console.table(arrNameFile)
				console.log(`You are currently in ${pathToCurrentDir}\n`);				
	} catch {		
			console.log('Operation failed');	
	}		
};