const name ="Sakshi"
const repoCount = 50

//console.log(name + repoCount +"Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sakshi')

console.log(gameName[0]);
console.log(gameName.__proto__); //it also can be access
console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) 
console.log(newString);
const anotherString = gameName.slice(-7, 4) //print reverse value
console.log(anotherString);

const newStringOne ="    Sakshi     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://sakshi.com/sakshi%20verma"
console.log(url.replace('%20', '-'))

console.log(url.includes('sakshi'))
console.log(url.includes('name'))  //to check whether it exist or not?

