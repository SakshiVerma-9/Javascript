const user = {
    username: "Sakshi",
    price: 999,

    welcomeMessage: function(){
        //console.log(`${this.username} , welcome to website`);
        //console.log(this); //it tells about current situation
    }
    
}
// user.welcomeMessage()
// user.username = "Sak"
// user.welcomeMessage()

//console.log(this);

// function tea(){
//     console.log(this);
// }
// tea()

// const chai = () => {
//     let username = "Sakshi"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) =>  num1 + num2 //implicit return

console.log(addTwo(3, 4))
