document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value


//Add what you should be doing - conditionals go here
  // --- the old way of doing it -- concatination 
  
  // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

 
  // new way -- template literal  / template string
//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }




// this code will speak the results -- built into the browser. Used MDM to learn how to do this

const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`

  document.querySelector('#placeToYell').innerText = yellText

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);
}
