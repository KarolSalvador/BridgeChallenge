function jogar() {
    const btnJogar = document.getElementById("btnJogar");
    btnJogar.disabled = true;
    let jogarNovamente = true;

    let venceu = true;

    for (let rodada = 1; rodada <= 3; rodada++) {
        let escolhaJogador = prompt("Nível " + rodada + ", escolha em qual plataforma deseja avançar(1, 2 ou 3):");
        //se clicar em cancelar o jogo será interrompido
        if (escolhaJogador === null) {
            alert("Jogo cancelado.");
            return;
        }

        //garantir que escolha um número válido
        while (escolhaJogador !== "1" && escolhaJogador !== "2" && escolhaJogador !== "3") {
            alert("Escolha inválida! Digite:1, 2 ou 3");
            escolhaJogador = prompt("Nível " + rodada + ", escolha em qual plataforma deseja avançar(1, 2 ou 3):");

            if (escolhaJogador === null) {
                alert("Jogo cancelado.");
                return;
            }
        }

        let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

        if (escolhaJogador == pisoQuebrado) {
            alert("O vidro quebrou, você PERDEU");
            venceu = false;
            break;

        } else {
            alert("Ufa, o vidro não quebrou. Piso frágil era o: " + pisoQuebrado);
        }
    }

    if (venceu == true) {
        alert("Parabéns você passou por todos os pisos e GANHOU o jogo.")
    }

    jogarNovamente = confirm("Deseja jogar novamente?");
    if (jogarNovamente) {
        jogar();
    }

    btnJogar.disabled = false;

}