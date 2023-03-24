//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 


function multArr(arr) {

    let prod = 1; 

    // for(let i =0; i <arr.length; i++) {
    //     return arr[0] * arr[1]
    // }

    arr.forEach(num => prod *= num)
       alert(prod);
}

multArr([1,2,3,5])