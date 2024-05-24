const accountId = 12345
let accountEmail = "sushantraj2920@gmail.com"
var accuntPassword = "12345"
accountCity = "Jhumritelaiya"
let accountState;

// accountId = 2 // not allowed

accountEmail = "abc@gmail.com"
accuntPassword = "121212"
accountCity = "Bihar"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope & functional scope
*/

console.table([accountId, accountEmail, accountCity, accuntPassword, accountState])