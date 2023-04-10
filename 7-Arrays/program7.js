// Function to filter strings in an array that start with a certain letter
function filterStringsStartingWithLetter(arr, letter) {
    return arr.filter((str) => str.startsWith(letter));
}

// Testing the function with different arrays and letters
const fruits = ["apple", "banana", "cherry", "mango"];
console.log(filterStringsStartingWithLetter(fruits, "a")); // Output: ["apple"]
console.log(filterStringsStartingWithLetter(fruits, "c")); // Output: ["cherry"]
console.log(filterStringsStartingWithLetter(fruits, "m")); // Output: ["mango"]