import os from 'os';

export const getUsername = () => {  
  const result = os.userInfo();
  console.log(result.username);
};
