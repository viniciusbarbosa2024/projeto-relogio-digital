const dezenaHoras = document.getElementsByClassName('relogio')[0]
const unidadeHoras = document.getElementsByClassName('relogio')[1]
const dezenaMinutos = document.getElementsByClassName('relogio')[2]
const unidadeMinutos = document.getElementsByClassName('relogio')[3]
const dezenaSegundos = document.getElementsByClassName('relogio')[4]
const unidadeSegundos = document.getElementsByClassName('relogio')[5]

function relogio() {
    let segundos = new Date().getSeconds()
    
    dezenaSegundos.innerHTML = Math.trunc(segundos/10)
}

relogio()

