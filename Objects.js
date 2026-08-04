// // //singleton
// // //Object.create

// // //object literals


// // const mySym = Symbol("key1")


// // const JsUser = {
// //     name: "Sakshi",
// //     "full name":"Sakshi Verma",
// //     [mySym]: "mykey1",
// //     age: 20,
// //     location: "Lucknow",
// //     email: "sakshi@gmail.com",
// //     isLoggedIn: false,
// //     LastLoginDays: ["Monday", "Saturday"]
// // }
// // // console.log(JsUser.email)
// // // console.log(JsUser["email"])
// // // console.log(JsUser["full name"])
// // // console.log(JsUser[mySym])


// // JsUser.email = "Sakshi@chatgpt.com" //to change the email
// // //Object.freeze(JsUser)  //after applying this you can't change the value
// // JsUser.email = "Sakshi@microsoft.com"
// // //console.log(JsUser);

// // JsUser.greeting = function(){
// //     console.log(`Hello JS user`);
// // }
// // JsUser.greetingTwo = function(){
// //     console.log(`Hello JS user, ${this.name}`);
// // }

// // console.log(JsUser.greeting());
// // console.log(JsUser.greetingTwo());


// const tinderUser = new Object()  //singleton object
// const tinderUser =  {} // non- singleton object

// tinderUser.id = "123abc"
// tinderUser.name = "Sakshi"
// tinderUser.isLoggedIn = false
// //console.log(tinderUser);

// const regularUser = {
//     email: "S@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname: "Sakshi",
//             lastname: "Verma"
//         }
//     }
// }
// //console.log(regularUser.fullname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}
// //const obj3 = Object.assign({}, obj1, obj2, obj4) //{}-target , obj1,obj2..- source
// const obj3 = {...obj1, ...obj2}
// //console.log(obj3);

// // const users = [
// //     {
// //         id: 1,
// //         email: "s@gmail.com"
// //     },
// //     {
// //         id: 1,
// //         email: "s@gmail.com"
// //     },
// //     {
// //         id: 1,
// //         email: "s@gmail.com"
// //     }
// // ]
// // users[1].email
// // console.log(tinderUser);
// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hini",
    price: "999",
    courseInstructor: "sakshi"
}
const{courseInstructor} = course

console.log(courseInstructor);