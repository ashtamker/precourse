var input = require("readline-sync");
let str = input.question("Enter string please to check if it's palindrome: ");

let i = 0, j = str.length;
let first = str.charAt(0);
let last = str.charAt(j);
let check = 0

while(i != j){
    if(str.charAt(i) !== str.charAt(j - 1)){
        console.log("not a palindrome");
        break;
    }
    else{
       check = 1;
       i++;
       j--;

    }
    if(check == 1 ){
        console.log("palindrome");
        break;
    }
}