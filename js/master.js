const first = document.getElementById('first')
const last = document.getElementById('last')
let num1 = 00
let num2 = 00
let timer
function starttimer() {
    num2++
    if (num2 <= 9) {
        last.innerHTML = "0" + num2
    }
    if (num2 > 9) {
        last.innerHTML = num2
    }
    if (num2 > 60) {
        num1++
        first.innerHTML = "0" + num1
        num2 = 0
        last.innerHTML = "0" + 0
    }
    if (num1 > 9) {
        first.innerHTML = num1
    }
    clearInterval(timer)
    timer = setInterval(starttimer, 15)
}
function stoptimer() {
    clearInterval(timer)
}
function resettimer() {
    clearInterval(timer)
    num1 = "00"
    num2 = "00"
    first.innerHTML= num1
    last.innerHTML= num1
}