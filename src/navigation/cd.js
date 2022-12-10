import { resolve } from 'path';
import { stat } from 'fs/promises';
import { chdir, cwd } from 'process';

export const cd = destinationPath => {
  if (pathToDir == '..' || pathToDir == '../') {
    let newPathToCurrentDir = path.dirname(pathToCurrentDir);
    console.log(`You are currently in ${newPathToCurrentDir}`);
    return newPathToCurrentDir;
  } else if (/^\.\//.test(pathToDir)) {
    const dirStat = stat(resolve(pathToCurrentDir, pathToDir));
    dirStat
      .then(dir => {
        if (dir.isDirectory()) {
          console.log(
            `You are currently in ${resolve(pathToCurrentDir, pathToDir)}`
          );
        }
      })
      .catch(err => {
        console.log(
          `Operation failed\nYou are currently in ${pathToCurrentDir}`
        );
      });
  }
};
