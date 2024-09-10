const user = {
    username: "tarkeshwar",
    price:999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome`);
        // console.log(this);
        
    }
}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this);

// function chai(){
//     let username = "Tarleshwar"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//         let username = "Tarleshwar"
//         console.log(this.username);
// }

const chai =() =>{
    let username = "Tarleshwar"
    console.log(this);
}

//  chai()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }
// const addTwo = (num1, num2)=> num1 + num2

// const addTwo = (num1, num2)=> ( num1 + num2 )

// const addTwo = (num1, num2)=> {username: "tarkeshwaar"}

const addTwo = (num1, num2)=> ({username: "tarkeshwaar"})
console.log(addTwo(3, 4));

// const myArray = [2, 3, 4, 5]

// myArray.forEach()