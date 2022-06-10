import fs from 'node:fs/promises';
import { constants } from 'fs';

export const read = async (src, pathToCurrentDir) => {
try{		
		await fs.access(src, constants.R_OK | constants.W_OK);			 
	const data = await fs.readFile(src);
	const result = data.toString();
	console.log(result);
	console.log(`You are currently in ${pathToCurrentDir}`);
	}	catch {
	console.log('Operation failed');
	console.log(`You are currently in ${pathToCurrentDir}`)
	}  
};