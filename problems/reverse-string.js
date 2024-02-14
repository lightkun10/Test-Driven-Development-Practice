module.exports = function reverseString(string) {
  // Cancel if argument is not a string
  if (!(typeof string === "string")) {
    throw new TypeError(string);
  }

  // using recursion
  if (string === "") {
    return "";
  }

  return reverseString(string.substr(1)) + string.charAt(0);
};
