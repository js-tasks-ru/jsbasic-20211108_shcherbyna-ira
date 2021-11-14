function sumSalary(salaries) {
  let result = 0;
  for (let salary in salaries) {
    if(Number.isFinite(salaries[salary])) {
      result += salaries[salary];
    }
  }
  return result;
}
