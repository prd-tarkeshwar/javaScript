// const tinderUser = new Object()
const tinderUser ={}
tinderUser.id="123abc"
tinderUser.name="Tarkeshwar"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser = {
    email: "tarkeshwar01@gmal.com",
    fullnamme: {
        userfullname: {
            firstname: "Tarkeshwar",
            lastname: "Parit"
        }
    }
}
// console.log(regularUser.fullnamme.userfullname.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);
const obj3={...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email: "t@mail,con"
    },
    {
        id:1,
        email: "t@mail,con"
    },
    {
        id:1,
        email: "t@mail,con"
    },
    {
        id:1,
        email: "t@mail,con"
    }
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js",
    price:"999",
    courseInstructior: "tarkeshar"
}

const {courseInstructior} = course
console.log(courseInstructior);
