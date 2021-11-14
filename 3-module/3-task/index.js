function camelize(str) {
  let stringArray = str.split("-");
  stringArray = deleteFirstArrayElementIfEmptyString(stringArray);
  return stringArray
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join("");
}

function deleteFirstArrayElementIfEmptyString(array) {
  if(array[0].length === null) {
    array.splice(0);
  }
  return array;
}


