//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class Netflix {
    
    constructor(title, time, day, genre) {
    this.title = title
    this.time = time
    this.day = day
    this.genre = genre 

}
    start() {
        console.log(`${this.title} starts at ${this.time}`)
    }

    stop() {
        console.log(`${this.title} has ended.`)
    }

    awards() {
        console.log(`${this.title} gets awards in ${this.genre}`)
    }

    tuneIn(){
        console.log(`${this.title} can be viewed on ${this.day} at ${this.time}.`)
    }
}

let showOne = new Netflix('Virgin River', ' 8pm', 'Friday', 'RomCom')

console.log(showOne.tuneIn())
console.log(showOne.stop())

let showTwo = new Netflix('Hunger Games', ' 9pm', 'Every day', 'sciFi')
console.log(showTwo.tuneIn())