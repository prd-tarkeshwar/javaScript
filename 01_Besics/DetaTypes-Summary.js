//# Primitive

// 7  types : String, Number, Boolearn, null, Undefined,Symbol, BigInt

const score =  100 // data types : Number
const scoreValue =  100.3 // data types : Number

const isLoggedId = false // data types : boolean
const outisdeTemp = null // data types : object
let userEmail; //  data types : undefined
const id = Symbol('123') // data types : Symbol
const anotherId = Symbol('123') // data types : Symbol
console.log(id === anotherId);

const bigNumber = 3896564587986656873134n //bigint

// Reference (Non Primitive)

// Arry, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // data types : object
let myObj = {  // data types : object
    name:"Tarkeshwar",
    age: 22,
}

const myFunction = function(){ //data types : function
    console.log("Hello World");
}

console.log(typeof myFunction);
