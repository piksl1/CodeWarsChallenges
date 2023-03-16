//Expressions Matter

/*Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
 */
function expressionMatter(a, b, c) {
  let firstOp = a * (b + c);
  let secOp = a * b * c;
  let thirdOp = a + b + c;
  let fourthOp = (a + b) * c;
  return Math.max(firstOp, secOp, thirdOp, fourthOp);
}
console.log(expressionMatter(1, 6, 1));
