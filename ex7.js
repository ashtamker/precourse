var input = require("readline-sync");
let number = input.question("Enter a positive number to calculate is factorial ");
number = Number(number);
let floatNum = Number.isInteger(number);
if ((number < 0) || (isNaN(number)) || (floatNum == false)) {
    console.log("worng input");
    throw "stop execution";
}

else if(number == 0)
{
    console.log("1");
}
else{
    let factorial = 1;
    for(i = 1; i <= number; i++)
    {
        factorial = factorial * i; 
    }
    console.log(number + "! = " + factorial );
}

