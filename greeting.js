"use strict"

let currentHours = 17;
let greeting = "";
// create an if/else if statment to figure out ouur greeting

if(currentHours <=10){
    greeting = "Good morning!";

}
else if(currentHours < 17) {
    greeting = "Good Afternoon!"

}
else{ 
    greeting = "Good evening!"

}

console.log(greeting)
