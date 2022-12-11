export const username = process.argv.slice(2).join('').split('=')[1]
  ? process.argv.slice(2).join('').split('=')[1]
  : 'User';
const farewellMessage = `Thank you for using File Manager, ${username}!`;

export const ex = () => {
  console.log(farewellMessage);
  process.exit();
};
