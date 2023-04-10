// Program to check if a number is a multiple of 3 and 5 using if else statement in JavaScript.

let number = 5;

//check if the number is a multiple of 3 and 5
if (number % 3 == 0 && number % 5 == 0) {
    console.log(number + " is a multiple of both 3 and 5.");
}
else {
    console.log(number + " is not a multiple of both 3 and 5.");
}


// We use an if-else statement to check if the number is divisible by both 3 and 5.

// The % operator is used to check if a number is divisible by another number. If the remainder of dividing the number by 3 is 0 AND the remainder of dividing the number by 5 is 0, then the number is a multiple of both 3 and 5.

// If the number is a multiple of both 3 and 5, the program prints a message saying so. Otherwise, it prints a message saying that the number is not a multiple of both 3 and 5.