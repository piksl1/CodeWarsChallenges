function positiveSum(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) continue;
    counter += arr[i];
  }
  return counter;
}
console.log(positiveSum([0, 1, 2, 3, 4, -5]));
