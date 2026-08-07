// Immediately Invoked Function Expression (IIFE)

//global variable ke pollution se problem hoti hai kai baar to global scope ke jo bhi variables hai ya
//jo bhi  vaha declaration hota hai use hatane ke liye  IIFE ka use karte hai.

(function chai (){ //named IIFE
    console.log(`DB Connected`);
})();  // semicolon is important otherwise it will show error it means  second function can't be execute


(  ()  =>  {
    console.log(`DB CONNECTED TWO`);
} )()