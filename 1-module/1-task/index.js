function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 0; n - i > 1; i++) {
      result *= n - i;
    }
    return result;
  }
}
