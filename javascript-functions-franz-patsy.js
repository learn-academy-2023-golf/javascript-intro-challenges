// Write a function named marco that returns "polo".
// const marcoPolo = () => {
//     return "polo"
// }

// console.log(marcoPolo())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// const greeting = (name) => {
//     return `Welcome, ${name}!`
// }
// console.log(greeting("Franz"))


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// const oddOrEven = (number) => {
//   if(number % 2 === 0){
//     return `${number} is even`
//   } else { 
//     return `${number} is odd`
//   }
// }

// console.log(oddOrEven(22))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Pseudocode 
  // - create a function named triple
  // - input: number
  // - output: number * 3

//   const triple = (num) => {
//     return num * 3
//   }

//   console.log(triple(10)) 


// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// Pseudocode
  //- create function named multiply
  //- input: number1, number2
  //- output: product of number1 and number2


  // const multiply = (number1, number2) => {
  //     return number1 * number2
  //   }
    
  //   console.log(multiply(3, 5))
  //   // output: 15
  //   console.log(multiply(5, 8))
  //   // output: 40
  //   //   }


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Pseudocode
  //- create function named divisibleBy 
  //- input: two numbers 
  //- output: number1 is evenly divisible by number2 
  //- log "10 is evenly divisible by 5"

  const divisibleBy = (number1, number2) => {
    if(number1 % number2 === 0) {
      return `${number1} is evenly divisible by ${number2}`
    }
  }
  
  console.log(divisibleBy(10, 5))
  // output:
  


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".