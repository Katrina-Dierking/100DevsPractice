//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements


function arrNum(num) {

    let newArray = []; 
    for (let i =0;  i <=num ; i++) {
        newArray.push(i)
 
    }
    return newArray
}

console.log(arrNum(5))