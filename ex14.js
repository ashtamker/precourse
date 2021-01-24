var input = require("readline-sync");
let num = input.questionInt("Enter a number: ");

let arr = [];

for(let i = 0; i < num; i++){

arr.unshift(randomNum()); // fill the array with random number
}

arr.sort(function(a,b) { return a - b}); // small to big in tah array
console.log("min is " + arr[0]);
console.log("max is " + arr[num - 1]);





function randomNum() {
    let x = Math.floor(Math.random() * 50) + 1;

    return x;
}