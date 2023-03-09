// *Variables*
// Declare a variable, assign it a boolean, and alert the value

let coffee = false
alert(coffee)

// Declare a variable, reassign it to your favorite color, and console log the value
let color = "black"
color = "red"
console.log(color)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function add(a,b,c,d) {
    prod = (a+b+c)/d
    return prod
}

console.log(add(1,2,3,4))

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function power(a,b) {
    console.log(Math.pow(a,b))
}
power(5,6)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

// function booString(boo, str) {
//    boo ? alert(str) : console.log(str)
// }

// OR
const booString = (boo, str) => boo ? alert(str) : console.log(str)


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzbuzz(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i)

        if(i % 3 === 0) {
            console.log("Fizz")
        } else if(i % 5 === 0) {
            console.log("Buzz")
        }else if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz")
        } else {
            console.log(i)
        }
    }
}

fizzbuzz(24)

fizzbuzz(10)