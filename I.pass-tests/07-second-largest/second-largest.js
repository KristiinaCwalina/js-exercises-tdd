function secondLargest(numbers) {
  let sorted = numbers.sort(function(a, b) {
    return b - a;
  });
  return sorted[1];
}

module.exports = secondLargest;
