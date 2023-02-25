//Sum Arrays
/*Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0 */
// Sum Numbers
function sum(numbers) {
  if (numbers === undefined) return 0;
  if (numbers < 0) return Number(numbers);
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum([-55]));
