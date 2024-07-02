const dezenaHoras = document.getElementsByClassName('relogio')[0]
const unidadeHoras = document.getElementsByClassName('relogio')[1]
const dezenaMinutos = document.getElementsByClassName('relogio')[2]
const unidadeMinutos = document.getElementsByClassName('relogio')[3]
const dezenaSegundos = document.getElementsByClassName('relogio')[4]
const unidadeSegundos = document.getElementsByClassName('relogio')[5]

function relogio() {
    let segundos = new Date().getSeconds()
    let minutos = new Date().getMinutes()
    let horas = new Date().getHours()

    if (segundos < 10) {
        dezenaSegundos.innerHTML = 0
        unidadeSegundos.innerHTML = String(segundos).charAt(0)    
    } else {
       dezenaSegundos.innerHTML = String(segundos).charAt(0) //Anotar sobre o charAt()
       unidadeSegundos.innerHTML = String(segundos).charAt(1) 
    }
    
    if (minutos < 10) {
        dezenaMinutos.innerHTML = 0    
        unidadeMinutos.innerHTML = String(minutos).charAt(0)
    } else {
        dezenaMinutos.innerHTML = String(minutos).charAt(0)
        unidadeMinutos.innerHTML = String(minutos).charAt(1)
    }

    if(horas < 10) {
        dezenaHoras.innerHTML = 0
        unidadeHoras.innerHTML = String(horas).charAt(0)
    } else {
        dezenaHoras.innerHTML = String(horas).charAt(0)
        unidadeHoras.innerHTML = String(horas).charAt(1)
    }

    
}

setInterval(relogio,1000) //Anotar sobre setInterval

//relogio()
