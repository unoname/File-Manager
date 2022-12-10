import os from 'os';

export const getArch = () => {
   const result = os.arch();
  console.log(
    `CPU architecture for which Node.js binary has compiled: ${result}`
  );
};
