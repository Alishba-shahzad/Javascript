const arr = [1,2,3,4,5]
// console.log(arr)
// console.log(arr.length)


arr.push(6,7)

console.log(arr)

// arr.unshift(8)
// arr.shift()

console.log(arr.includes(8))
console.log(arr.indexOf(3))

// splice & slice

console.log("A", arr)

const newArr = arr.slice(1,3)
console.log(newArr)
console.log("B", newArr)
// console.log(newArr)

const newArr2 = arr.splice(1,3)
console.log("C", newArr)
console.log(newArr2)


// Array part2

const heroes = ["thor", "spiderman"]
const newher = ["ironman"]
const allHeros =heroes.concat(newher)
console.log(allHeros)