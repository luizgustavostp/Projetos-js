var resultado = document.querySelector(`#resultado`)
var calculo = document.querySelector(`#calculo`)
var lista = []
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
        }
    }
    
}
function mns() {
    let chart = calculo.innerHTML.slice(0,-1)
    calculo.innerHTML = chart
}
const btnsair = document.querySelector(`#button-sair`)
const calculos = document.querySelector(`#calculos`)
var listadecalculos = document.querySelector(`#listadecalculos`)
calculos.setAttribute(`class`,`actived`)
function verifybox() {
    if (calculos.hasAttribute(`class`,`actived`)) {
        calculos.removeAttribute(`class`,`actived`)
        lista.forEach(element => {
            let elemento = document.createElement(`p`)
            elemento.classList.add(`itemcalculo`)
            elemento.innerHTML = element
            listadecalculos.appendChild(elemento)
        });
        
    }
    else {
        calculos.setAttribute(`class`,`actived`)
        listadecalculos.innerHTML = ` `
    }
}
btnsair.onclick = verifybox
