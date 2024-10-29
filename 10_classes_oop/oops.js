const user = {
    username: "sushant",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("sushant", 12, true)
const userTwo = new User("sush", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);