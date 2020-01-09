module.exports = function addOne(myArray) {
  let result = [];

  for (let i = 0; i < myArray.length; i++) {
    result[i] = myArray[i] + 1;
  }
  return result;
};
