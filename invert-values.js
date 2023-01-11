//Invert values
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//loop
function invert(array) {
  return array.map((x) => -x);
}
console.log(invert([1, -2, 3, -4, 5]));
