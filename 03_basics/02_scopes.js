// var c = 300
let a =300
if (true){
    let a = 10
    const b = 20
    console.log("Inner:", a);
    // var c = 30     //just a suggestion don't use var keyword it will cross the local scope to global scope to print the value 
}

for (let i = 3; i < Array.length; i++){
    const element = Array[i];
}

console.log(a);
// console.log(b);
// console.log(c);
