//Beginner - Reduce but Grow

//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
function grow(x) {
  return x.reduce((curr, acc) => curr * acc, 1);
}
console.log(grow([1, 2, 3, 4]));
