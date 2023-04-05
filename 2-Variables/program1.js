// In this example, the exampleVar() function declares a var variable x inside a block, which causes it to be accessible outside the block as well. As a result, both console.log statements output 20.

// The exampleLet() function declares a let variable x inside a block, which limits its scope to that block. As a result, the first console.log statement outputs 20, and the second console.log statement outputs 10.

// The exampleConst() function demonstrates the use of a const variable. In this case, attempting to reassign PI to a new value throws an error because const variables cannot be reassigned.


// Example using var variables
function exampleVar() {
    var x = 10;
    if (true) {
      var x = 20;
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
  }
  exampleVar();
  
  // Example using let variables
  function exampleLet() {
    let x = 10;
    if (true) {
      let x = 20;
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
  }
  exampleLet();
  
  // Example using const variables
  function exampleConst() {
    const PI = 3.14;
    PI = 3.14159; // This will throw an error
    console.log(PI);
  }
  exampleConst();