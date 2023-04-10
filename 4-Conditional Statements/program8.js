// Program to check if a year is a leap year using if else statement in JavaScript.

let year = 2023;

// Check if the year is a leap year
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year + " is a leap year.");
        } else {
            console.log(year + " is not a leap year.");
        }
    } else {
        console.log(year + " is a leap year.");
    }
} else {
    console.log(year + " is not a leap year.");
}


// The logic for checking if a year is a leap year is as follows:

// If the year is divisible by 4, it may be a leap year.
// If the year is divisible by 100, it may not be a leap year.
// If the year is divisible by 400, it is definitely a leap year.
// In the program, we first check if the year is divisible by 4 using year % 4 === 0. If it is, we check if the year is divisible by 100 using year % 100 === 0. If it is, we check if the year is divisible by 400 using year % 400 === 0. If it is, we print a message saying that the year is a leap year. If it isn't, we print a message saying that the year is not a leap year. If the year is not divisible by 4, we print a message saying that the year is not a leap year.

// Note that in this program, we are assuming the Gregorian calendar, which is the calendar used in most of the world. If you need to check for leap years in a different calendar, you will need to adjust the logic accordingly.