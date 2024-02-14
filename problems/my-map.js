function myMap(inputArray, callback) {
  const newArr = [];

  for (let i = 0; i < inputArray.length; i++) {
    newArr.push(callback(inputArray[i], i, inputArray));
  }

  return newArr;
}

module.exports = myMap;
