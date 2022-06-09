import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathDir = path.join(__dirname, 'files');
const pathCopyDir = path.join(__dirname, 'files_copy');

export const copy = async (src, options, srcCopyDir) => {
   try {
		 await fs.mkdir(srcCopyDir);
			copyFile(src, options).catch(err => {
				if(err) {
					console.error('FS operation failed');
				}
			})
	 } catch {
		 console.log('Operation failed')
	 }			
};
export const copyFile = async (src, options) => {
  const readDir = await fs.readdir(src, options);
	readDir.map(file => {
		let srcFile = path.join(pathDir, `${file.name}`);
				let destFile = path.join(pathCopyDir, `${file.name}`);
			if(file.isFile()) {				
				fs.copyFile(srcFile, destFile);
			} else {
				copyFile(srcFile, options);
			}
		})
}
