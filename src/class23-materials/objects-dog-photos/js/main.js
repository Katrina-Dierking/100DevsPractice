//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch("https://dog.ceo/api/breeds/image/random") 
    .then(res => res.json())
    .then(data => {
        console.log(data.message) //message is a property on the dog api object
        document.querySelector('img').src = data.message // gets different img each time. Each image has a new img url
    })
    .catch(err => {
        console.log(`err ${err}`)
    })