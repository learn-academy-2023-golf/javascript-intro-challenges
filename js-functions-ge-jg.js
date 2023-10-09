// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (yourName) => {
    return `welcome ${yourName}`
}
console.log(greeting ("Tony"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
  //psudocode:
//create a function called oddOrEven
//input: takes a number as an argument
//output: whether number is odd or even
//working with conditional statement
  //If number is even - display the word "even"
  //else/if number is odd - Display the word "odd"

const oddOrEven = (number1) => {
    if (number1 % 2 === 0) {
        return "Even"
    } else {return "odd"}
}
console.log (oddOrEven(1))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
  //psudocode:
//create a function called triple
//input: takes a number as an argument
//output: returns the result multiplied by 3

const triple = (number2) => {
    return number2 * 3
}
console.log(triple(5))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
  //psudocode:
//create a function named multiply
// input: takes 2 numbers as an argument
// output: returns the product of those two numbers

const multiply = (number3, number4) => {
    return number3 * number4
}
console.log(multiply(12, 12))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
  //psudocode:
//create a function names divisibleBy
//input: takes 2 numbers as an argument
//output: returns whether the 1st number is divisible by the 2nd number
const divisibleBy = (divisible1, divisible2) => {
    if (divisible1 / divisible2 === 2)
    {return `${divisible1} is evenly divisible by ${divisible2}`
} else {`${divisible1} is not evenly divisible by ${divisible2}`}

}
console.log(divisibleBy(10, 3))




// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.