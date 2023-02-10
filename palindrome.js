//Is it a palindrome?

//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  let reversed = x.split("").reverse().join("").toLowerCase();
  return reversed === x.toLowerCase() ? true : false;
}
console.log(isPalindrome("hello"));
