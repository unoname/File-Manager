import os from 'os';

export const getHomeDir = async () => {
  const result = os.homedir();
  console.log(result);
};
