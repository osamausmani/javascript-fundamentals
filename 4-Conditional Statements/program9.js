// Program to check if a string is palindrome or not using if else statement in JavaScript.

let str = "CustomString";

// Convert the string to lowercase
str = str.toLowerCase();

// Remove all non-alphanumeric characters from the string
str = str.replace(/[^a-z0-9]/g, '');

// Check if the string is a palindrome
let isPalindrome = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - i - 1]) {
    isPalindrome = false;
    break;
  }
}

// Print the result
if (isPalindrome) {
  console.log(str + " is a palindrome.");
} else {
  console.log(str + " is not a palindrome.");
}



// We convert the string to lowercase using the toLowerCase() function, and remove all non-alphanumeric characters from the string using the replace() function and a regular expression.

// After that, we use a for loop to check if the string is a palindrome. We compare the first character with the last character, the second character with the second last character, and so on. If any pair of characters is not equal, we set the isPalindrome variable to false and break out of the loop.

// Finally, we print a message saying whether the string is a palindrome or not based on the value of the isPalindrome variable.

// Note that in this program, we are assuming that spaces and punctuation should be ignored when checking for palindromes. If you want to include spaces and punctuation in the palindrome check, you will need to modify the regular expression used in the replace() function.