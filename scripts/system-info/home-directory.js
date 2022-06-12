import os from 'os';

export const getHomeDir = (pathToCurrentDir) => {
	pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
	try {
		const result = os.homedir();
	  console.log(result);
		console.log(`You are currently in ${pathToCurrentDir}`)
	} catch {
			console.log('Operation failed');
	    console.log(`You are currently in ${pathToCurrentDir}`)
	} 
}