export const username = process.argv.slice(4).join('').split('=').pop()
  ? process.argv[4].split('=').pop()
  : 'User';
const farewellMessage = `Thank you for using File Manager, ${username}!`;

export const ex = () => {
  console.log(farewellMessage);
  process.exit();
};
