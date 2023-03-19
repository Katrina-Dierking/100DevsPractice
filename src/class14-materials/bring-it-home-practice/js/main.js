// *Variables*
// Create a variable and console log the value

const name = 'katrina';

console.log(name)

// Create a variable, add 10 to it, and alert the value

let num = 5; 

num +=10

alert (num)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function sub (a,b,c,d) {

    return result = a-b-c-d
}

alert(sub(5,6,7,4))

// Create a function that divides one number by another and returns the remainder

function div(a,b) {
    return a%b 

}
alert (div(10,4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function add(a,b) {
    if(a+b > 50) {
        console.log("Jumanji")
    } else {
        console.log("oz")
    }
}

alert(add(5,8))
alert(add(45,15))

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function mult(a,b,c) {
    if(a*b*c % 3 == 0) {
        alert ('zebra')
    } else {
        alert ('no')
    }
}

mult(5,6,7)
mult(2,2,5)
