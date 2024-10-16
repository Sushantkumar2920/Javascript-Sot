
function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}

// sayMyName() 

// function addTwoNumbers(number1, number2){        //this is function and inside this() parameter 
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){        //this is function and inside this() parameter 
    // let result = number1 + number2
    // return result   
    return number1 + number2                        // this is also the way to get the return value 
    // console.log("Sushant");                      // when will print something after return it wil never execute that code 
}


// addTwoNumbers(3, 5);                       // when we call a function its an argument it can be anything number, string, etc..
const result = addTwoNumbers(3, 5)         // we can kept this function call under variable 

// console.log("Result:", result);

function loginUserMessage(username = "Sush"){      // in a function we can assign default value also in the parameter
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("Sushant"));
console.log(loginUserMessage("Sushant"));       // in this we can overwrite the default value 
