//Remove exclamation marks
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "!") {
      continue;
    }
    res += s[i];
  }
  return res;
}
console.log(removeExclamationMarks("Hello World!"));
