//Create a conditonal that checks their age



// let age = 52
//If under 16, tell them they can not drive

//If under 18, tell them they can't hate from outside the club, because they can't even get in

//If under 21, tell them they can not drink


//If under 25, tell them they can not rent cars affordably

//If under 30, tell them they can not rent fancy cars affordably


//If under over 30, tell them there is nothing left to look forward too





//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph


document.querySelector('h1').addEventListener('click', run)

function run() {
    console.log('its working')

    let age = document.querySelector("#danceDanceRevolution").value;
    let p = document.querySelector('p')

    if (age < 16) {
        console.log("you are too young to drive.");
    } else if (age < 18) {
        console.log("You can hate from outside but you can't get in");
    } else if (age < 21) {
        console.log("you cannot drink");
    } else if (age < 25) {
        console.log("you cannot rent a car");
    } else if (age < 30) {
        console.log("you cannot rent fancy cars");
    } else if (age >= 30 && age < 50) {
        console.log("there is nothing to look forward to");
    } else {
        console.log('too bad so sad')
    }
    

    
}