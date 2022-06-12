import os from 'os';

export const getCpu = (pathToCurrentDir) => {
	pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
try {
	const result = os.cpus();
	console.log(result);
	console.log(`You are currently in ${pathToCurrentDir}`);
  }	catch {
			console.log('Operation failed');
	    console.log(`You are currently in ${pathToCurrentDir}`);
	}
}