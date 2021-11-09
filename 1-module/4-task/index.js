function checkSpam(str) {
  const spamContent = ["1xbet", "xxx"];
  str = str.toLowerCase();
  for (let spam of spamContent) {
    if (str.includes(spam)) {
      return true;
    }
  }
  return false;
}
