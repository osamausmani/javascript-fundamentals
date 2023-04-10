// Sort an array in ascending order
function sortAscending(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  
  // Test the function
  let nums = [3, 7, 2, 8, 4];
  let sortedNums = sortAscending(nums);
  console.log("The sorted array is:", sortedNums);