const arr = [1,2,3,4,5]
// console.log(arr)
// console.log(arr.length)


// arr.push(6,7)

// console.log(arr)

// arr.unshift(8)
// arr.shift()

console.log(arr.includes(8))
console.log(arr.indexOf(3))

// splice & slice

// console.log("A", arr)

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
// const allHeros =heroes.concat(newher)
// console.log(allHeros)


// spread operator (replace concat)


const str = [...heroes, ...newher]
console.log(str)


const anotherArr = [1,2,[3,4],5,[6,7,8,[9,0]]]

const real_another = anotherArr.flat(Infinity)
console.log(real_another)


// isArray, from , of 


console.log(Array.isArray("Alish"));
console.log(Array.from({name: "Alish"})); // interesting
console.log(Array.from("Alish"))


let score1 = 200
let score2 = 400
let score3 = 600

console.log(Array.of(score1, score2, score3))