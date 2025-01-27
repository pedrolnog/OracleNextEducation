alert('Bem vindo(a) ao jogo do número secreto');

let numeroMax = 100;
let numeroSecreto = parseInt(Math.random() * max + 1);
let tentativas = 1;
let numeroEscolhido = 0;

console.log("Valor do número secreto: ", numeroSecreto);

while (numeroEscolhido != numeroSecreto) {
    let numeroEscolhido = prompt(`Escolha um número entre 1 e ${max}`);
    console.log("Valor do chute: ", numeroEscolhido);

    if (numeroSecreto == numeroEscolhido) {
        break;
    } else if (numeroSecreto > numeroEscolhido) {
        alert("O número secreto é maior que o escolhido.");
    } else if (numeroSecreto < numeroEscolhido) {
        alert("O número secreto é menor que o escolhido.");
    } else if (numeroEscolhido == 404) {
        break;
    }

    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativa}`); // String formatada. Preciso ver sobre "+" e "->" em concatenação.