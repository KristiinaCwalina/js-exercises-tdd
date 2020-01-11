function removeMiddle(words) {
  let middle = Math.floor(words.length / 2);
  let result = words.splice(middle, 1);
  return result;
}
module.exports = removeMiddle;
