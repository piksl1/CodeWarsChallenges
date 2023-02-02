//Find the position!
/* When provided with a letter, return its position in the alphabet. */
//using unicode to find the index
function position(letter) {
  let index = letter.charCodeAt(0) - "a".charCodeAt(0);
  return `Position of alphabet: ${index + 1}`;
}
console.log(position("z"));
