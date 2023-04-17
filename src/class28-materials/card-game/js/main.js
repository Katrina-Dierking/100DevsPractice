//Get the deck
let deckId = ''


fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        deckId = data.deck_id
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('button').addEventListener('click', getFetch)
    document.querySelector('#player1').src = localStorage.getItem("card1")
    document.querySelector('#player2').src = localStorage.getItem("card2")
function getFetch(){
  
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let val1 = Number(cardValue( data.cards[0].value ))
        let val2 = Number(cardValue( data.cards[1].value ))
        // document.querySelector('#player1').src = data.cards[0].image
        // document.querySelector('#player2').src = data.cards[1].image

        if(!localStorage.getItem('card1') && !localStorage.getItem('card2')) {
            localStorage.setItem('card1', Number(cardValue(data.cards[0].value )));
            localStorage.setItem('card2', Number(cardValue(data.cards[1].value)));
          if(val1 > val2){
            document.querySelector('h3').innerText = 'Player 1 WON!'
          }else if(val1 < val2){
            document.querySelector('h3').innerText = 'Player 2 WON!'
          }else{
            document.querySelector('h3').innerText = 'WAR!'
          }
        } else {
          let card1 = localStorage.getItem('card1') + Number(cardValue(data.cards[0].value))
          let card2 = localStorage.getItem('card2') + Number(cardValue(data.cards[1].value))
          localStorage.setItem('card1', card1)
          localStorage.setItem('card2', card2)
        
        }
        
            document.querySelector('h3').innerText = localStorage.getItem('card1')
            document.querySelector('h3').innerText = localStorage.getItem('card2')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function cardValue(val){
  if(val === "ACE"){
    return 14
  }else if (val === "KING"){
    return 13
  }else if(val === "QUEEN"){
    return 12
  }else if(val === "JACK"){
    return 11
  }else{
    return val
  }
}