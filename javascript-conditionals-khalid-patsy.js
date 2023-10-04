// Is 34 divided by 3 greater than 67 divided by 2?
let num1 = 34/3
let num2 = 67/2

if(num1 > num2){
    console.log("Answer is greater")
} else {
    console.log("Answer is less")
} 
// Answer is less

// Does 5 evaluate to the same as "5"?
console.log(5 == "5") //true

// Does 5 strictly equal "5"?
console.log(5 === "5") //false

// Does !3 strictly equal 3?
let number = 3
console.log(3 !== number) // false

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("Learn".length === 5 && "Student".length === 7) // true

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("Learn".length === 5 || "Student".length === 10) // true

// Does "LEARN" contain the subset "RN"?
console.log("Learn".includes("RN")) // false

// Does "LEARN" contain the subset "rn"?
console.log("Learn".includes("rn")) // true

// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0].includes("l")) // false

// Modify the code from the previous question to return true.
let title = "lEARN"
console.log(title.includes("l")) // true
