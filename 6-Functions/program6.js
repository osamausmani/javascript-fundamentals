// Write a function that takes an array of strings as an argument and returns the longest string in the array. Test the function by calling it with different arrays.

function longestString(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

// Example usage
let arr1 = ["apple", "banana", "orange", "mango"];
let arr2 = ["cat", "dog", "elephant", "giraffe", "lion"];
console.log(longestString(arr1)); // Output: "orange"
console.log(longestString(arr2)); // Output: "elephant"


// In the code above, the longestString() function takes an array of strings as its argument. 
// It initializes a variable called longest to an empty string. 
// It then loops through the array using a for loop, comparing the length of each string to the length of the current longest string. 
// If the length of the current string is greater than the length of longest, longest is updated to the current string. Finally, the function returns the longest string.

// We then call the function with two different arrays, arr1 and arr2, and print the result to the console using console.log(). The output of the function is the longest string in each array.