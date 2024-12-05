// variables & data types in js
var name = "Prakash"; // function-scope
let fullName = "Prakash Dura"; // block-scope
const citizenshipNum = "NP1256"; // block-scope, immutable

name = "Om Prakash";
fullName = "Prakash Gurung";
// citizenshipNum = "NP56423"; // erorr because of immutable

console.log(name, fullName, citizenshipNum);