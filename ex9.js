var input = require("readline-sync");
let number = input.question("Enter a number to check prime numbers between 1 and your nummber: ");
number = Number(number);
let floatNum = Number.isInteger(number);
if ((number < 0) || (isNaN(number)) || (floatNum == false)) {
    console.log("worng input");
    throw "stop execution";
}


for (let i = 1; i <= number; i++) {
    let check = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            check = 1;
            break;
        }

    }

    if (i > 1 && check == 0) {
        console.log(i);

    }
}


