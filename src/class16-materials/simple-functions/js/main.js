//---Easy
//create a function that subtracts two numbers and alerts the difference

function sub (a, b) {
    alert (a-b)
}

sub(5,3)

//create a function that divides three numbers and console logs the quotient

function divide(a, b, c) {
    console.log(a/b/c)
}
divide (6,5,3)
//create a function that multiplys three numbers and returns the product

function mult(a,b,c) {
    return (a * b *c)
}
console.log(mult(5,6,7))

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function med(a,b,c) {
    return ((a + b) %3) 
}

console.log(med(5,6,7))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function four (a,b,c,d) {
    let mult = (a * b) 
    let sum = (c + d)
    let sub = (c - d)
    let all = ( a * b * c)

    if (mult > 100) {
       console.log( mult + sum, "mult + sum")
    } else if (mult < 100) {
        console.log( mult - sub, "sub")
    } else if ( mult == 100 ) {
        console.log(all % d, "all")
    }
}
console.log('its working')
console.log(four (25, 4, 2, 2))
