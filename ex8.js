
var str = "";
for (i = 1; i < 101; i++) {
    if ((i % 7 == 0) || (i % 10 == 7) || Math.floor(i / 10) == 7) {
         //console.log("BOOM"); option to print in column 
         str += "boom" + " ";
    }
    else {
       // console.log(i);  option to print in column
       str += i + " "; 
    }
}

console.log(str);
