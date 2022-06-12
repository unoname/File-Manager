import os from 'os';
import path from 'path';

export const getEol = (pathToCurrentDir) => {
	pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
try {
	const result = JSON.stringify(os.EOL);
	console.log(result);
	console.log(`You are currently in ${pathToCurrentDir}`);
 }	catch {
	 	console.log('Operation failed');
	  console.log(`You are currently in ${pathToCurrentDir}`)
 }
}