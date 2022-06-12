import os from 'os';

export const getArch = (pathToCurrentDir) => {
	pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
	try {
		const result = os.arch();
	  console.log(`CPU architecture for which Node.js binary has compiled: ${result}`);	
	 	console.log(`You are currently in ${pathToCurrentDir}`)
	} catch {
			console.log('Operation failed');
	    console.log(`You are currently in ${pathToCurrentDir}`)
	}
}