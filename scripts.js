function colocarCartas () {
    const numeroDeCartas = prompt("Com quantas cartas você quer jogar?")
    if (numeroDeCartas % 2 == 0 && numeroDeCartas >= 4 && numeroDeCartas <= 14) {
        let cartas = document.querySelector(".jogo")
        for (let i = 0; i < numeroDeCartas; i++){
            cartas.innerHTML += `
            <div class="carta">
                <img src="Imagens/front.png">
            </div>
            `
        }

    } else {
        colocarCartas ()
    }
} colocarCartas()