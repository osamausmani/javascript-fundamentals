// Function to calculate the average of an array of numbers
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  
  // Testing the function with different arrays
  console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3
  console.log(calculateAverage([10, 20, 30])); // Output: 20
  console.log(calculateAverage([-5, 0, 5, 10])); // Output: 2.5