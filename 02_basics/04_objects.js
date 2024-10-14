// const tinderUser = new Object()
const tinderUser = {}   //blank will give blank responce

tinderUser.id = "123abc"
tinderUser.name = "sush"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: " sush@gmail.com",
    fullname: {
        userfullname:{
        firstname: "Sushant",
        Lastname: "Kumar" 
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
const obj3 = Object.assign({}, obj1, obj2, obj4)   //this object.assign will combine the both the object // {} blank this will give the answer in that array only

const obj3 = {...obj1, ...}
console.log(obj3)
