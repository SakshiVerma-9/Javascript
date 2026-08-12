// switch (key) {
//     case value:
//         break;
    
//     default:
//         break;
// }

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("default case")
//         break;    
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values

// "0", 'false', " ", [], {}, function(){}


const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ??  10 ?? 15
console.log(val1);

// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice<= 80 ? console.log("less than 80") : console.log("more than 80")

