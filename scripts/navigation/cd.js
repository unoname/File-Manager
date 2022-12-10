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
			const dirStat =	fs.stat(path.resolve(pathToCurrentDir, pathToDir));
			dirStat.then(dir => {if(dir.isDirectory()){
			 console.log(`You are currently in ${path.resolve(pathToCurrentDir, pathToDir)}`);
		  }	}).catch(err => {console.log(`Operation failed\nYou are currently in ${pathToCurrentDir}`)})	
    }
  } catch {
     console.log('Operation failed');
	   console.log(`You are currently in ${pathToCurrentDir}`)
  }
}