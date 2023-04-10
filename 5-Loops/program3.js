// Using a for loop to calculate the factorial of a number in JavaScript.

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

const num = 5;  // The number to calculate the factorial of
const factorialResult = factorial(num);  // Calculate the factorial using the function

console.log(`The factorial of ${num} is ${factorialResult}.`);  // Print the result to the console


// In this program, we first define a function called factorial that takes in a single argument num, which is the number to calculate the factorial of. Inside the function, we initialize a variable result to 1, which will be used to accumulate the factorial.

// Then, we use a for loop to iterate from 1 up to num. During each iteration, we multiply the current value of result by the loop variable i, and store the result back in result. Once the loop completes, result will contain the factorial of num.

// Finally, we call the factorial function with a test value of num (in this case, 5), and store the result in a variable called factorialResult. We then print the result to the console using a template literal, which allows us to easily insert the value of num and factorialResult into a string.

// Note that the factorial of a number is the product of all positive integers up to and including that number. For example, the factorial of 5 is 5 x 4 x 3 x 2 x 1 = 120.