// Using a for loop to generate a multiplication table for a given number in JavaScript.

// Prompt the user to enter a number
let number = parseInt(prompt("Enter a number: "));

// Generate the multiplication table for the given number
console.log("Multiplication table for " + number + ":");
for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + (number * i));
}


// In this program, the prompt() function is used to get user input and the parseInt() function is used to convert the input from a string to a number. The program then uses a for loop to generate the multiplication table for the given number and displays each line in the console using the console.log() function.