
async function call() {
    var query = document.getElementById("query").value
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=26f6a0a03bbf4d499f700617251105&q=${query}&aqi=no`).then(resposta => resposta.json()).catch(erro => {
        console.log(erro)
        alert(`algo errado, verifique a caixa de pesquisa`)
    })
    const display = document.getElementById("display")
    const humidade = document.getElementById("Humidade")
    const temperatura = document.getElementById("temperatura")
    const sensaçãotermica = document.getElementById("sensaçãotermica")
    display.style.animationPlayState = "running"
    console.log(promise)
    humidade.innerHTML = promise.current.humidity
    temperatura.innerHTML = `${promise.current.temp_c} C`
    sensaçãotermica.innerHTML = `Sensação termica : ${promise.current.feelslike_c} C`
    const clima = document.getElementById("clima")
    clima.setAttribute("src",promise.current.condition.icon)
    const cidade = document.getElementById("cidade")
    cidade.innerHTML = promise.location.name
}