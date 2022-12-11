import { resolve } from 'path';
import { stat } from 'fs/promises';
import { chdir, cwd } from 'process';

export const cd = async destinationPath => {
  const dirStat = await stat(resolve(destinationPath));
  dirStat.then(dir => {
    if (dir.isDirectory()) {
      chdir(destinationPath);
    }
  });
  // .catch(err => {
  //   console.log(`Operation failed\nYou are currently in ${cwd()}`);
  // });
};
