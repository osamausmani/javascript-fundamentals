// In this program, we start by initializing three variables num1, num2, and num3 with the values 5, 10, and 15 respectively. We then use an if-else statement to compare the values of these variables and find the largest number.

// We check if num1 is greater than both num2 and num3. If this is true, then num1 is the largest number and we print "The largest number is: " followed by the value of num1.

// If the above condition is false, we check if num2 is greater than both num1 and num3. If this is true, then num2 is the largest number and we print "The largest number is: " followed by the value of num2.

// If both the above conditions are false, then num3 must be the largest number and we print "The largest number is: " followed by the value of num3.


// program to find the largest of three numbers
let num1 = 5;
let num2 = 10;
let num3 = 15;

// check if num1 is the largest
if (num1 > num2 && num1 > num3) {
    console.log("The largest number is: " + num1);
}
// check if num2 is the largest
else if (num2 > num1 && num2 > num3) {
    console.log("The largest number is: " + num2);
}
// if both above conditions are false, num3 must be the largest
else {
    console.log("The largest number is: " + num3);
}