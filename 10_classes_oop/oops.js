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



console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

const promiseOne = new Promise()
const date = new Date()