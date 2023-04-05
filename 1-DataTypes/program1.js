// 1. Boolean
console.log(true);

// 2. Number
console.log(42);

// 3. String
console.log("Hello, world!");

//4. Undefined
let x;
console.log(x);

// 5. Null
let y = null;
console.log(y);

// 6. Object
let person = { name: "John", age: 30 };
console.log(person);

// 7. Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// 8. Function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

// 9. Symbol
let symbol1 = Symbol("foo");
let symbol2 = Symbol("foo");
console.log(symbol1 === symbol2); // false

// 10. BigInt
let bigInt = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
console.log(bigInt);