//Create a dog object that has four properties and three methods

const dog = {
    name : 'Spot', 
    age : 2, 
    gender: 'female', 
    size: 'small', 
   bark() {
    return (`${dog.name} says roof`)
   }, 
   eat() {
    return (`${dog.name}'s favorite food is hamgurger`)
   }, 
   play() {
       return (`${dog.name} loves to chase cats`)

   }
}

console.log(dog.bark())
console.log(dog.eat())
console.log(dog.play())