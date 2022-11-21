// *Variables*
// Create a variable and console log the value

const value = 21; 
console.log(value)

// Create a variable, add 10 to it, and alert the value

let add = 32
add += 10

alert(add)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function sub(a,b,c,d) {
    return a - b - c -d
}

alert(sub(10, 4, 3, 2))
// Create a function that divides one number by another and returns the remainder

function div (a, b) {
    return a%b
}

console.log(div(6,4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwotoJum(a,b) {
    if(a + b > 50) {
        alert ('Jumanji')
    }
}

addTwotoJum (5, 8)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiByThree (a,b,c) {
    let product = a * b * c
    if(product %3 === 0) {
        alert ('Zebra')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function logWord(word,num ) {
    for (let i = 1; i <= num; i++) {
        console.log(word)
    }
}

logWord('yeah', 10)