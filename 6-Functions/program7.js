// Write a function that takes a number as an argument and returns true if the number is even and false if it is odd. Test the function by calling it with different numbers.

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false


// This function takes in a number as an argument and checks if it's even or odd using the modulo operator (%). If the remainder after dividing by 2 is 0, the function returns true (even), otherwise it returns false (odd).