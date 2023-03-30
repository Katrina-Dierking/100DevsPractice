//Arrays

//Create and array of tv shows. Loop through and print each show to the console

const tv = ['That 70s', 'Hawaii five-0', 'friends']

tv.forEach(show => console.log( show ))



//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let nums = [21, 5, 89, 2, 45, 18, 50, 100]

let onlyEvens = arr => arr.filter( n => n % 2 === 0)

console.log(onlyEvens(nums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number



function seconds(arr) {
    let sorted = arr.sort((a,b) => a-b)
    alert (sorted[1] + sorted[sorted.length-2])
}
seconds([15,1,8,0,10,18])