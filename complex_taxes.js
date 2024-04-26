"use strict"

// create some vaiables we need for our calculation
// this the hourly rate for the employee
let payRate = 25.00;
let hoursWorked = 40;

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
let annualGrossPay = grossPay * 52;

// fillinSingle = false
let taxFileType = "joint";
let taxRate = 0;





if(taxFileType === "joint" ){
    // we are filing a joint return

    if(annualGrossPay < 12000){
        taxRate = 0;

    }else if (annualGrossPay < 25000){
        taxRate = 6;
        
    }else if (annualGrossPay <75000){
        taxRate = 11;

    }
    else{
        taxRate = 20;
    }

}
else{
    // filing single return
    
    if(annualGrossPay < 12000){
        taxRate = 5;

    }else if (annualGrossPay < 25000){
        taxRate = 10;
        
    }else if (annualGrossPay <75000){
        taxRate = 15;

    }
    else{
        taxRate = 20;
    }

}
let taxAmount = grossPay * (taxRate/100)
let  netPay = grossPay - taxAmount;



console.log(`You worked ${hoursWorked} hours this period.`);
console.log( `my payrate is ${payRate.toFixed(2)} per hour,your gross pay is ${grossPay}`);
console.log(`Your filling status is ${taxFileType}`);
console.log(`The tax withholding this period is ${taxAmount.toFixed(2)}`);
console.log(`Your net pay is ${netPay.toFixed(2)}`);


