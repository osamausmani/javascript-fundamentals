// Function to check if an object has a property
function hasProperty(obj, prop) {
    // Use the in operator to check if the property exists in the object
    return prop in obj;
  }
  
  // Example usage
  const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  console.log(hasProperty(person, "name")); // Output: true
  console.log(hasProperty(person, "gender")); // Output: false