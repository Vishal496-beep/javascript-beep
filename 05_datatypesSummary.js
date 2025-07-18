//primitive datatypes
// 7 = string, boolean, Number, Undefined, symbol, bigInt, Null

/*const score = 124
const scoreValue = 402.2
const tempOutside = null
const isloggedIn = false
let username; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const BigNumber = 78566879848588956895n
// console.log(BigNumber)

//reference type or (non- primitive)
//array, object, function

const heroes = ["iron Man", "Captain America", "Wang Lin"];
let myObj = {
    name:"vishal",
    age:21,
    gender:Male,
}

const myFunction = function(){
    // console.log("hello world")
}
/*
function (){}*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ *//

// stack (primitive) we get copy of variable,    heap (non - primitive) we get reference

let myVisualCode = "vishal is awesome"

let anotherCode = myVisualCode
anotherCode = "code with vishal"

console.log(myVisualCode);
 console.log(anotherCode);

let userOne = {
    email:"vishal@codedotcom",
    upi:"usr@evr",
} 
 let userTwo = userOne

 userTwo.email="vishal@aishadotcom"
 userTwo.upi="usr@kkggllff"

 console.log(userTwo.email);
 console.log(userOne.email);
 console.log(userTwo.upi);
 console.log(userOne.upi);