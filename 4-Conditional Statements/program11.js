// Program to find the factorial of a number using if else statement in JavaScript.

let num = 20;

// Find the factorial of the number
let factorial = 1;
if (num < 0) {
  factorial = "Undefined";
} else if (num === 0) {
  factorial = 1;
} else {
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
}

// Print the result
console.log("The factorial of " + num + " is " + factorial + ".");

// We use an if-else statement and a for loop to find the factorial of the number. If the number is less than 0, the factorial is undefined. If the number is 0, the factorial is 1. Otherwise, we loop through all the numbers from 1 up to the number, and multiply them together to find the factorial.

// Finally, we print a message saying what the factorial of the number is.

// Note that this program assumes that the input number is a non-negative integer. If you need to handle other types of input, you will need to add additional error checking and validation.
