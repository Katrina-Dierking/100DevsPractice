//Create a constructor with 4 properties and 3 methods

function Crafter (name, age, pronoun,price, tools) {
    this.name = name
    this.age = age 
    this.pronoun = pronoun
    this.price = price
    this.tools = tools

    this.speak = function(){
        console.log (`${name} says its time to create`)
    }
    this.sells = function(){
    console.log(`${name} sells her items for ${price}`)
    }
    this.works = function(){
        console.log(`${name} uses ${tools} to create ${pronoun} custom items `)
    }
}


let Joann = new Crafter('joann', 34, 'her', '$18', ['clay', ' paint', ' and glue'] )

console.log(Joann.sells())
console.log(Joann.works())

Crafter.prototype.car = false

console.log('Does Joann have a car?', Joann.car)