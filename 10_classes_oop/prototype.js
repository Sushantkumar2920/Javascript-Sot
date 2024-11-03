// let myName = "sushant     "
// let mychannel = "chai     "

// console.log(myName.trueLength);         //it will check the exact length 


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);   
    }
}

Object.prototype.sushant = function(){
    console.log(`sushant is present in all power`);
    
}

Array.prototype.HeySushant = function(){
    console.log(`Sushant says Hello`);
    
}

// heroPower.sushant()
myHeros.sushant()
myHeros.HeySushant()
// heroPower.HeySushant()

//inheritance 

const user = {
    name: "sush",
    email: "sush@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssigment: 'JS assign',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ =  user

// morden syntex
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "sushsush"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()

"sushant".trueLength()
"sush".trueLength