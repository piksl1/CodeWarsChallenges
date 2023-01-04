//Count of positives / sum of negatives
/* Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array. */
//loop
//sum positive nums
//sum negative nums
//return array of pos and neg nums
function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];

  //   let sumPos = input.filter((x) => x > 0).length;
  //   let sumNeg = input.filter((x) => x < 0).reduce((acc, cuur) => acc + cuur, 0);
  //   return [sumPos, sumNeg];
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
