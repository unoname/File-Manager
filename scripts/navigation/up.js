import path from 'path';
import os from 'os';

export const up = (pathToCurrentDir) => {
	pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
try {
	pathToCurrentDir = path.dirname(pathToCurrentDir);
 console.log(`You are currently in ${pathToCurrentDir}`);
 return pathToCurrentDir; 
  } catch {
			console.log('Operation failed');
	    console.log(`You are currently in ${pathToCurrentDir}`);
	}
}