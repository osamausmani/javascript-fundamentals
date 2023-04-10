// Write a function that takes a string as an argument and returns the reverse of the string. Test the function by calling it with different strings.

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

// Testing the function with different strings
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
console.log(reverseString("racecar")); // Output: "racecar"



// The reverseString() function takes a string str as an argument and uses a for loop to iterate through the characters of the string in reverse order. It concatenates each character to a new string reversedStr and returns the final reversed string.

// In the code above, we call the function three times with different strings and output the results using console.log().