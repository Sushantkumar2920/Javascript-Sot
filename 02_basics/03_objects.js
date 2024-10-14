// Singleton // we can create singleton object by using object.create

// object literals 

const mySym = Symbol("key1")


const JsUser = {
    name:  "Sushant",
    "full name": "sushant kumar",
    [mySym]: "myKey1",
    age: 24, 
    location: "Gurugram",
    email: "sush@gmail.com",     // in objects keywords are also consider as string like 'email' this is also string
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

console.log(JsUser.email);         // in object tihs is the type to fetch data  
console.log(JsUser["email"]);      // in object tihs is the type to fetch data
console.log(JsUser["full name"])   // like this we can sprint the keywords
console.log(JsUser[mySym]);        // by this way we can print symbols

JsUser.email = "chotu@gmail.com"   // we can give new value & we can freeze it
// Object.freeze(JsUser)              // we can freeze the value of selected value so that we cannot change in the future
JsUser.email = "sush@apple.com"
console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS user");    
}

JsUser.greeting2 = function() {
    console.log(`Hello JS user, ${
        this.name
    }`);    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

