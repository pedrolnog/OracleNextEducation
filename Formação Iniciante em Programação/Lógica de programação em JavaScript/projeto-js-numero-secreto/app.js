alert('Bem vindo(a) ao jogo do número secreto');

let numeroSecreto = 32;
let tentativas = 1;
let numeroEscolhido = 0;

console.log("Valor do número secreto: ", numeroSecreto);

while (numeroEscolhido != numeroSecreto) {
    let numeroEscolhido = prompt('Escolha um número entre 1 e 100');
    console.log("Valor do chute: ", numeroEscolhido);

    if (numeroSecreto == numeroEscolhido) {
        break;
    } else if (numeroSecreto > numeroEscolhido) {
        alert("O número secreto é maior que o escolhido.");
    } else if (numeroSecreto < numeroEscolhido) {
        alert("O número secreto é menor que o escolhido.");
    }

    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativa}`); // String formatada. Preciso ver sobre "+" e "->" em concatenação.