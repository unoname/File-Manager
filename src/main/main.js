import { ex } from "./exit.js";
import { copy } from '../basic-operations/copy.js';
import { list } from '../navigation/list.js';
import { read } from '../basic-operations/cat.js';
import { getEol } from '../system-info/EOL.js';
import { getUsername } from '../system-info/username.js';
import { getHomeDir } from '../system-info/home-directory.js';
import { getArch } from '../system-info/architectures.js';
import { getCpu } from '../system-info/cpu.js';
import { remove } from '../basic-operations/delete.js';
import { compress } from '../compress/compress.js';
import { decompress } from '../compress/decompress.js';
import {calculateHash } from '../hash-calculation/hash-calculation.js';
import { create } from '../basic-operations/create.js';
import { rename } from '../basic-operations/rename.js';
import { move } from '../basic-operations/move.js';
import { constants as mode } from 'node:fs';
import { up } from '../navigation/up.js'
import { EOL } from "node:os";

export class Operations {
	constructor (CurrentDir = pathToHomeDir) {
		this.CurrentDir = CurrentDir;
		this.option = {withFileTypes: true};
    this.flag = {flag: 'ax'};
		this.constant = mode.COPYFILE_EXC;
		this.operation = ['up', 'cd', 'ls', 'cat', 'add', 'rb', 'cp', 'mv', 'rm', 'os --EOL', 'os --cpus',
		 'os --architecture', 'os --homedir', 'os --username', 'hash', 'compress', 'decompress', '.exit'];		 
	}
	exit (farewellMessage) {
		ex(farewellMessage)
	} 
	
	up(pathToCurrentDir) {
		up(pathToCurrentDir)
	}	

	cd(pathToDir) {
   cd(pathToDir, this.pathToCurrentDir)
	}

	ls(pathToCurrentDir) {
    list(pathToCurrentDir, this.option)
	}

	cat(src) {
		read(src, this.pathToCurrentDir)
	}

  cp() {
		copy()
	}

	rm() {
		remove()
	}

	add() {
		create()
	}

	mv() {
		move()
	}

	rn() {
		rename()
	}

	compress() {
		compress()
	}

	decompress() {
		decompress()
	}

	EOL() {
    getEol()
	}
	cpus() {
		getCpu()
	}

	homeDir() {
		getHomeDir()
	}
	arhitecture() {
		getArch()
	}

	username() {
		getUsername()
	}

	hash() {
		calculateHash()
	}	
}