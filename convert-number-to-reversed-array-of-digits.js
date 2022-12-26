//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  let toArr = n
    .toString()
    .split("")
    .map((char) => Number(char));
  return toArr.reverse();
}
console.log(digitize(35231));
