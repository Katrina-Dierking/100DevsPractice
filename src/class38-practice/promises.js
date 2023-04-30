

async function getCuteDogs(){
    try {

        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await res.json()
        console.log(data)
    }
    catch(err) {
        console.log(`error ${err}`)
    }
}

getCuteDogs();

// add a try/catch block to async function