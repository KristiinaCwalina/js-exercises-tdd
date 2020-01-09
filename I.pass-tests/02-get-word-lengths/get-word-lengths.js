var getWordLengths = function(someWords) {
  let wordLengths = [];
  for (i = 0; i < someWords.length; i++) {
    wordLengths[i] = someWords[i].length;
  }
  return wordLengths;
};

module.exports = getWordLengths;
