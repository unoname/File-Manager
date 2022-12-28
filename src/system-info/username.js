import os from 'os';

export const getUsername = async () => {
  const result = os.userInfo();
  console.log(result.username);
};
