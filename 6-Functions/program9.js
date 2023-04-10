// Write a function that takes an array of strings as an argument and returns the longest string in the array. Test the function by calling it with different arrays.

function longestString(arr) {
    let longest = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

console.log(longestString(['apple', 'banana', 'orange'])); // Output: 'banana'
console.log(longestString(['cat', 'dog', 'elephant', 'bird'])); // Output: 'elephant'
console.log(longestString([])); // Output: ''