//Create a dog object that has four properties and three methods


let dog = {}

dog.name = "lilly"
dog.size = "medium"
dog.gender = "female"
dog.breed = "mutt"

dog.bark = function(){
    console.log('woof')
}
dog.run = function(){
    console.log('super fast')
}
dog.eat = function() {
    console.log('hamburger')
}

/// OR

const dogTwo = {
    name : 'Spot', 
    age : 2, 
    gender: 'female', 
    size: 'small', 
   bark() {
    return (`${dogTwo.name} says roof`)
   }, 
   eat() {
    return (`${dogTwo.name}'s favorite food is hamgurger`)
   }, 
   play() {
       return (`${dogTwo.name} loves to chase cats`)

   }
}

console.log(dogTwo.bark())
console.log(dogTwo.eat())
console.log(dogTwo.play())