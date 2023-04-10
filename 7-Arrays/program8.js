// Function to filter numbers that are present in both arrays
function filterNumbersInBothArrays(arr1, arr2) {
    return arr1.filter((num) => arr2.includes(num));
  }
  
  // Testing the function with different arrays
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  console.log(filterNumbersInBothArrays(arr1, arr2)); // Output: [3, 4, 5]
  
  const arr3 = [10, 20, 30, 40];
  const arr4 = [5, 10, 15, 20];
  console.log(filterNumbersInBothArrays(arr3, arr4)); // Output: [10, 20]