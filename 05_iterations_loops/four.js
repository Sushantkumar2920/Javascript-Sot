// forin loop

const myObject = {
    js: 'jabascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} for ${myObject[key]}`);
}

const programming = ["js", "rb", "cpp", "java", "py"]
for (const key in programming) {
    // console.log(programming[key])       
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "America")                    //we cannot use map for forin loop
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
