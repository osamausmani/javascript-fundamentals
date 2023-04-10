// Write a function that takes an array of numbers as an argument and returns a new array with only the even numbers. Test the function by calling it with different arrays.

function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  console.log(sumArray([1, 2, 3])); // Output: 6
  console.log(sumArray([-1, 5, 10, 3])); // Output: 17
  console.log(sumArray([])); // Output: 0


  
