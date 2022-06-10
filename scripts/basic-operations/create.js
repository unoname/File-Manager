import fs from 'node:fs/promises'

export const create = async (src, data, flag) => {
	await fs.appendFile(src, data, flag)  		
};