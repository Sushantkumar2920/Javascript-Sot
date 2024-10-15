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
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //this object.assign will combine the both the object // {} blank this will give the answer in that array only

const obj3 = {...obj1, ...obj2}  
// console.log(obj3) 


const users = [
    {
        email: "123@gmail.com",
        id: 1
    },
    {
        email: "456@gmail.com",
        id: 2  
    },
    {
        email: "789@gmail.com",
        id: 3
    }
]

users[1].email
// console.log(tinderUser);    // this will show the all values

// console.log(Object.keys(tinderUser));     // this will give the keywords of given value in array
// console.log(Object.values(tinderUser));   //  this will give the values of given keybwords in array
// console.log(Object.entries(tinderUser));  // this will convert the balue and keywords into array 

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // this will check the keywords
 

//****************** Object de-structure and JSON API ******************    

const course = {
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "Sushant"
}

// course.courseInstructor          // its a way to pull the value 

const {courseInstructor: instructor} = course   // same thing but different way

// console.log(courseInstructor);
console.log(instructor)

const navbar = ({comapany}) => {   // this is the way to destructor any object with different name

}

navbar(comapany = "Sushant")     // this navbar is just for explaination of destructor any object


// {
//     "name": "Sushant",
//     "courseName": "Js in Hindi",     // this is an example of Json file
//     "Price": "free"
// }

[
    {},
    {},       //object in formate of array showing here line = #85 to #89
    {}
]
