// const,let,var means store data in memory
// Const (Constant keyword) - const keyword not change
const accountId = 144553
// let (let and var same) // but let use mostly reason below--
let accountEmail = "krishna@google.com"
// Var (variable)
var accountPassword = "12345"
// here variable declare without var,let
accountCity = "Jaipur"
// if no value given in variable then js called undefined
let accountState;

// accountId = 2 // not allowed (const not change)

accountEmail = "kk@gmail.com"
accountPassword = "121212"
accountCity = "Bengaluru"

console.log(accountId);

/* why let use ?
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
