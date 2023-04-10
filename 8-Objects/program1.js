// Function to count the number of properties in an object
function countProperties(obj) {
    // Use Object.keys() to get an array of keys, then get the length of that array
    return Object.keys(obj).length;
  }
  
  // Example usage
  const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  console.log(countProperties(person)); // Output: 3