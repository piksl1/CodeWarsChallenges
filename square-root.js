//To square(root) or not to square(root)
/* Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number. */
//map loop
// if
function squareOrSquareRoot(array) {
  return array.map((x) => {
    let sqrt = Math.sqrt(x);
    if (Number.isInteger(sqrt)) {
      return sqrt;
    } else {
      return x * x;
    }
  });
}
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
