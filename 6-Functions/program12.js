// Write a function that takes a string as an argument and returns the number of vowels in the string. Test the function by calling it with different strings.


function countVowels(str) {
    // Initialize a variable to keep track of the count
    let count = 0;

    // Define an array of vowels
    const vowels = ["a", "e", "i", "o", "u"];

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(str[i].toLowerCase())) {
            count++; // If it is, increment the count
        }
    }

    return count; // Return the final count
}

// Test the function with different strings
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("JavaScript is awesome")); // Output: 8
console.log(countVowels("The quick brown fox jumps over the lazy dog"));


// This function uses a loop to iterate over each character in the string and checks if it is a vowel. If a character is a vowel, it increments the count. 
// Finally, it returns the final count of vowels in the string.
