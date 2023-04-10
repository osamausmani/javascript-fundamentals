// Write a function that takes an array of numbers as an argument and returns a new array with only the even numbers. Test the function by calling it with different arrays.

function getEvenNumbers(arr) {
    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]);
      }
    }
    return evenArr;
  }
  
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
  console.log(getEvenNumbers([-1, 0, 5, 10, 2, -4])); // Output: [0, 10, 2, -4]
  console.log(getEvenNumbers([])); // Output: []


  