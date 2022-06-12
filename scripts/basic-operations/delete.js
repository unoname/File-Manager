import fs from 'node:fs/promises';
import os from 'os';

export const remove = async (src, pathToCurrentDir) => {
	pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
  try {
		await fs.rm(src);
		console.log(`You are currently in ${pathToCurrentDir}`)
	} catch {
		console.log('Operation failed');
	  console.log(`You are currently in ${pathToCurrentDir}`)
	}  
};
