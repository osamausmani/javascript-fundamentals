// Program to check if a number is prime or not using if else statement in JavaScript.

let num = parseInt(20.20);

// Check if the number is prime
let isPrime = true;
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

// Print the result
if (isPrime) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}

// We use an if-else statement and a for loop to check if the number is prime. If the number is less than or equal to 1, it is not prime. Otherwise, we loop through all the numbers from 2 up to the square root of the number, and check if the number is divisible by any of them. If it is, we set the isPrime variable to false and break out of the loop.

// Finally, we print a message saying whether the number is prime or not based on the value of the isPrime variable.

// Note that this program uses the trial division method to check for primality, which is simple but not very efficient for large numbers. If you need to check for primality of large numbers, you will need to use more advanced algorithms, such as the Miller-Rabin primality test.