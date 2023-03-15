//Sort and Star

/*You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
 */
function twoSort(s) {
  let sorted = s.sort()[0];
  let res = "";
  for (let i = 0; i < sorted.length - 1; i++) {
    res += sorted[i] + "***";
  }
  res += sorted[sorted.length - 1];
  return res;
}
console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
