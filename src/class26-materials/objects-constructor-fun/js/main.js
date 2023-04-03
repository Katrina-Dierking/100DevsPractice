//Create a constructor with 4 properties and 3 methods

function Crafter (name, age, price, tools) {
    this.name = name
    this.age = age 
    this.price = price
    this.tools = tools

    this.speak = function(){
        console.log (`${name} says its time to create`)
    }
    this.sells = function(){
    console.log(`${name} sells her items for ${price}`)
    }
}


let Joann = new Crafter('joann', 34, '$18', ['clay', 'paint', 'glue'] )

console.log(Joann.sells())