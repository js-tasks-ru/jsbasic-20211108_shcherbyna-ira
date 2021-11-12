function getMinMax(str) {
  let stringArray = str.split(" ");
  let numbersArray = getNumbers(stringArray);
  let min = Math.min(...numbersArray);
  let max = Math.max(...numbersArray);
  return {
    min,
    max
  };
}

function getNumbers(arr) {
  return arr.filter(x => !isNaN(Number(x)));
}
