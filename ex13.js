var input = require("readline-sync");
var str = input.question("Enter a string please: ");
//let regex = /^[a-zA-Z]+$/;
let arr = str.split(" ")
arr.sort(function (a, b) { return b.length - a.length });
// let longest = "1";

console.log(arr); // for test if the order is by length 

// try here with ascii code dident work well
/*
let i = 0;
while(i < arr.length){
    longest = arr[i];
    for(let j = 0; j < longest.length; j++){
       let x = longest.charCodeAt(j)
        if(x < 65  || x > 90 || x < 97 || x > 122 ){
            break;
        } 
       
     
    }
  
  i++;
}
*/

for (let i = 0; i < arr.length; i++) {
    let longest = arr[i]
    let check = hasNumbers(longest);
    let check2 = hasSymbols(longest);
    if ( check == false && check2 == false ) {
        console.log(longest);
        break;
    }

}

function hasNumbers(x) {
    var regex = /\d/g;   // check for number in the string
    return regex.test(x)
}
function hasSymbols(str) {
    var text = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; // check for symbol
    let x = text.test(str)
    return x;
    
}
