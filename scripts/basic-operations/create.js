import fs from 'node:fs/promises'
import os from 'os';

export const create = async (src, data, flag, pathToCurrentDir) => {
	pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
	try {
		await fs.appendFile(src, data, flag);		
 	  console.log(`You are currently in ${pathToCurrentDir}`) 
	} catch { 
			console.log('Operation failed');
	    console.log(`You are currently in ${pathToCurrentDir}`)
	} 		
};