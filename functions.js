// function sayMyName(){
//     console.log("S");
//     console.log("A");
//     console.log("K");
//     console.log("S");
//     console.log("H");
//     console.log("I");
// }
// sayMyName()

// function addTwoNumbers(number1, number2){
//     //console.log(number1 + number2);

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }
// const result = addTwoNumbers(3, 6)

// console.log("Result: ",result);

// function loginUserMessage(username){
//     if(username ===undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// //console.log(loginUserMessage("Sakshi"))
// console.log(loginUserMessage())


// function calculateCarPrice(val1, val2,...num1){// val1 ,val2=(200,400)
//     return num1
// }

// console.log(calculateCarPrice(200, 400, 600, 2000))

const user = {
    username: "Sakshi",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
    username: "sak",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));