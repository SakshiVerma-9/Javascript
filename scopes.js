// let a = 10
// const b = 20
// var c = 30
// var c = 200
// let a = 300
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("INNER: ", a);
// }




// console.log(a);
// // console.log(b);
// console.log(c);

function one(){
    const username = "Sakshi"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username = "Sakshi"
    if(username === "Sakshi"){
        const website = "Youtube"
        //console.log(username + website)
    }
}

// +++++++++++ intresting +++++++++++++++
function addone(num){
    return num + 1
}
console.log(addone(5));

const addTwo = function(num){
    return num + 2
}

addTwo(5)