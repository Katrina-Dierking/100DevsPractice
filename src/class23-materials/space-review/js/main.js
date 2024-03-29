//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const num = [1, 2,3]

console.log(num.reduce((a,b)=> a+b, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function sqNums(a) {
    let squared = [];

    for (let i = 0; i < a.length; i++) {
        squared.push(Math.pow(a[i], 2))
    }

    return squared;
} 

console.log(sqNums([2, 4, 6]))

//or

let newArr = nums => nums.map(num => num**2)
console.log(newArr([2, 4, 6]))

//Create a function that takes string
//Print the reverse of that string to the console

function str(s) {
    return s.split('').reverse().join('')
}
console.log(str('i am here '))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(s) {
    let newStr =  (s.split('').reverse().join(''))

    if(s === newStr) {
        console.log("YES")
    } else {
        console.log("NO")
    }
}

palindrome("racecar")
palindrome("i am here")