
// JavaScript Basics Assignment

/*🏋️‍♂️ Task 1: Voting Age Check 🗳️ */

// 1. Create a variable called `votingAge` and set it to any age.
// 2. Write a conditional that returns true if `votingAge` is 18 or older; otherwise, return false.
// 3. Log the result to the console.

let votingAge = 16; // Set the voting age

// Check if the person can vote
if (votingAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote yet");
}

/*🏋️‍♂️ Task 2: Variable Value Swap 🔄 */

// 1. Declare two variables and assign them initial values of your choice.
// 2. Write a conditional that changes the value of the first variable if a certain condition with the second variable is met.
// 3. Log the new value of the first variable to the console.

let variableOne = 5;  // Set variableOne to 5
let variableTwo = 10; // Set variableTwo to 10

// Check if variableTwo is even
if (variableTwo % 2 === 0) {
    variableOne = variableOne + variableOne; 
}


/*🏋️‍♂️ Task 3: Favorite Number Checker 🔢 */

// 1. Declare a variable named `favoriteNumber` and assign it your favorite number.
// 2. Write a conditional to check if `favoriteNumber` is greater than, less than, or equal to 10.
// 3. Log the result with a message, e.g., "My favorite number is greater than 10."

let favoriteNumber = 2 /* Your code here */;

if (10 > favoriteNumber) {
    console.log("less than 10");
}

if (10 === favoriteNumber) {
    console.log("equal to 10");
}

if (10 < favoriteNumber) {
    console.log("greater than 10");
}

/*🏋️‍♂️ Task 4: Mood Checker 😊😢 */

// 1. Prompt the user to enter their mood.
// 2. Write a conditional that logs the following responses based on the user input:
//    - "Yay me too!" if the mood is "happy"
//    - "Aw, cheer up" if the mood is "sad"
//    - "So moody!" for any other input

let mood = prompt("How are you feeling today?");

if (mood === "happy") {
    console.log("Yay me too!");
} else if (mood === "sad") {
    console.log("Aw, cheer up");
} else {
    console.log("So moody!");
}



/*🏋️‍♂️ Task 5: Odd or Even Checker 🔍 */

// 1. Choose a hardcoded number and store it in a variable.
// 2. Write a conditional to check if the number is odd or even.
// 3. Log whether the number is odd or even, along with the number, to the console.

let num = 7; 

if (num % 2 === 0) {
    console.log("even");
} else if (num % 2 === 1) {
    console.log("odd");
}



/*🚀 FIZZBUZZ 🚀 */

// 1. Write a program that prints numbers from 1 to 100.
// 2. For multiples of 3, print "Fizz" instead of the number.
// 3. For multiples of 5, print "Buzz".
// 4. For multiples of both 3 and 5, print "FizzBuzz".
// 5. Add a check for prime numbers and print "Prime" for those.

function isPrime(num) {
    if (num <= 1) return false; 

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log("Prime");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    // Your FizzBuzz logic here
}

// Bonus: Create a helper function to check if a number is prime.


/*💪 Stretch 1: Vowel Counter 💪 */

// Write a `vowelCounter` function that takes a string as a parameter.
// Count and return the number of vowels in the string, handling both uppercase and lowercase vowels.
// Hint: You may need to use the `.includes()` method.

function vowelCounter(/* Add parameter here */) {
    // Your code here
}

// Test the `vowelCounter` function by calling it with different strings.


/*💪 Stretch 2: Simple Calculator 💪 */

// Write a `simpleCalculator` function that accepts two numbers and an operator ("+", "-", "*", "/") as parameters.
// Based on the operator, perform the appropriate mathematical operation and return the result.
// Log the result to the console.
// Include error handling for cases where the operator is invalid.

function simpleCalculator(num1, num2, operator) {
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            console.log("Error: Division by zero is not allowed.");
            return; 
        }
        result = num1 / num2;
    } else {
        console.log("Error: Invalid operator. Please use '+', '-', '*', or '/'.");
        return; 
    }

    console.log("Result:", result);
}




/*💪 Stretch 3: Temperature Converter 💪 */

// Write a `toCelsius` function that takes a Fahrenheit temperature and returns the equivalent Celsius temperature.
// Write a `toFahrenheit` function that takes a Celsius temperature and returns the equivalent Fahrenheit temperature.
// Formula:
//  - Celsius to Fahrenheit: (C * 9/5) + 32
//  - Fahrenheit to Celsius: (F - 32) * 5/9

function toCelsius(/* Add parameter here */) {
    // Your code here
}

function toFahrenheit(/* Add parameter here */) {
    // Your code here
}

// Test the temperature converter functions by calling them with different temperatures.


/*💪 Stretch 4: Factorial Calculation 💪 */

// Write a `factorial` function that takes a number as a parameter and returns the factorial of that number.
// Use a loop to calculate the factorial.
// Factorial of 0 is 1, and factorial of any positive number n is the product of all positive integers less than or equal to n.

function factorial(/* Add parameter here */) {
    // Your code here
}

// Test the factorial function by calling it with different numbers.


/*💪 Stretch 5: Palindrome Checker 💪 */

// Write a `isPalindrome` function that checks if a given string is a palindrome (reads the same forwards and backwards).
// Ignore spaces, punctuation, and case when checking if the string is a palindrome.
// Return true if the string is a palindrome, otherwise return false.

function isPalindrome(/* Add parameter here */) {
    // Your code here
}

// Test the isPalindrome function by calling it with different strings.

