const accountId = 12345
let accountEmail = "amit@gmail.com"
var accountPassword = "12121212"
accountCity = "Syracuse"    // not recommended way to declare value
let accountState;

// accountId = 23574 // this is not allowed, const value cannot be changed

console.log(accountId);

accountEmail = "a@gmail.com"
accountPassword = "23232323"
accountCity = "NYC"

/*
var is not preferred because of issue in block scope or functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
