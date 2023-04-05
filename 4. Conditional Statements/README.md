# Conditional Statements

In JavaScript, conditional statements are used to execute different code blocks depending on whether a certain condition is true or false. There are several types of conditional statements in JavaScript, including:

* if statement: The if statement is the most basic conditional statement in JavaScript. It allows you to execute a code block if a certain condition is true.

```javascript
if (condition) {
  // code block to be executed if condition is true
}
```

* if-else statement: The if-else statement allows you to execute one code block if a condition is true and a different code block if the condition is false.

```javascript
if (condition) {
  // code block to be executed if condition is true
} else {
  // code block to be executed if condition is false
}
```

* else-if statement: The else-if statement allows you to chain multiple conditions together and execute different code blocks depending on the condition that is true.

```javascript
if (condition1) {
  // code block to be executed if condition1 is true
} else if (condition2) {
  // code block to be executed if condition2 is true
} else {
  // code block to be executed if all conditions are false
}
```

* Ternary operator: The ternary operator is a shorthand for writing an if-else statement. It allows you to assign a value to a variable based on a condition.

```javascript
variable = (condition) ? value1 : value2;
```

* Switch statement: The switch statement allows you to execute different code blocks depending on the value of an expression.

```javascript
switch (expression) {
  case value1:
    // code block to be executed if expression matches value1
    break;
  case value2:
    // code block to be executed if expression matches value2
    break;
  default:
    // code block to be executed if expression matches none of the values
}
```

These conditional statements are essential building blocks for programming in JavaScript and are used extensively in writing complex programs.