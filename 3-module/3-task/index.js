function camelize(str) {
  let stringArray = splitStringToArray(str);
  let camelizeArray = camelizeArrayItems(stringArray);
  camelizeArray = deleteFirstArrayElementIfEmptyString(camelizeArray);
  return camelizeArray.join("");
}

function splitStringToArray(str) {
  return str.split("-");
}

function camelizeArrayItems(array) {
  let result = [];
  for (let i = 1; i < array.length; i++) {
    result[i].push(array[i][0].toUpperCase().concat(array[i].slice(1)));
  }
  return result;
}

function deleteFirstArrayElementIfEmptyString(array) {
  if(array[0].length === null) {
    delete array[0];
  }
  return array;
}


