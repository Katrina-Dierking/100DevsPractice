//Write your pseduo code first! 
// find the formula for converting C to F
// create an input for the temp
// add an event listener
// create a function that will convert c to F



document.querySelector('#convertToFeh').addEventListener('click', convert)

function convert() {

    console.log('its working')
   let farhenheit = document.querySelector('#celcius').value 

    farhenheit = farhenheit * 9/5 + 32

    document.querySelector('#showTemp').innerText = farhenheit
}
