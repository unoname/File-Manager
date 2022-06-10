import os from 'os';

export const getEol = () => {
	const result = os.EOL;
	console.log(result);
}