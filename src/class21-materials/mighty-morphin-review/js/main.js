// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
    let favHoliday ='Christmas'; 
    // favHoliday = favHoliday.toUpperCase()

    console.log(favHoliday.toUpperCase());


//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let str = "my head hurts"

alert(str.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function five(n1, n2, n3, n4, n5) {


    return Math.abs(100 - n1 -n2 - n3 - n4 - n5)

}

alert(five(12, 11, 10, 9, 8))


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function hiAndLow(n1, n2, n3) {

    let min = Math.min(n1, n2, n3)
    let max = Math.max(n1, n2, n3)

   console.log(`The lowest is ${min} and the highest is ${max}`)
}

(hiAndLow(15, 6, 77))

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

// function headsTails () {
  
//     let result = Math.random()


//     if(result <.5){
//         return "heads"
//     } else {
//         return "tails"
//     }
// }

const headsTails = () => Math.random() < .5 ? 'heads' : "tails"
// console.log(headsTails());
// console.log(headsTails());
// console.log(headsTails());
// console.log(headsTails());
// console.log(headsTails());
// console.log(headsTails());
// console.log(headsTails());
// console.log(headsTails());
// console.log(headsTails());
// console.log(headsTails());


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function coinFlip(num) {
    for(let i =1; i <= num; i++) {
        let result = headsTails()
        console.log(result)
    }
}

coinFlip(10)