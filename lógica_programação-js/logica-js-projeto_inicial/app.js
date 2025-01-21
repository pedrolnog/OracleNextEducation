alert('Bem vindo(a) ao jogo do número secreto');

let numeroSecreto = 32;
let numeroEscolhido = 0;

while (numeroEscolhido != numeroSecreto) {
    let numeroEscolhido = prompt('Escolha um número entre 1 e 100');

    if (numeroSecreto == numeroEscolhido) {
        console.log("Acertou!!");
        break;
    } else if (numeroSecreto > numeroEscolhido) {
        alert("O número secreto é maior.");
    } else if (numeroSecreto < numeroEscolhido) {
        alert("O número secreto é menor que o escolhido");
    }
}