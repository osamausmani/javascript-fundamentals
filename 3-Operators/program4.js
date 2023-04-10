// Program to convert temperature from Fahrenheit to Celsius
let fahrenheit = parseFloat(prompt("Enter the temperature in Fahrenheit:"));
let celsius = (fahrenheit - 32) * 5 / 9;
console.log(`${fahrenheit} degrees Fahrenheit is ${celsius} degrees Celsius.`);