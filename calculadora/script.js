var resultado = document.querySelector(`#resultado`)
var calculo = document.querySelector(`#calculo`)
var lista = [50,50,50]
var length = lista.length

function adicionar(numero) {
    if (numero == `+` || numero == `-` || numero == `*` || numero == `/`) {
        if (!calculo.innerHTML.endsWith(`+`)&&!calculo.innerHTML.endsWith(`-`)&&!calculo.innerHTML.endsWith(`/`)&& !calculo.innerHTML.endsWith(`*`)) {

            calculo.innerHTML += numero
        }
    }
    else {
        calculo.innerHTML += numero
    }
    
    
}
function clr() {
    calculo.innerHTML = ` `
    resultado.innerHTML = ` `
}
function result() {
    const resultadofinal = eval(calculo.innerHTML)
    if (resultadofinal != undefined) {
        resultado.innerHTML = resultadofinal
        
        if (lista[length] != calculo.innerHTML) {
            lista.push(calculo.innerHTML)
            console.log(lista)
            sessionStorage.setItem(`data`,lista)
        }
    }
    
}
function mns() {
    let chart = calculo.innerHTML.slice(0,-1)
    calculo.innerHTML = chart
}
