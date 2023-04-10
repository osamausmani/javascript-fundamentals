// Program to check if a string contains a specific character
let str = prompt("Enter a string:");
let char = prompt("Enter a character to search for:");
let containsChar = (str.indexOf(char) !== -1);
console.log(`${str}${containsChar ? " contains" : " does not contain"} the character '${char}'.`);