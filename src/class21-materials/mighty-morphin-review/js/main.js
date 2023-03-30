// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
    let favHoliday ='Christmas'; 
    // favHoliday = favHoliday.toUpperCase()

    console.log(favHoliday.toUpperCase());


//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let str = "my head hurts"

let substr = str.slice(-3)
alert(substr)

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

    alert(min)
    alert(max)
}

console.log(hiAndLow(5, 6, 7))

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsTails () {
  
    let heads = (1, 2, 3, 4, 5)


    if(Math.floor(Math.random()*10) + 1 === heads) {
        return "heads"; 
    } else {
        return "tails";
    }
}
alert(headsTails());
alert(headsTails());
alert(headsTails());
alert(headsTails());
alert(headsTails());


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function coin(num) {

}