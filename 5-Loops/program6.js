// Using a for loop to iterate over an array and perform a certain operation on each element in JavaScript.

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Create an empty array to store the doubled numbers
const doubledNumbers = [];

// Use a for loop to iterate over each element in the numbers array
for (let i = 0; i < numbers.length; i++) {
  // Multiply the current element by 2 and store the result in a variable
  const doubled = numbers[i] * 2;
  
  // Add the new doubled value to the doubledNumbers array
  doubledNumbers.push(doubled);
}

// Print out the doubledNumbers array to the console
console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// In this program, we have an array of numbers called numbers. We want to create a new array called doubledNumbers that contains each number in numbers multiplied by 2.

// To do this, we use a for loop to iterate over each element in numbers.

// Inside the loop, we perform the operation of multiplying each element by 2 and store the result in a new variable called doubled.

// Then, we use the push method to add the new doubled value to the doubledNumbers array.

// Finally, we print out the doubledNumbers array to the console using console.log.