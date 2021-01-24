var input = require("readline-sync");
var str = input.question("Enter a string please: ");
 

let arr = Array.from(str);

for(let i = 0; i < arr.length; i++){
    if( arr[i] == 'a' || arr[i] == 'e' || 
    arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u' 
    || arr[i] == 'y' ) {
        arr[i] = arr[i].toUpperCase();
      }
    
}
console.log(arr.join(""));
