const name = "Sushant"
const repoCount = 50

// console.log(name +repoCount + " value");

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const spiderName = new String('Sushant-hc')

// console.log(spiderName[0]);
// console.log(spiderName.__proto__);

// console.log(spiderName.length);      //after the value name we can put . and know every character of the string.
// console.log(spiderName.toUpperCase());
// console.log(spiderName.charAt(3));
// console.log(spiderName.indexOf('t'));

// const newString = spiderName.substring(0,4)
// console.log(newString);

// const anotherString = spiderName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "    Sushant    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://sushantraj.com/sush%20kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes('sush')); // this keyword will detect the words inside the string

console.log(spiderName.split('-'));
