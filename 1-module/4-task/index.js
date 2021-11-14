const SPAM_CONTENT = ["1xbet", "xxx"];

function checkSpam(str) {
  const stringLowerCase = str.toLowerCase();
  for (let spam of SPAM_CONTENT) {
    if (stringLowerCase.includes(spam)) {
      return true;
    }
  }
  return false;
}
