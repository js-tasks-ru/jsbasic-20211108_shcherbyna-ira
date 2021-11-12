function filterRange(array, a, b) {
  let min = a;
  let max = b;
  let filteredArray = [];

  if (a > b) {
    max = a;
    min = b;
  }

  for (let item of array) {
    if (item >= min && item <= max) {
      filteredArray.push(item);
    }
  }

  return filteredArray;
}
