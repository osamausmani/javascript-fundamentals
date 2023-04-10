// Write a function that takes an array of numbers as an argument and returns the sum of the numbers. Test the function by calling it with different arrays.

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}


console.log(sumArray([1, 2, 3])); // Output: 6
console.log(sumArray([5, 10, 15, 20])); // Output: 50
console.log(sumArray([-3, 8, 2, -5])); // Output: 2


// In this example, we declare a function called sumArray that takes an array of numbers as its argument. The function initializes a variable called sum to 0, then loops through each number in the array using a for loop, and adds each number to the sum variable. 
// Finally, the function returns the total sum. 
// We can then call the function with different arrays to test its behavior.