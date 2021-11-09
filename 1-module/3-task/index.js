function ucFirst(str) {
  if (str.length !== 0) {
    return str[0].toUpperCase().concat(str.slice(1));
  }
  return str;
}
