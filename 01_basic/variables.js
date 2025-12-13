const accountId = 2277;
let accountEmail = "alishbah722@gmail.com"
var accountPassword = "12345"
accountCountry = "Canada"
let accountNumber;

// accoundId = 2 not allowefd becz its constant
accountEmail = "Alish@gmail"
accountPassword = "54321"
accountCountry = "USA"

console.log(accountId);

// Prefer not to use var
// because of issue in block scope and functional scope 

console.table([accountId, accountEmail, accountPassword, accountCountry, accountNumber]);