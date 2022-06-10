import os from 'os';

export const getCpu = () => {
	const result = os.cpus();
	console.log(result);
}