// let age = 22
// let address = "123 main road"
// console.log(typeof age);
// consolelog(typeof address);

let age = "22"
console.log(typeof age)
let valueInNumber = Number(age)
console.log(typeof valueInNumber)

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

const bigNumber = 123456789n
console.log(typeof bigNumber)

// 1 => true , 0 => false
// "" => false , "abc" => true

//Non Primitive

// const user = ["abc", "def", "efg"];
 
// let heros = {
//     name: "Sam",
//     age: 14,
// }

// const myFunction = function(){
//     console.log("hello world")
// }

let another = Symbol("abc")
console.log(typeof another)