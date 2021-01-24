var input = require("readline-sync");
let num = input.question("please choose a number latger than 10: ");
num = Number(num);

while (num < 11) {
    num = input.question("please choose a number latger than 10: ");
    num = Number(num);


}
console.log("thank you");