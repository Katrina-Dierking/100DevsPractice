//Write your pseduo code first! 




//1. What is the temperature in C? 

// 2. Use the formula to plug in the C and find F

// Formula = F = 9/5 C + 32



document.querySelector("#convert").addEventListener("click", convert);

function convert() {

        let temp = document.querySelector("#sel").value;

        temp *= 9/5 + 32

        document.querySelector('#placeToConvert').innerText = temp
}