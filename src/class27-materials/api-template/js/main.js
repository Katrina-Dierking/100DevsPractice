//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value

  // const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

  const url =
    `https://api.nasa.gov/planetary/apod?api_key=vGGeAuuDS0BbdMmB5VLudDDxigAHEPOYoAtMlbmU&date=${choice}`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      document.querySelector('img').src = data.hdurl
      document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
          console.log('its not working')
      });
}

