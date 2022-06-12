import os from 'os';

export const getUsername = (pathToCurrentDir) => {
	pathToCurrentDir = pathToCurrentDir ? pathToCurrentDir : os.homedir();
try {
		const result = os.userInfo();
	console.log(result.username);
		console.log(`You are currently in ${pathToCurrentDir}`)
}	catch {
		console.log('Operation failed');
	  console.log(`You are currently in ${pathToCurrentDir}`)
 }
}