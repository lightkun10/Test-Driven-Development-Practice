function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n < 1 || n > 1000000) {
    throw new TypeError("number must be between 1 and 1,000,000");
  }

  if (!(typeof n === 'number')) {
    throw new TypeError(`${n} is not a number...`);
  }
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};
