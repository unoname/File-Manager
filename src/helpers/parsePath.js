import { resolve } from 'path';
import { cwd } from 'process';

export const parsePath = function(...args) {
	return [...args].map(path => resolve(cwd(), path))
}
