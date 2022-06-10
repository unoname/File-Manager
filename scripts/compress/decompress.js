import { createBrotliDecompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'node:stream';

export const decompress = async (src, dest, pathToHomeDir) => {
  try{
		const readStream = createReadStream(src);
	const writeStream = createWriteStream(dest)
   const unzip = createBrotliDecompress();
	  pipeline(readStream, unzip, writeStream, (err) => {
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