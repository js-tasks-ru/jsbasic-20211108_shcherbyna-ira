function showSalary(users, age) {
  let usersInRange = getUsersInRange(users, age);
  return writeArrayToString(usersInRange);
}

function getUsersInRange(users, maxAge) {
  let result = [];
  for (let user of users) {
    if (user.age <= maxAge) {
      result.push({
        name: user.name,
        balance: user.balance
      });
    }
  }
  return result;
}

function writeArrayToString(users) {
  let result = [];
  for (let user of users) {
    result.push(user.name.concat(", ", user.balance));
  }
  return result.join("\n");
}
