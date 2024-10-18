const userEmail = ""                 //whatever value we give it will give the ans like that

if (userEmail) {
    console.log("got user Email");
} 
else { 
     console.log("Dont have user email");
     
}

// falsy value

// false, 0, -0, BigInt 0n,  "", null, undefined, NaN

// truthy value 

// truth, "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}

// Nullish coalescing operster (??): null & undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10          // ?? is a risky operater 
// val1 = undefined ?? 10
val1 = null ?? 5 ?? 10 

console.log(val1);

// terniary operater 

// condition ? true : false

const batPrice = 100
batPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

