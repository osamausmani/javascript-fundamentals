// Using a while loop to count the number of vowels in a given string in JavaScript.

// Initialize the string to be checked and the vowel count
let str = "hello world";
let vowelCount = 0;

// Define an array of vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Convert the string to lowercase to make it case-insensitive
str = str.toLowerCase();

// Loop through each character in the string
let i = 0;
while (i < str.length) {
    // Check if the current character is a vowel
    if (vowels.includes(str[i])) {
        // Increment the vowel count if the current character is a vowel
        vowelCount++;
    }

    // Move to the next character
    i++;
}

// Output the total number of vowels in the string
console.log(`The string '${str}' contains ${vowelCount} vowels.`);


// In this program, we use a while loop to iterate through each character in the given string. We check if each character is a vowel by comparing it to an array of vowels, and increment the vowel count if it is. Finally, we output the total number of vowels in the string.