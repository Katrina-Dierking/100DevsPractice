let total = 0

// document.querySelector('#pumpkin').addEventListener('mouseenter', makeZero)
document.getElementById('pumpkin').addEventListener('mouseenter', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#doubleTheFun').addEventListener('click', dub2)
document.querySelector('#divideMe').addEventListener('click', div2)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function dub2() {
  total *=2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function div2() {
  total /=2
  document.querySelector('#placeToPutResult').innerHTML = total
}

