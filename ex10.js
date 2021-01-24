var input = require("readline-sync");
let str = input.question("Enter string please: ");

let strArr = str.split(" ");

str = strArr.join("*");
console.log(str);

