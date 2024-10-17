const user = { 
    username: "Sushant",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
    
}

// user.welcomeMsg()          //this will print the username with msg
// user.username = "sush"      // this will update the value
// user.welcomeMsg()

// console.log(this);       // if we randomly print this the ans will be {} 
 
// function chai(){
//     let username = "sushant"
//     console.log(this.username);   //we can't print this. something inside a function
// }

// chai();

const chai = () => {      // this is arrow function-  () => {}
    let username = "sushant"
    console.log(this); 
}
// chai()

const addTwo = (num1, num2) => { 
    return num1 + num2
}                                                   // we can create arrow function like this or ↓

const addThree = (num1, num2) => (num1 + num2)     // we can create arrow function like this also 
                                                // if we have to pass object then also we have to pass it like- ({})
console.log(addTwo(3, 4));
console.log(addThree(5, 6));

// const myArray = [2, 3, 4, 5, 6]
                                            // this is just for loop knowledge 
// myArray.forEach(function () {} )