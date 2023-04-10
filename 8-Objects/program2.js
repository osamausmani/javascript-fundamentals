// Function to merge two objects
function mergeObjects(obj1, obj2) {
    // Use Object.assign() to merge the objects
    return Object.assign({}, obj1, obj2);
  }
  
  // Example usage
  const obj1 = {
    a: 1,
    b: 2
  };
  
  const obj2 = {
    c: 3,
    d: 4
  };
  
  console.log(mergeObjects(obj1, obj2)); // Output: {a: 1, b: 2, c: 3, d: 4}