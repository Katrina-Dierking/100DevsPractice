//Create a pizza object that has four properties and three methods (without constructor)

let pizza = {}

pizza.size = "medium"
pizza.topping = "pepporoni"
pizza.price = "$12.00"
pizza.store = "dominos"
pizza.feed = function() {
    console.log("feeds a family of four")
}
pizza.pairing = function() {
    console.log("goes good with beer")
}
pizza.effect = function(){
    console.log(`${pizza.topping} pizza gives me heart burn`)
}

console.log(pizza.effect())