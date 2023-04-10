// Find the index of a specific element in an array
function findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
    return -1; // element not found
  }
  
  // Test the function
  let fruits = ["apple", "banana", "orange", "pear"];
  let index = findIndex(fruits, "orange");
  console.log("The index of 'orange' is:", index);