// Using a while loop to find the sum of all odd numbers between 1 and 100 in JavaScript.

let i = 1;
let sum = 0;

while (i <= 100) {
  if (i % 2 !== 0) {  // Check if i is odd
    sum += i;  // Add i to the sum if it's odd
  }
  i++;  // Increment i after each iteration
}

console.log(`The sum of all odd numbers between 1 and 100 is ${sum}.`);


// In this program, we first initialize two variables: i to 1 (the starting value) and sum to 0 (the initial sum).

// Then, we use a while loop to iterate while i is less than or equal to 100. During each iteration, we check if i is odd by using the modulo operator % to see if there is a remainder when i is divided by 2. If there is a remainder (i.e. i is not divisible by 2), we add i to the sum variable.

// Finally, we increment i by 1 after each iteration to move on to the next number, and print the final sum to the console using a template literal.

// Note that the sum of all odd numbers between 1 and 100 is 2500.