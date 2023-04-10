// Using a do-while loop to keep rolling a dice until a certain number is rolled in JavaScript.

let desiredNumber = 3;

// Roll the dice until the desired number is rolled
let rolls = 0;
do {
  // Roll the dice and display the result in the console
  let result = Math.floor(Math.random() * 6) + 1;
  console.log("Rolled: " + result);
  
  // Increment the roll counter
  rolls++;
} while (result !== desiredNumber);

// Display the number of rolls in the console
console.log("It took " + rolls + " rolls to get " + desiredNumber + "!");



// The program uses a do-while loop to roll the dice until the desired number is rolled, using the Math.random() function to generate a random number between 1 and 6 for each roll. The result of each roll is displayed in the console using the console.log() function. Once the desired number is rolled, the program displays the number of rolls it took to get that number in the console.