//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function TonyHawkProSkater (age, gender, level, awards) {
    this.age = age; 
    this.gender = gender; 
    this.level = level; 
    this.awars = awards; 
    this.jump = function() {
        console.log("look how high he can go")
    }
    this.pain = function() {
        console.log('woooo, he got hurt')
    }
    this.speak = function(){
        console.log('thank you for coming to my show')
    }
}

let Jon = new TonyHawkProSkater(21, "male", "amature", "no awards yet")

console.log(Jon)
console.log(Jon.speak())
console.log(Jon.jump())