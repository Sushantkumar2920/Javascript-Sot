// // ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const sush = new User("sush", "chai@gmail.com", "123")
// console.log(sush.encryptPassword());
// console.log(sush.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc` 
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}` 
}

const susha = new User("susha", "susha@gmail.com", "123")
console.log(susha.encryptPassword());
console.log(susha.changeUsername());
