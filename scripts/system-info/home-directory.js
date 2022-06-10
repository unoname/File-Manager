import os from 'os';

export const getHomeDir = () => {
	const result = os.homedir();
	console.log(result);
}