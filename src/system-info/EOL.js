import os from 'os';

export const getEol = () => {
  const result = JSON.stringify(os.EOL);
  console.log(result); 
};
