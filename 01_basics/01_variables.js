const accountId=144553
let accountEmail = "Hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
//accountId = 2// not allowed
console.log(accountId)
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Banglore"
console.log(accountEmail)
console.table([accountId,accountEmail,accountPassword,accountCity])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/