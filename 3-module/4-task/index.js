function showSalary(users, age) {
  let usersInRange = getUsersInRange(users, age);
  return writeArrayToString(usersInRange);
}

function getUsersInRange(users, maxAge) {
  return users
    .filter(user => user.age <= maxAge)
    .map(user => {
      return {
        name: user.name,
        balance: user.balance
    };
  });
}

function writeArrayToString(users) {
  return users.map(user => user.name.concat(", ", user.balance)).join("\n");
}
