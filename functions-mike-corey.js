// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

//create a function called Marco
//output string - "polo" 
//invoked function to call on it
const marco = () => {
    return "polo"
} 
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

//create a function called greeting
//input - a string 
//output - "welcome, person's name!"
// invoked function to call on it
const greeting = (name) => {
    return `welcome, ${name}!`
}
console.log(greeting("Shrek"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

//create a function called odd0rEven
//input : a number
//output : "odd" or "even"
// create a conditional if statement
//invoke the function to verify 

const oddOrEven = (number) => {
    if(number % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
console.log(oddOrEven(9))


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.