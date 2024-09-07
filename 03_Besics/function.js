function myName(){
    console.log("T");
    console.log("A");
    console.log("R");
    console.log("K");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("W");
    console.log("A");
    console.log("R");
}

// myName()

// function addToNumbers(Number1, Number2){ //perametar
//     console.log(Number1 + Number2);
// }

function addToNumbers(Number1, Number2){ //perametar
    // let result = Number1 + Number2;
    // return result

    return Number1+Number2
}
const result = addToNumbers(3,5) //Argumetion
// console.log("Result:",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Pleas enter s uername");
        return
    }
    return `${username}jut logged in`
}
// console.log(loginUserMessage("Tarkeshwar"))
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 300, 400, 500, 1000));

const user = {
    username: "tarkeshwar",
    prices: 199
}

function handleObject(anyobjet){
    console.log(`Username is ${anyobjet.username} and price is ${anyobjet.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}
// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
