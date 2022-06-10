import fs from 'node:fs/promises';

export const rename = async (oldPath, newPath, pathToCurrentDir) => {
    try {
			await fs.rename(oldPath, newPath);
		} catch {
			console.log('Operation failed');
	    console.log(`You are currently in ${pathToCurrentDir}`)
		} 
};