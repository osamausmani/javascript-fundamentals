// Function to get the value of a property from an object
function getPropertyValue(obj, prop) {
    // Use the bracket notation to access the value of the property
    return obj[prop];
  }
  
  // Example usage
  const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  console.log(getPropertyValue(person, "name")); // Output: "John"
  console.log(getPropertyValue(person, "gender")); // Output: undefined