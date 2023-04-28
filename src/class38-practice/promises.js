

async function getCuteDogs(){
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    console.log(data)
}

getCuteDogs();

// add a try/catch block to async function