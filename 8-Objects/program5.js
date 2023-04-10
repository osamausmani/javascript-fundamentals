// Function to get an array of property values from an object
function getPropertyValues(obj) {
    // Use Object.values() to get an array of values
    return Object.values(obj);
  }
  
  // Example usage
  const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  console.log(getPropertyValues(person)); // Output: ["John", 30, "New York"]