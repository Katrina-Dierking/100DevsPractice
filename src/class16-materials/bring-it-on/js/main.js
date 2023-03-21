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

function sub(num1, num2, num3, num4) {
    return num1 - num2 - num3 - num4
}

alert(sub(10, 4, 3, 2))
// Create a function that divides one number by another and returns the remainder

function div(num1, num2) {
  return num1 % num2;
}

console.log(div(6,4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwotoJum(num1, num2) {
  if (num1 + num2 > 50) {
    alert("Jumanji");
  }
}

addTwotoJum (5, 8)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiByThree(num1, num2, num3) {
  let product = num1 * num2 * num3;
  if (product % 3 === 0) {
    alert("Zebra");
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