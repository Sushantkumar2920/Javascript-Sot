const descripter = Object.getOwnPropertyDescriptor(Math, "PI")     //to get the propert this is the syntex

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const sush = {
    name: 'ginger tea',
    price: 250,
    isAvailable: true,

    orderSush: function(){
        console.log("sush is ready");
    }
}

console.log(Object.getOwnPropertyDescriptor(sush, "name"));

// Object.defineProperty(sush, 'name', { 
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(sush, "name"));

for (let [key, value] of Object.entries(sush)) {
    if (typeof value !== 'function') {
        
       console.log(`${key} : ${value}`);
    }
}