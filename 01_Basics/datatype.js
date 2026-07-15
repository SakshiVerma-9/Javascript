// premitive
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  //let userEmail = undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

//const bigNumber = 5342455336618728n

// Non primitive(Reference)
//Array, Objects, Functions

const heros = ["Shaktiman", "Naagraaj", "doga"];
let myObj = {
    name:"Sakshi",
    age: 20,
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue); 



//memories

// Stack memory(Primitive)
//Heap memory(Non-Primitive)