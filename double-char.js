//Double Char
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//loop through array
//use build in function
function doubleChar(str) {
  // Your code here
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].repeat(2);
  }
  return result;
}
console.log(doubleChar("1234!_ "));
