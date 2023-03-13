//Powers of 2

/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
 */
function powersOfTwo(n) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    array.push(Math.pow(2, i));
  }
  return array;
}
console.log(powersOfTwo(2));
