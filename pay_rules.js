// helps give better errors related to our code
"use scrict"

// create some vaiables we need for our calculation
// this the hourly rate for the employee
let payRate = 12.50;
let hoursWorked = 20;

// determine how many hours are norml hours vs overtime hours

let regularHours = 0;
let overtimeHours = 0;

// if the hour are freater than 40, we know they worked over time
if(hoursWorked > 40){
    // this is where we need to figure out the overtime hours
    regularHours = 40;
    overtimeHours = hoursWorked - regularHours;
}else{
    
    regularHours = hoursWorked;
}

// create some variables to represent the normal pay and overtime pay

let normalPay = payRate * regularHours;
let overtimePay = (payRate * 1.5 ) * overtimeHours;
// figure out what we got pay after normal and overtime hours(pay before taxes)
let grossPay = normalPay + overtimePay;

console.log("I got paid $ "+ normalPay.toFixed(2)+ " for my regular hours");
console.log("igot paid $ "+ overtimeHours.toFixed(2)+ " for my overtime hours");
console.log("i got paid $ "+ grossPay.toFixed(2)+" for my gross pay");