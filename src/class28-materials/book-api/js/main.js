//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector("h2").innerText = localStorage.getItem("books");
  //  document.querySelector("h3").innerText = localStorage.getItem(
  //    "contributors"
  //  );
  //  document.querySelector("p").innerText = localStorage.getItem("date");

function getFetch(){

  const choice = document.querySelector("input").value;
  console.log(choice);

  const url = `https://openlibrary.org/isbn/${choice}.json`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // if there is nothing in localstorage, put something in there so we don't get null back
        if(!localStorage.getItem('books')) {
          localStorage.setItem('books', data.title)
        } else {
          let books = localStorage.getItem("books") + " ; " + data.title
          localStorage.setItem('books', books)
        }
        document.querySelector('h2').innerText += localStorage.getItem('books')
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}



//TODO: 

// - fix it so they get a message if they put nothing in input 
