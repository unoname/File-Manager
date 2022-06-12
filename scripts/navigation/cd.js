import path from 'path';
import fs from 'fs/promises';
import os from 'os';

export const cd = (pathToDir, pathToCurrentDir) => {
	pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
try {
	if(pathToDir == '..') {
	let	newPathToCurrentDir = path.dirname(pathToCurrentDir); 
    console.log(`You are currently in ${newPathToCurrentDir}`);
   return newPathToCurrentDir;
	} else if(/^\.\//.test(pathToDir)) {
	    let newPathToCurrentDir = path.resolve(pathToCurrentDir, pathToDir); 
      console.log(`You are currently in ${newPathToCurrentDir}`);
      return newPathToCurrentDir;
    }
  } catch {
     console.log('Operation failed');
	   console.log(`You are currently in ${pathToCurrentDir}`)
  }
}