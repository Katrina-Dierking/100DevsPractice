//Create a pizza object that has four properties and three methods (without constructor)

let pizza = {}

pizza.size = "medium"
pizza.topping = ['pepperoni', 'bacon', 'hamburger']
pizza.price = "$12.00"
pizza.provider = "dominos"
pizza.feed = function() {
    console.log(`${pizza.size} pizza feeds a family of four`)
}
pizza.pairing = function() {
    console.log("goes good with beer")
}
pizza.effect = function(){
    console.log(`${pizza.topping[0]} pizza gives me heart burn`)
}

console.log(pizza.effect())
console.log(pizza.feed())

/// with constructor 

function MakePizza (size, toppings, price, provider) {
    this.size = size
    this.toppings = toppings
    this.price = price
    this.provider = provider
}

let fridayPizza = new MakePizza ('large', ['bacon', 'pepp', 'cheese'], '$18.00', 'Papa Johns')

console.log(fridayPizza.price)