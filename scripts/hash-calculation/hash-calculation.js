import { createReadStream } from 'fs';
import { stdout } from 'process';
const { createHash } = await import('crypto');

export const calculateHash = async (src, pathToHomeDir) => {
    const hash = createHash('sha256');
    const input = createReadStream(src);
		input.on('data', (chunk => {
			hash.update(chunk);
		}));
		input.on('end', () => {
			console.log(hash.digest('hex'));
			console.log(`You are currently in ${pathToHomeDir}\n`);
		});    
};
