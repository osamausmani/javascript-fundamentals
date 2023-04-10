// Check if an element exists in an array
function checkIfExists(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return true;
      }
    }
    return false;
  }
  
  // Test the function
  let nums = [3, 7, 2, 8, 4];
  let exists = checkIfExists(nums, 6);
  console.log("Does 6 exist in the array?", exists);