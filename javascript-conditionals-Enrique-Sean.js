// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34/3 > 67/2)
// Does 5 evaluate to the same as "5"?
console.log(5 == "5")
// Does 5 strictly equal "5"?
console.log(5 === "5")
// Does !3 strictly equal 3?
console.log(!3 === 3)
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7)
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 10)
// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN"))
// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn"))
// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l")
// Modify the code from the previous question to return true.
console.log("LEARN"[0] === "L")
// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let itemPrice = 100
if(itemPrice <= 100) {
    console.log("in budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = "Maybe"
if(hungry === "yes") {
    console.log("Eat food")
} else {
    console.log("Keep coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = "Green"
if (trafficLight === "Green") {
    console.log("go")
} else if (trafficLight === "Yellow") {
    console.log("Slow Down")
} else if (trafficLight === "Red") {
    console.log("Stop")
} else {
    console.log("Invalid signal")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
let num1 = 2
let num2 = 2
if (num1 > num2) {
    console.log(`${num1}`)
} else if (num1 < num2) {
    console.log(`${num2}`)
} else if (num1 === num2) {
    console.log("The numbers are the same")
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.