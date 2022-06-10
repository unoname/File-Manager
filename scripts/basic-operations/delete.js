import fs from 'node:fs/promises';

export const remove = async (src, pathToCurrentDir) => {
  try {
		await fs.rm(src);
		console.log(`You are currently in ${pathToCurrentDir}`)
	} catch {
		console.log('Operation failed');
	console.log(`You are currently in ${pathToCurrentDir}`)
	}  
};
