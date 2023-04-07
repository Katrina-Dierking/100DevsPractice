//Example fetch using pokemonapi.co

/// create local storage to hold deckId of this deck so it doesn't give a new deck each time

let deckId = ''

fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
/// fetch grabs and deck and stores the id in a global variable
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);
    deckId= data.deck_id
  })
  .catch((err) => {
    console.log(`error ${err}`);
    console.log("its not working");
  });


document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){

/// when the button is clicked, we use the deckId to draw 2 cards from the deck. Two images are drawn and placed in the DOM
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1').src= data.cards[0].image
      document.querySelector("#player2").src = data.cards[1].image;
        
      })
      .catch(err => {
          console.log(`error ${err}`)
          console.log('its not working')
      });
}

