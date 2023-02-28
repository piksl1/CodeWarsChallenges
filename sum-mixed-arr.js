//Sum Mixed Array

/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/
function sumMix(x) {
  return x.map((x) => parseInt(x)).reduce((sum, x) => sum + x, 0);
}
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
