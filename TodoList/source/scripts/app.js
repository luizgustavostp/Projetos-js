/* configurações de aplicação UI no caso */
//funções obrigatorias
function mudarBlur() { // muda o blur de true para false
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
function mudarcores(cor1,cor2,cor3,cor4,cachorro) { //muda a cor de tema acordo com os argumentos usados
    document.documentElement.style.setProperty(`--cortxtbtn1`,`${cor1}`)
    document.documentElement.style.setProperty(`--corbtnhover`,`${cor2}`)
    document.documentElement.style.setProperty(`--topsvg`,`${cor3}`)
    document.documentElement.style.setProperty(`--corsubmit`,`${cor4}`)
    const link = document.querySelector(`#favicon`)
    link.setAttribute(`href`,`source/images/logos/logo-${cachorro}.png`)
    console.log(link)
}
function arrastarDiv(ELEMENTO) { // função para arrastar qualquer div
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
function abrirefechar(button,display,button2) { // função para abrir e fechar um menu!
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

// variaveis de botões,displays e coisas do tipo
let configbtn = document.getElementById(`config`) //button de entrar na configuração
let quitbutton = document.getElementById(`quit_config`) //button de sair da configuração
const submitconfig = document.getElementById(`submit_config`) // button para aplicar configurações na tela de display de configurações
const displaydoconfig = document.querySelector(`#config_display`) // display das configurações
var btndisplayaddlist = document.querySelector(`#adicionarlista`) // btn para entrar no display de adicionar lista
let quitcriarlista = document.querySelector(`#quitcriarlista`) // button para sair do display de criarlista!

let lista = document.getElementById(`display_listas`) // display das listas do localstorage na tela principal

const submitusername = document.querySelector(`#escolhauserbtn`)// button para submit escolher nome de usuario
let buttondeletetxt = document.querySelector(`#deletartext`) // button para deletar o nome inserido no input
 // EVENT LISTENER DA SELEÇÃO DE USUARIO!
btndisplayaddlist.addEventListener(`click`,event => {
    menuopen(displayaddlist)
})
quitcriarlista.addEventListener(`click`,() => {
    menuopen(displayaddlist)
})
// *************************************
//FUNÇÃO PARA ABRIR O PAINEL DE CONFIG!
abrirefechar(configbtn,displaydoconfig,quitbutton)
// ************************************
// FUNÇÃO PARA APLICAR AS CONFIGURAÇÕES
submitconfig.onclick = event => {
    function mudarbg() { // função para mudar o background de acordo com o input
        const cor = document.querySelector(`#cor`)
        document.querySelector(`html`).style.backgroundColor = cor.value
        document.querySelector(`main`).style.backgroundColor = cor.value
    }
    function mudarTema() { // função que muda o tema de acordo com o input usando a função mudarcores()
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

    function atualizarNome() { // função para atualizar nome a partir do input especifico
        let userlabel = document.querySelector(`#username`)
        let userinput = document.querySelector(`#user`)
        if (userinput.value.length != 0) {
            userlabel.innerHTML = `${userinput.value}´S`
            localStorage.setItem(`nome`,userinput.value)
        }
    }
    
    atualizarNome()
    mudarTema()
    mudarbg()
}

function carregar() { // carregar tudo em geral da pagina
    function carregarTema() {
        let tema = JSON.parse(localStorage.getItem(`cor`))
        if (tema != null) {
            mudarcores(tema[0],tema[1],tema[2],tema[3],tema[4])

        }
    } 
    applyuser()
    carregarTema()
    document.querySelector(`#cor`).value = `#ffffff`
    // funções sendo ativadas
      

}
function applyuser() { // função para aplicar nome de usuário de acordo com o input quando for carregado a pagina
        let userinput = document.querySelector(`#user`)
        let username = document.querySelector(`#username`)
        let nome = localStorage.getItem(`nome`)
        username.innerHTML = `${nome}´S`
        userinput.value = nome
}
function verificarseNome() { // verifica se existe um nome de usuário
        if (localStorage.getItem(`nome`) == null) {
            mudarBlur()
            let display = document.querySelector(`#escolhauser`)
            display.style.display = `flex`
            display.style.visibility = `visible`
        }
        else {
            carregar()
        }
}
function loading() { // função para a execução do painel de loading
    let loading = document.querySelector(`#loading_div`)
    let style = getComputedStyle(loading)
    if (style.display == `none`) {
        loading.style.display = `flex`
    }
    else {
        loading.style.display = `none`
    }
}
verificarseNome()
arrastarDiv(displaydoconfig)  