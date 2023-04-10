// Find the maximum value in an array
function findMax(arr) {
    let max = arr[0]; // set max to the first element of the array
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Test the function
  let nums = [3, 7, 2, 8, 4];
  let maxNum = findMax(nums);
  console.log("The maximum number is:", maxNum);