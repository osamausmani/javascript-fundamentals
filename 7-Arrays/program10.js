// Write a function that takes an array of strings as an argument and returns a new array
// with only the strings that contain a certain substring. Test the function by calling it
// with different arrays and substrings.

function filterBySubstring(arr, substr) {
    const filteredArr = arr.filter(str => str.includes(substr));
    return filteredArr;
}

// Example usage:
const arr1 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const substr1 = 'a';
console.log(filterBySubstring(arr1, substr1)); // ['apple', 'banana', 'date']

const arr2 = ['hello', 'world', 'goodbye', 'cruel', 'world'];
const substr2 = 'l';
console.log(filterBySubstring(arr2, substr2)); // ['hello', 'world', 'cruel']