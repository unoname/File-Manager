import { createBrotliCompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'node:stream';

export const compress = async (src, dest, pathToHomeDir) => {
	try {
		const readStream = createReadStream(src);
	const writeStream = createWriteStream(dest)
   const zip = createBrotliCompress();
	  pipeline(readStream, zip, writeStream, (err) => {
		 if(err) {
			throw err;
		 }
	 });
	    console.log(`You are currently in ${pathToHomeDir}\n`);  
	} catch {
		console.log('Operation failed');
	console.log(`You are currently in ${pathToCurrentDir}`)
	}
};