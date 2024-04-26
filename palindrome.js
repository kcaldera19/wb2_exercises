"use strict"
let word = "noon";

    

let reversedWord  = word.split("").reverse().join("");
console.log(reversedWord)

if (reversedWord === word){
    console.log("noon is true");
}else{
    console.log("noon is false");
}