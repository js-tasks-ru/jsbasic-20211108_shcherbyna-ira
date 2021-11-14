function filterRange(array, a, b) {
  let min = a;
  let max = b;

  if (a > b) {
    max = a;
    min = b;
  }

  return array.filter(item => item >= min && item <= max);
}
