// Program to find the grade of a student based on marks using if else if statement in JavaScript.

let marks = 67;

// Find the grade based on the marks
if (marks >= 90) {
    console.log("Your grade is A+");
} else if (marks >= 80) {
    console.log("Your grade is A");
} else if (marks >= 70) {
    console.log("Your grade is B");
} else if (marks >= 60) {
    console.log("Your grade is C");
} else if (marks >= 50) {
    console.log("Your grade is D");
} else {
    console.log("Your grade is F");
}

// If the entered marks are greater than or equal to 90, the program prints a message saying that the grade is A+. If the entered marks are between 80 and 89, the program prints a message saying that the grade is A, and so on. If the entered marks are less than 50, the program prints a message saying that the grade is F.

// Note that in this program, we are assuming that the maximum marks are 100. If the maximum marks are different, you will need to adjust the if conditions accordingly.