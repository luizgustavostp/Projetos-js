// VARIAVEIS ESSENCIAIS, BUTTONS E DISPLAYS!
function menuopen(elemento) { // função para tornar o display visivel, true ou false
    let element = elemento
    let style = getComputedStyle(element)
    if (style.display == `none`) {
        elemento.style.display = `block`
        mudarBlur()
    }
    else {
        elemento.style.display = `none`
        mudarBlur()
    }
}

function criarElemento(div,classe,value,innerh) {
    let newDocumeto = document.createElement(div)
    newDocumeto.setAttribute(classe,value)
    if (innerh != undefined) {
        newDocumeto.innerHTML = innerh
        return newDocumeto
    }
    return newDocumeto
}
let listas = JSON.parse(localStorage.getItem(`listas`)) // lista carregada do localstorage!

let displayaddlist = document.querySelector(`#addlist`)// dispaly para criação de list!
let submitlista = document.querySelector(`#submitlista`) //button para criar a lista e dar submit!
// FUNÇÕES ESSENCIAIS!

function carregarListas() {
    if (listas != null) {
        for (let i = 0;i< listas.length;i++) {
        lista.innerHTML += listas[i]
    } 
    }
}
buttondeletetxt.addEventListener(`click`,event => {
    document.querySelector(`#usernome`).value = ``
})
submitusername.addEventListener(`click`,event => {
    let input = document.querySelector(`#usernome`)

    if (input.value.length >= 20) {    
        alert(`excedeu o limite de letras`)
    }
    else if (input.value.length != 0) {
        localStorage.setItem(`nome`,input.value)
        let displayuser = event.target.offsetParent
        displayuser.style.display = `none`
        displayuser.style.visibility = `hidden`
        mudarBlur()
        carregar()
    }
})
function acorda() {
    let ls = []
    for (let i =0; i<lista.children.length;i++) {
        ls.push(lista.children[i].outerHTML)
    }
    localStorage.setItem(`listas`,JSON.stringify(ls))
}
submitlista.addEventListener(`click`,() => {
    let listaname = document.querySelector(`#listaname`).value
    let emojisinput = document.querySelector(`#emojis`)
    let categoriainput = document.querySelector(`#tipodelista`)
    let emojis = emojisinput.options[emojisinput.selectedIndex]
    if (listaname.length > 2) {
        let newElemento = criarElemento(`div`,`class`,`lista`)
        let thisICON = criarElemento(`span`,`class`,`icon`)
        let ic = criarElemento(`i`,`class`,`fa-solid fa-pencil edit`)
        thisICON.innerHTML = emojis.innerHTML
        console.log(ic)
        console.log(thisICON)
        thisICON.appendChild(ic)
        newElemento.appendChild(thisICON)
        let para = criarElemento(`p`,`class`,`name`)
        para.innerHTML = listaname
        let categoria = criarElemento(`p`,`class`,`categoria`)
        categoria.innerHTML = categoriainput.options[categoriainput.selectedIndex].innerHTML
        let button = criarElemento(`button`,`class`,`excluir`)
        button.innerHTML = `X`
        button.addEventListener(`click`,event => {
            let parent = event.target.offsetParent
            lista.removeChild(parent)
            acorda()
        })
        let tarefas = criarElemento(`section`,`class`,`tarefas`)
        newElemento.appendChild(tarefas)
        newElemento.appendChild(categoria)
        newElemento.appendChild(para)
        newElemento.appendChild(button)
        console.log(newElemento)
        lista.appendChild(newElemento)
        console.log(lista.children)
        acorda()
        carregarListaSelect()
        }
    else {
        alert(`Tente novamente com mais de duas letras!`)
    }
    menuopen(addlist)
    mudarBlur()
})
function adicionarEvents() {
    let excluir = document.getElementsByClassName(`excluir`)
    console.log(excluir)
    for (let i = 0; i<excluir.length;i++) {
        excluir[i].addEventListener(`click`,event => {
        let parent = event.target.offsetParent
        lista.removeChild(parent)
        acorda()
    })
    }
}
function carregarListaSelect() {
    let listasss = document.getElementsByClassName(`lista`)
    console.log(listasss)
    for (let i = 0; i<listasss.length;i++) {
        listasss[i].addEventListener(`click`,event => {
            localStorage.setItem(`selected`,i)
            mudarBlur()
            loading()
            setTimeout(() => {
                window.location.href = `otherpage.html`
            },1000)
    })
    }
    
}
arrastarDiv(addlist)
carregarListas()
adicionarEvents()
carregarListaSelect()