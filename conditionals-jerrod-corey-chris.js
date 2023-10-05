// Is 34 divided by 3 greater than 67 divided by 2?
// Does 5 evaluate to the same as "5"?
// Does 5 strictly equal "5"?
// Does !3 strictly equal 3?
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
// Does "LEARN" contain the subset "RN"?
// Does "LEARN" contain the subset "rn"?
// Does "LEARN"[0] strictly equal "l"?
// Modify the code from the previous question to return true

let num1 = 34 / 3;
let num2 = 67 / 2;

if (num1 > num2) {
  console.log(`${num1} Incorrect ${num2}`);
} else {
  console.log(`${num2} correct ${num1}`);
}
console.log(5 == "5");
console.log(5 === "5");
console.log(!3 === 3);
console.log("LEARN".length === 5 && "Student".length === 7);
console.log("LEARN".length === 5 || "Student".length === 10);
console.log("LEARN".includes("RN"));
console.log("LEARN".includes("rn"));
console.log("LEARN"[0] === "l");
console.log("LEARN"[0] === "L");

let item = 750;

if (item < 100) {
  console.log(`${item} is in budget.`);
} else {
  console.log(`${item} is not in budget.`);
}

let hungry = "potato";

if (hungry === "no") {
  console.log("Keep coding!");
} else if (hungry === "yes") {
  console.log("eat food");
} else {
  console.log("I don't understand");
}

let trafficLight = "green";

if (trafficLight === "green") {
  console.log(`Traffic light is ${trafficLight}, GO!`);
} else if ((trafficLight = "yellow")) {
  console.log("Slow down");
} else if ((trafficLight = "red")) {
  console.log("Stop");
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
if (num1 < num2){

} else if ((num1 > num2))
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.