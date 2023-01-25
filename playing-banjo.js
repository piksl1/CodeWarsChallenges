//Are You Playing Banjo?
/* Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
Names given are always valid strings. */
//String method and if condition
function areYouPlayingBanjo(name) {
  return name.startsWith("r") || name.startsWith("R")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo("cachid"));
