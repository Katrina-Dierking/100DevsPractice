//Create an array of movie titles. Loop through the array and add each element to the h2.

const movies = ["harry potter", " star wars", " cars"]

// movies.forEach((x, i) => console.log(x))

for (let i = 0; i < movies.length; i++) {
    document.querySelector('h2').innerText += movies[i]
}
//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

let nums = [1, 2,3, 4, 5] 

nums.forEach((x, i) => {
    nums[i] += 3
})

console.log(nums)

//Find the average of all the numbers from question two

let sum = 0; 

for (let i = 0; i<nums.length; i++) {
    sum += nums[i] 
}

console.log(sum/nums.length)