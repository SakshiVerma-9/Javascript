// high order loops : For of loop

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"
// for(const greet of greetings){ //here we can take i or j
//     console.log(`Each char is ${greet}`)
// }

// maps => ae known for unique values and it follows thee order in which they are sent 

// const map = new Map()
// map.set('IN', "India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")

//console.log(map);

// for(const key of map){
//     console.log(key);
// }

// for (const [key, value] of map){
//     console.log(key, ':-', value);
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
//}
// for (const [key, value] of myObj){
//     console.log(key, ':-', value);
// }

// for  array in keys  loop
// const myObj = {
//     js: 'Javascript',
//     cpp: 'C++',
//     rb: 'Rubi',
//     swift: 'Swift by apple'
// }
// for(const key in myObj){
//     console.log(myObj[key]);
// }

const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
    console.log(programming[key]);
}