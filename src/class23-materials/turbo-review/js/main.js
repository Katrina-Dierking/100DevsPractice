// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let str = "are you working today?"

console.log(str.includes("?"))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let multiWords = "I am a jr. dev. I am looking for jr. dev positions"

console.log(multiWords.replaceAll("jr. dev", "software engineer"))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function game() {
    
  let random = Math.random()
    if(random < .33) {
        return "rock"
    } else if (random < .66) {
        return "paper"
    } else {
        return "scissors"
    }

}
console.log(game())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function playTheBot(choice) {
    let bot = game()

    if ((choice === "rock" && bot === "scissors" )||
        (choice === "scissors" && bot === "paper") ||
        (choice === "paper" && bot === "rock")
    ) {
       console.log( "you win")
    } else if (choice === bot) {
        console.log( "tie")
    } else {
        console.log( "you lose")
    }
}

(playTheBot("paper"))
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.




function playAgain(arr) {
  arr.forEach(choice => playTheBot(choice));
}

playAgain(['rock', 'paper', 'scissors']);
