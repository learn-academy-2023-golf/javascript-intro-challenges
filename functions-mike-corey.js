// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

//create a function called Marco
//output string - "polo"
//invoked function to call on it
// const marco = () => {
//   return "polo";
// };
// console.log(marco());

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

//create a function called greeting
//input - a string
//output - "welcome, person's name!"
// invoked function to call on it
// const greeting = (name) => {
//   return `welcome, ${name}!`;
// };
// console.log(greeting("Shrek"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

//create a function called odd0rEven
//input : a number
//output : "odd" or "even"
// create a conditional if statement
//invoke the function to verify

// const oddOrEven = (number) => {
//   if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };
// console.log(oddOrEven(9));

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// create function named triple
// input: number
// output: number * 3

// const triple = (number) => {
//   return number * 3;
// };
// console.log(triple(5783420));

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

//create a function named multiply
//input: two numbers
//output: the two numbers multiplied

// const multiply = (num1, num2) => {
//     return (num1 * num2)
// }

// console.log(multiply(5, 7))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// create a function numbed divisibleBy
// input: two numbers
// output: whether first number is evenly divisible by the second
// conditional: if() to determine remainder

// const divisibleBy = (num1, num2) => {
//   if (num1 % num2 === 0) {
//     return `${num1} is evenly divisible by ${num2}.`;
//   } else {
//     return `${num1} is not evenly divisible by ${num2}.`;
//   }
// };

// console.log(divisibleBy(10, 6));

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// create a function named assignGrade
// input: number
// output: letter grade
// conditional: if() define which numbers equal which letters

// const assignGrade = (number) => {
//   if (number < 60) {
//     return "F";
//   } else if (number < 70) {
//     return "D";
//   } else if (number < 80) {
//     return "C";
//   } else if (number < 90) {
//     return "B";
//   } else if (number <= 100) {
//     return "A";
//   } else {
//     return "You cheated.";
//   }
// };

// console.log(assignGrade(75));

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// create a function named isLonger
// input: two strings
// output: longer strings
// conditional: if() use .longer to compare string lengths

// const isLonger = (string1, string2) => {
//   if (string1.length > string2.length) {
//     return string1;
//   } else if (string1.length === string2.length) {
//     return "EQUAL";
//   } else {
//     return string2;
//   }
// };
// console.log(isLonger("car", "bar"));

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// create a function named greaterNum
// input: two numbers
// output: the number that is greater
// conditional: if() compare numbers

// const greaterNum = (num1, num2) => {
//   if (num1 > num2) {
//     return num1;
//   } else if (num1 < num2) {
//     return num2;
//   } else {
//     return "EVEN";
//   }
// };

// console.log(greaterNum(12, 12));

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// create a function named yelling
// input: string
// output: input in uppercase

const yelling = (string) => {
    return string.toUpperCase()
}

console.log(yelling("outta time"))


// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.

// Have your function default to returning English.

//create a function called helloWorld
//input: a string
//output: hello world in a different language
// conditional if statement
//compare the string to list of languages with else if 

// const helloWorld = (lanCode) => {
//     if(lanCode === "es") {
//         return "¡Hola Mundo!"
//     } else if(lanCode === "de") {
//         return "Hallo Welt!" {
//             else if(lanCode === "en") {
//          return "Hello World!"
//             }
//         }
    
//     }
// }
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"
