function findNeedle(words, searchedWord) {
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    console.log(element);
    if (element == searchedWord) {
      return i;
    }
  }
}

module.exports = findNeedle;
