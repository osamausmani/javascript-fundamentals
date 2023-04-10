// Function to sort numbers in an array in ascending order
function sortNumbersAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Testing the function with different arrays
  const numbers1 = [10, 5, 20, 15, 30];
  console.log(sortNumbersAscending(numbers1)); // Output: [5, 10, 15, 20, 30]
  
  const numbers2 = [100, 50, 75, 200, 25];
  console.log(sortNumbersAscending(numbers2)); // Output: [25, 50, 75, 100, 200]