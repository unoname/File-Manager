import os from 'os';


export const getEol = async () => {
  const result = JSON.stringify(os.EOL);
  console.log(result);
};
