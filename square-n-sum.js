//Square(n) Sum

/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/
function squareSum(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.map((x) => x * x).reduce((acc, x) => acc + x);
}
console.log(squareSum([]));
