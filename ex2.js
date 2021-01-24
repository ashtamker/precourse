var input = require("readline-sync");
let num1 = input.question("Enter the first number:");
let num2 = input.question("Enter the second number:");
sumNumber(num1,num2);

function sumNumber(x,y) { 
x = Number(x);
y = Number(y);
if( (x + y) == 10)
{
    return console.log("makes 10");
}
else 
{
     return console.log("nope");
}
  
}