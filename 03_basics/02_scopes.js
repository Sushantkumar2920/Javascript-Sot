// var c = 300
let a =300
if (true){
    let a = 10
    const b = 20
    // console.log("Inner:", a);
    // var c = 30     //just a suggestion don't use var keyword it will cross the local scope to global scope to print the value 
}

for (let i = 3; i < Array.length; i++){
    const element = Array[i];
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
     const username = "Sushant"

     function two(){
        const website = "youtube"
        console.log(username);
     }
    //  console.log(website);
     two()
}
// one()

if(true){
    const username = "sushant"
    if(username === "sushant") {
        const website = " youtube"
        // console.log(username + website);    // this comsole will only work as this is inside globle scope
    }
    // console.log(website);
}

// console.log(username);

//***********************************************************

console.log(addOne(5));
function addOne(num){      //by this way we can create function and access the keyword value
    return  num + 1
}


console.log(addTwo(5))
const addTwo = function(num){
    return num + 2         //by his way also we can create function but we can't access keywords if we put it before function
}

