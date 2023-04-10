// Program to check if a character is a vowel or consonant using if else statement in JavaScript.

let letter = "z";

// Check if the entered character is a vowel or consonant
if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
  console.log(letter + " is a vowel.");
} else {
  console.log(letter + " is a consonant.");
}

// If the entered letter is "a", "e", "i", "o", or "u", the program prints a message saying that the letter is a vowel. Otherwise, the program prints a message saying that the letter is a consonant.

// Note that in this program, we are only checking for lowercase vowels. If you want to check for uppercase vowels as well, you can either convert the entered letter to lowercase using the toLowerCase() function, or add uppercase versions of the vowels to the if condition.