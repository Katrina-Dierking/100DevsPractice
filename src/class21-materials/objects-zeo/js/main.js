//Create a stopwatch object that has four properties and three methods

const stopwatch = {}

stopwatch.color = "black"
stopwatch.shape = "round"
stopwatch.brand = "Nikola"
stopwatch.size = "large"

stopwatch.start = function() {
    console.log('ready, set, go')
}

stopwatch.stop = function() {
    console.log('time is up')
}

stopwatch.sayBrand = function () {
    console.log(stopwatch.brand)
}
