//Calculate average
//Write a function which calculates the average of the numbers in a given list.
//reduce func
function findAverage(array) {
  // your code here
  if (array <= 0) return 0;
  return array.reduce((a, b) => a + b, 0) / array.length;
}
console.log(findAverage([1, 3, 4, 6, 8]));
