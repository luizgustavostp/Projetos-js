let buttonconfig = document.querySelector(`#config`)
let buttonsairconfig = document.querySelector(`#quit_config`)
let displayconfig = document.querySelector(`#config_display`)
const submitconfig = document.getElementById(`submit_config`)
const cor = document.querySelector(`#cor`)
cor.value = `#ffffff`
function mudarBlur() {
    let blur = document.getElementById(`blur`)
    let estilocomputado = getComputedStyle(blur)

    if (estilocomputado.opacity == `0`) {
        blur.style.opacity = `1`
        blur.style.visibility = `visible`
    }
    else {
        blur.style.opacity = `0`
        blur.style.visibility = `hidden`
    }
}
function mudarcores(cor1,cor2,cor3,cor4,cachorro) {
    document.documentElement.style.setProperty(`--cortxtbtn1`,`${cor1}`)
    document.documentElement.style.setProperty(`--corbtnhover`,`${cor2}`)
    document.documentElement.style.setProperty(`--topsvg`,`${cor3}`)
    document.documentElement.style.setProperty(`--corsubmit`,`${cor4}`)
    let link = document.querySelector(`#favicon`)
    link.setAttribute(`href`,`src/images/logos/logo-${cachorro}.png`)
    console.log(link)
}
function carregarTema() {
        let lscores = JSON.parse(localStorage.getItem(`cor`))
        if (lscores != null) {
        mudarcores(lscores[0],lscores[1],lscores[2],lscores[3],lscores[4])
        applyuser()
}
}
function abrirefechar(button,display,button2) {
    console.log(display)
    if (button2 == undefined) {
        button.addEventListener(`click`, () => {
            let style = getComputedStyle(display)
            if (style.display == `none`) {
                display.style.display = `block`
                mudarBlur()
            }
            else {
                display.style.display = `none`
                mudarBlur()
            }
        })
    }
    else {
        button.addEventListener(`click`, () => {
            display.style.display = `block`
            mudarBlur()
        })
        button2.addEventListener(`click` ,() => {
            display.style.display = `none`
            mudarBlur()
        })
    }
}
abrirefechar(buttonconfig,displayconfig,buttonsairconfig)
function carregar() {
    lista[select].tarefas.forEach(element => {
        if (element != null) {
            let novatarefa = document.createElement(`li`)
            novatarefa.classList.add(`tarefa`)
            let divspan = document.createElement(`span`)
            let inho = document.createElement(`i`)
            let paragrafo = document.createElement(`p`)
            paragrafo.setAttribute(`class`,`paragraph`)
            paragrafo.innerHTML = element.nome
            inho.setAttribute(`class`,`fa-regular fa-circle`)
            divspan.appendChild(inho)
            divspan.appendChild(paragrafo)
            novatarefa.appendChild(divspan)
            let butao = document.createElement(`button`)
            butao.setAttribute(`class`,`tlgdne`)
            butao.innerHTML = `X`
            novatarefa.appendChild(butao)
            console.log(divspan)
            document.querySelector(`#lista`).appendChild(novatarefa)
        }
    });
}


function applyuser() {
        let userinput = document.querySelector(`#user`)
        let username = document.querySelector(`#username`)
        let nome = localStorage.getItem(`nome`)
        username.innerHTML = `${nome}´S`
        userinput.value = nome
}
function arrastarDiv(ELEMENTO) {
    let is_draging = null
    ELEMENTO.addEventListener(`mousedown`,() => {
    is_draging = true

    })
    ELEMENTO.addEventListener(`mouseup`,() =>{
    is_draging = false
    })
    ELEMENTO.addEventListener(`mouseout`, e => {
    is_draging = false
    })
    ELEMENTO.addEventListener(`mousemove`, event => {
        if (is_draging) {
            let style = getComputedStyle(ELEMENTO)
            ELEMENTO.style.top = `${parseInt(style.top) + event.movementY}px` 
            ELEMENTO.style.left = `${parseInt(style.left) + event.movementX}px` 
    }})
}
function loading() {
    let loading = document.querySelector(`#loading_div`)
    let style = getComputedStyle(loading)
    if (style.display == `none`) {
        loading.style.display = `flex`
    }
    else {
        loading.style.display = `none`
    }
}
submitconfig.onclick = event => {
    function mudarbg() {
        const cor = document.querySelector(`#cor`)
        document.querySelector(`html`).style.backgroundColor = cor.value
        document.querySelector(`main`).style.backgroundColor = cor.value
    }
    function mudarTema() {
        let select = document.querySelector(`select`)
        let selecionada = select.selectedIndex
        switch(selecionada) {
            case 0:
            mudarcores(`#7cabe8`,`#3c70e8`,`#1D8FF2`,`#224aa7`,`blue`)
            localStorage.setItem(`cor`,JSON.stringify([`#7cabe8`,`#3c70e8`,`#1D8FF2`,`#224aa7`,`blue`]))
            break;
            case 1:
            mudarcores(`#bd6ade`,`#7e389a`,`rgb(153, 29, 242)`,`rgb(92, 18, 145`,`purple`)
            localStorage.setItem(`cor`,JSON.stringify([`#bd6ade`,`#7e389a`,`rgb(153, 29, 242)`,`rgb(92, 18, 145`,`purple`]))
            break;
            case 2:
            mudarcores(`#6ade9c`,`#49ab73`,`#42d883`,`#3d8c5f`,`verde`)
            localStorage.setItem(`cor`,JSON.stringify([`#6ade9c`,`#49ab73`,`#42d883`,`#3d8c5f`,`verde`]))
            break;
            case 3:
            mudarcores(`black`,`black`,`black`,`black`,`black`)
            localStorage.setItem(`cor`,JSON.stringify([`black`,`black`,`black`,`black`,`black`]))
            break;
        }
        

    }

    function atualizarNome() {
        let userlabel = document.querySelector(`#username`)
        let userinput = document.querySelector(`#user`)
        if (userinput.value.length != 0) {
            userlabel.innerHTML = `${userinput.value}´S`
            localStorage.setItem(`nome`,userinput.value)
        }
    }
    displayconfig.style.display = `none`
    atualizarNome()
    mudarTema()
    mudarbg()
    loading()
    setTimeout(() => {
        loading()
        mudarBlur()

    },1000)

}
let adicionartaref = document.querySelector(`#adicionartarefas`)
let buttonadd = document.querySelector(`#adicionar`)
arrastarDiv(adicionartaref)
abrirefechar(buttonadd,adicionartaref)
arrastarDiv(displayconfig)

carregarTema()
function salvardata() {
    let newTarefa = tarefa[Number(localStorage.getItem(`selected`))]
    let obj = document.createElement(`div`)
    obj.innerHTML = newTarefa
    obj.children[0].children[1].innerHTML = document.querySelector(`#lista`).innerHTML 
    tarefa[Number(localStorage.getItem(`selected`))] = obj.innerHTML
    localStorage.setItem(`listas`,JSON.stringify(tarefa))
}
let objetotemp = document.createElement(`div`)
let tarefa = JSON.parse(localStorage.getItem(`listas`))
console.log(tarefa)
objetotemp.innerHTML = tarefa
console.log(objetotemp)
function adicionarTarefaNaLista() {
    let nomedatarefa = document.querySelector(`#inputnometaref`).value
    if (nomedatarefa.length >= 2) {
        let novatarefa = document.createElement(`li`)
        novatarefa.classList.add(`tarefa`)
        let divspan = document.createElement(`span`)
        let inho = document.createElement(`i`)
        let paragrafo = document.createElement(`p`)
        paragrafo.setAttribute(`class`,`paragraph`)
        paragrafo.innerHTML = nomedatarefa
        inho.setAttribute(`class`,`fa-regular fa-circle`)
        divspan.appendChild(inho)
        divspan.appendChild(paragrafo)
        novatarefa.appendChild(divspan)
        let butao = document.createElement(`button`)
        butao.setAttribute(`class`,`tlgdne`)
        butao.innerHTML = `X`
        butao.addEventListener(`click`,event => {
            event.target.offsetParent.remove()
        })
        novatarefa.appendChild(butao)
        console.log(divspan)
        document.querySelector(`#lista`).appendChild(novatarefa)
        eventTarefas()
        salvardata()
    } 
}
function carregarTarefas() {
    let newTarefa = tarefa[Number(localStorage.getItem(`selected`))]
    let obj = document.createElement(`div`)
    obj.innerHTML = newTarefa
    document.querySelector(`#lista`).innerHTML = obj.children[0].children[1].innerHTML

}
let tarefaadd = document.querySelector(`#tarefaadd`)
tarefaadd.addEventListener(`click`,() => {
    adicionarTarefaNaLista()
    adicionartaref.style.display = `none`
    mudarBlur()
})
let buttonsexcluir = document.getElementsByClassName(`tlgdne`)
carregarTarefas()
eventTarefas()
function eventTarefas() {
    let tarefas = document.getElementsByClassName(`paragraph`)
    
    for (let i = 0; i<tarefas.length;i++) {
        tarefas[i].addEventListener(`click`, event => {
            
            console.log(event)
            let elemento = event.target
            let circle = event.target.previousElementSibling
            console.log(circle)
            if (elemento.classList.contains(`active`)) {
                elemento.classList.remove(`active`)
                circle.setAttribute(`class`,`fa-regular fa-circle`)
                
            }
            else {
                elemento.classList.add(`active`)
                
                circle.setAttribute(`class`,`fa-solid fa-circle-check`)
            }
            salvardata()
        })
        
    }
    let buttonsesc = document.getElementsByClassName(`tlgdne`)
   
        console.log(buttonsesc)
        for (let a = 0;a < buttonsesc.length;a++) {
        buttonsesc[a].addEventListener(`click`,event => {
            event.target.offsetParent.remove()
            salvardata()
        })
        }
    }