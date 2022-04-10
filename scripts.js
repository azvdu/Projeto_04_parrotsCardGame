let imagens = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "tripletsparrot.gif",
    "revertitparrot.gif",
    "metalparrot.gif",
    "unicornparrot.gif"]

imagens.sort(embaralhar)
function embaralhar () {
    return Math.random() - 0.5;
}

let cartas = []
let numeroDeCartas = 0
setTimeout(colocarCartas, 100)

function colocarCartas () {
    numeroDeCartas = prompt("Com quantas cartas você quer jogar?")
    if (numeroDeCartas % 2 == 0 && numeroDeCartas >= 4 && numeroDeCartas <= 14) {
        let jogo = document.querySelector(".jogo")
        for (let i = 0; i < (numeroDeCartas/2); i++){
            cartas.push( `
            <div class="carta" onclick="virarCarta(this)">
                <img src="Imagens/front.png">
                <img class="escondido" src="Imagens/${imagens[i]}">
            </div>`)
            cartas.push(`
            <div class="carta" onclick="virarCarta(this)">
                <img src="Imagens/front.png">
                <img class="escondido" src="Imagens/${imagens[i]}">
            </div>`)
            cartas.sort(embaralhar) 
        }
        cartas.sort(embaralhar)

        for (let i = 0; i < cartas.length; i++) {
            jogo.innerHTML += cartas[i]
        }

    } else {
        colocarCartas ()
    }
} //colocarCartas()

let frentes = []
let versos = []
let jogadas = 0
let numeroDeAcertos = 0

function virarCarta (carta) {
    jogadas += 1
    console.log(jogadas)
    let frente = carta.children[0]
    frente.classList.add("escondido")
    let verso = carta.children[1]
    verso.classList.remove("escondido")
    versos.push(verso)
    frentes.push(frente)
    carta.removeAttribute("onclick")

    if(versos.length == 2) {
        if (versos[0].src == versos[1].src){
            versos = []
            frentes = []
            numeroDeAcertos += 1
            console.log("acertou papai", numeroDeAcertos)
            setTimeout(verificarVitoria, 100)
        }
        else {
            console.log("errou meu fi")
            setTimeout(desvirarCarta, 1000)
            
            let carta1 = frentes[0].parentNode;
            carta1.setAttribute("onclick", "virarCarta(this)")
            let carta2 = frentes[1].parentNode;
            carta2.setAttribute("onclick", "virarCarta(this)")

        }
        
    }
}
function desvirarCarta () {
    versos[0].classList.add("escondido")
    versos[1].classList.add("escondido")
    frentes[0].classList.remove("escondido")
    frentes[1].classList.remove("escondido")
    versos = []
    frentes = []
}
function verificarVitoria () {
    console.log(numeroDeAcertos, numeroDeCartas)
    if (numeroDeAcertos == (numeroDeCartas/2)) {
        alert (`Você ganhou em ${jogadas} jogadas!`)
    }
}
