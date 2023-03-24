//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

function numArr(n) {


    for(let i = 1; i<=n; i++) {
        console.log(Array.from(String(n), Number))
    }
}

console.log(numArr(10))

/// not working yet. I'll keep trying