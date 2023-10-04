//Write the code that will log true or false for the following:
//
//Is 34 divided by 3 greater than 67 divided by 2?
console.log(34 / 3 > 67 / 2)
//Does 5 evaluate to the same as "5"?
console.log(5 == "5")
//Does 5 strictly equal "5"?
console.log(5 === "5")
//Does !3 strictly equal 3?
console.log(!3 === 3)
//Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "student".length === 7)
//Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "student".length === 7)
//Does "LEARN" contain the subset "RN"?
let greeting = "LEARN"
console.log(greeting.includes("RN"))
//Does "LEARN" contain the subset "rn"?
console.log(greeting.includes("rn"))
//Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l")
//Modify the code from the previous question to return true.
console.log("LEARN"[0] === "L")

//Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
const apples = 5
if (apples < 100){
    console.log(`is in budget`)
} else {
    console.log(`is out of budget`)
}
//Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
const hungry = "yes"
const nothungry = "no"
if(hungry) {
    console.log("eat food")
} else {
    console.log("keep coding")
}
//Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var green = Math.floor(Math.random() * 4)
var yellow = Math.floor(Math.random() * 4)
var red = Math.floor(Math.random() * 4)

if (green === 1){
    console.log("go")
} else if (yellow === 2){
    console.log("slow down")
} else {
    console.log("stop")
}
//Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
const num1 = 
//Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.