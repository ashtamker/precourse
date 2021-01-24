let arr = ["have", "a", "nice" ];
let arr2 = ["day", "and","good" ,"vibes"];
console.log(joinArray(arr,arr2)); 



function joinArray (x,y) {
   x = [...x,...y];
    return x;
}