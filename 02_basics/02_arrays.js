const marver_heros = ["thor", "ironman", "caption"]
const dc_heros = ["superman", "flash", "batman"]

// marver_heros.push(dc_heros)     //.push will not merge the array btw it will add it in the last.

// console.log(marver_heros);
// console.log(marver_heros[3][1]);    // like tihs we can pick any element from the array

// const allHeros = marver_heros.concat(dc_heros) //.concat will merge both the array into one

// console.log(allHeros);

const all_newHeros = [...marver_heros, ...dc_heros]

// console.log(all_newHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 6]]]

let realAnotherArr = another_array.flat(Infinity)   // .flat will free the complex array into one single array

console.log(realAnotherArr);



console.log(Array.isArray("Sushant")); // .isArray will check the given value is array or not

console.log(Array.from("Sushant")); //.from will change the given value to an array
console.log(Array.from({name: "Sushant"}));   // we have to give proper command to convert the given command to array

let scoreOne = 100
let scoreTwo = 200
let scoreThree = 300

console.log(Array.of(scoreOne, scoreTwo, scoreThree));   
//.of or .from will convert the given values for the keywords into array with the commands ↑

