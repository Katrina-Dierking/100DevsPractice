

async function getCuteDogs(){
    try {

        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await res.json()
        console.log(data.message)
        document.querySelector("img").src = data.message;
    }
    catch(err) {
        console.log(`error ${err}`)
    }
}

getCuteDogs();

// add a try/catch block to async function
//display the image on the DOM