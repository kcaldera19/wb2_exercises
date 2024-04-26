"use strict"


let departmentName = "";

switch (1){

    case 1:
        departmentName = "Marketing";
         break;
    case 5:
        departmentName = "Human Resourse";
        break;
    case 10:
        departmentName = "Accounting";
        break;
    case 12:
        departmentName = "Legal";
        break;
    case 18:
        departmentName = "IT";
        break;
    case 20:
        departmentName = "Customer Relation";
        break;
    default:
        departmentName = "deparment not found"

    


}
console.log(`the deparment is ${departmentName}`)