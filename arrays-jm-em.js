var groceryList = ["chips", "dip", "cookies"]
groceryList.push("soda")
console.log(groceryList)

console.log(groceryList.concat("granola"))
let groceryList2 = groceryList.slice(0,2)
console.log(groceryList2)
groceryList2.push("beans")
console.log(groceryList2)

var numbers = [2, 4, 6, 8, 10]
numbers.unshift(0)
console.log(numbers)
numbers.push(12)
console.log(numbers)
numbers.shift()
console.log(numbers)
numbers.concat(0)
console.log(numbers)
numbers.slice(0,0,0)
console.log(numbers)
numbers.push(0)
console.log(numbers)
const numbers2 = numbers.reverse()
console.log(numbers2)