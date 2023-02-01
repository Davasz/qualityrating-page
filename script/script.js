let b1 = document.getElementById('1')
let b2 = document.getElementById('2')
let b3 = document.getElementById('3')
let b4 = document.getElementById('4')
let b5 = document.getElementById('5')
var chosen = ""
var res = document.getElementById('p')

function click1() {
    b1.style.backgroundColor = "hsl(25, 97%, 53%)"
    b2.style.backgroundColor = ""
    b3.style.backgroundColor = ""
    b4.style.backgroundColor = ""
    b5.style.backgroundColor = ""
    chosen = "1"
}
function click2() {
    b1.style.backgroundColor = ""
    b2.style.backgroundColor = "hsl(25, 97%, 53%)"
    b3.style.backgroundColor = ""
    b4.style.backgroundColor = ""
    b5.style.backgroundColor = ""
    chosen = "2"
}
function click3() {
    b1.style.backgroundColor = ""
    b2.style.backgroundColor = ""
    b3.style.backgroundColor = "hsl(25, 97%, 53%)"
    b4.style.backgroundColor = ""
    b5.style.backgroundColor = ""
    chosen = "3"
}
function click4() {
    b1.style.backgroundColor = ""
    b2.style.backgroundColor = ""
    b3.style.backgroundColor = ""
    b4.style.backgroundColor = "hsl(25, 97%, 53%)"
    b5.style.backgroundColor = ""
    chosen = "4"
    console.log(chosen)
}
function click5() {
    b1.style.backgroundColor = ""
    b2.style.backgroundColor = ""
    b3.style.backgroundColor = ""
    b4.style.backgroundColor = ""
    b5.style.backgroundColor = "hsl(25, 97%, 53%)"
    chosen = "5"
    console.log(chosen)
}

function sub() {
    
    if (chosen == null) {
        alert("Escolha uma opção antes de enviar")
    } else {
        window.location.href = "thanks.html"
        localStorage.setItem('chosen', `${chosen}`)
    }
}

chosen = localStorage.getItem("chosen");
var res = document.getElementById('p')
res.innerHTML = `You selected ${chosen} out of 5`
localStorage.clear()






