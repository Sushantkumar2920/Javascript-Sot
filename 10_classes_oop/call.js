function setUsersName(username) {
    //complex db calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    setUsersName.call(this, username)
    this.email = email
    this.password = password
}

const sush = new createUser("chai", "chai@gmail.com", "123")

console.log(sush);
