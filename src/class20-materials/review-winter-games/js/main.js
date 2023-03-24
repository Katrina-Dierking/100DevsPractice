//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)


function evenNums(arr) {

    let evenArr = [];

    for(let i = 1; i <= arr.length; i++) {
        if(i % 2 === 0) {
            evenArr.push(i)
        }
    }
    return evenArr

    // let evenArr = [];

    // arr.forEach(i => {
    //     if(i % 2=== 0) {
    //         evenArr.push(i)
    //     }
    // })
    // return evenArr
}

console.log(evenNums([2, 5, 6, 7, 8, 9]))