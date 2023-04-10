// Program to check if a number is divisible by another number
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let isDivisible = (num1 % num2 === 0);
console.log(`${num1} is${isDivisible ? "" : " not"} divisible by ${num2}.`);