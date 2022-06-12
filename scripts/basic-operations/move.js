import fs from 'node:fs/promises';
import os from 'os';

export const move = async (src, dest, options, pathToCurrentDir) => {
	pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
	try {
		await fs.copyFile(src, dest, options);
		await fs.rm(src);
		console.log(`You are currently in ${pathToCurrentDir}`)
	} catch {
		console.log('Operation failed');
	console.log(`You are currently in ${pathToCurrentDir}`)
	}  
};
