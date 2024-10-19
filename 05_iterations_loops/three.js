//forof loop

// ["", "", ""]
// [{}, {}, {}]

let myArray = [1,2,3,4,5]

for (const i of myArray) {
    // console.log(i);
}

const greetings = "hello world!"
for (const greet of greetings){
    // console.log(`each char is ${greet}`);
    
}

// Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('FR', "France")
map.set('IN', "India")


console.log(map);

for (const [i, value] of map) {
    console.log(i, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'GTA5'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }