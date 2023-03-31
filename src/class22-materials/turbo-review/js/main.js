// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = " vanilla sprite "

console.log(favDrink.trim())


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let str = "i love sprite"

console.log(str.split(' ').includes("apple"))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors () {
    let game = ["rock", "paper", "scissors"]

    let result = game[Math.floor(Math.random() * 3)]

    if (result === "rock") {
        console.log("Rock!! You win! yay") 
    } else if (result === "paper") {
        console.log("Paper - I don't think so")
    } else {
        console.log("Scissors - you lose")
    }
}

console.log(rockPaperScissors())

//or

function whoWins () {
    let random = Math.random()
    if(random < .33) {
        return "rock"
    } else if (random < .66) {
        return "paper"
    } else {
        return "scissors"
    }
}
console.log(whoWins())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function rpsGameWinner(option) {
    let bot = whoWins()

    if(( option === "rock" && bot === "scissors" ) || 
    (option === "scissors" && bot === "paper") ||
    (option === "paper" && bot === "rock"))
    {
        console.log("you win")

    } else if ( option === bot) {
        console.log("you tied")
    } else {
        console.log("you lose")
    }
}

rpsGameWinner("rock")
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playAgain(arr) {
    arr.forEach( option => rpsGameWinner(option))
}

playAgain(['rock', 'paper', 'scissors'])