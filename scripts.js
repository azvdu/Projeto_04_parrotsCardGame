let imagens = [
    "bobrossparrot.gif",
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "fiestaparrot.gif",
    "tripletsparrot.gif",
    "tripletsparrot.gif",
    "revertitparrot.gif",
    "revertitparrot.gif",
    "metalparrot.gif",
    "metalparrot.gif",
    "unicornparrot.gif",
    "unicornparrot.gif"]

// imagens.sort(embaralhar)
// function embaralhar () {
//     return Math.random() - 0.5;
// }
// let cartas = []

function colocarCartas () {
    const numeroDeCartas = prompt("Com quantas cartas você quer jogar?")
    if (numeroDeCartas % 2 == 0 && numeroDeCartas >= 4 && numeroDeCartas <= 14) {
        let cartas = document.querySelector(".jogo")
        for (let i = 0; i < numeroDeCartas; i++){
            cartas.innerHTML += `
            <div class="carta" onclick="virarCarta(this)">
                <img src="Imagens/front.png">
                <img class="escondido" src="Imagens/${imagens[i]}">
            </div>
            `
        }

    } else {
        colocarCartas ()
    }
} colocarCartas()

let par = []

function virarCarta (carta) {
    let frente = carta.children[0]
    frente.classList.add("escondido")
    let verso = carta.children[1]
    verso.classList.remove("escondido")
    par.push(verso.src)

    console.log(par);
    if (par[0] == par[1] && par.length == 2 ){
        console.log("acertou papai")
        par = []
    }
    else if (par.length == 2) {
        console.log("errou meu fi")
        par = []
        desvirarCarta()
    }
}
function desvirarCarta () {
    let frente = carta.children[0]
    frente.classList.remove("escondido")
    let verso = carta.children[1]
    verso.classList.add("escondido")
    setTimeout(desvirarCarta, 1000)
}