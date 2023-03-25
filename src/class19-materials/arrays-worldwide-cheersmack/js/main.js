//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

function numArr(n) {

let newArray = []
    for(let i = 1; i<=n; i++) {
       newArray.push(i)
    }
    return newArray
}

console.log(numArr(10))

/// nworking!!! Yay