//Write your pseduo code first! 

/// 1. input the temp in cels
/// 2. use formula to convert
//// 3. Display

document.querySelector("#convert").addEventListener("click", run);

function run() {

    // console.log("YAY IT WORKS")
    let temp = document.querySelector('#cels').value 

   temp = temp * 9/5 + 32

    document.querySelector('#placeToConvert').innerText = temp
}



