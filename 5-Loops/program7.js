// Using a while loop to print the Fibonacci sequence up to a certain number in JavaScript.


// Define the maximum number in the Fibonacci sequence
const maxNumber = 100;

// Initialize the first two numbers in the sequence
let firstNumber = 0;
let secondNumber = 1;

// Print the first two numbers
console.log(firstNumber);
console.log(secondNumber);

// Keep looping until we reach the maximum number
while (secondNumber <= maxNumber) {
    // Calculate the next number in the sequence
    const nextNumber = firstNumber + secondNumber;

    // Print the next number
    console.log(nextNumber);

    // Shift the firstNumber and secondNumber variables to the right
    firstNumber = secondNumber;
    secondNumber = nextNumber;
}


// In this program, we first define the maximum number in the Fibonacci sequence. We then initialize the first two numbers in the sequence (0 and 1), print them to the console, and then use a while loop to keep printing the next number in the sequence until we reach the maximum number. We calculate the next number by adding the current firstNumber and secondNumber together, and then shift the firstNumber and secondNumber variables to the right to prepare for the next loop iteration.
