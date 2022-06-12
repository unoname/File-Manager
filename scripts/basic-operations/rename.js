import fs from 'node:fs/promises';
import os from 'os';

export const rename = async (oldPath, newPath, pathToCurrentDir) => {
	pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
    try {
			await fs.rename(oldPath, newPath);
		} catch {
			console.log('Operation failed');
	    console.log(`You are currently in ${pathToCurrentDir}`)
		} 
};