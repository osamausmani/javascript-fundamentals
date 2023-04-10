// Remove duplicate elements from an array
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

// Test the function
let nums = [3, 7, 2, 8, 4, 3, 2, 7];
let uniqueNums = removeDuplicates(nums);
console.log("The array with duplicates removed is:", uniqueNums);