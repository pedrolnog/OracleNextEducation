alert('Bem vindo(a) ao jogo do número secreto');

let numeroSecreto = 32;

console.log("Valor do número secreto:", numeroSecreto);

let numeroEscolhido = 0;

while (numeroEscolhido != numeroSecreto) {
    let numeroEscolhido = prompt('Escolha um número entre 1 e 100');
    console.log("Valor do chute: ", chute);

    if (numeroSecreto == numeroEscolhido) {
        alert(`Acertou o número secreto! ${numeroSecreto}`); // String formatada. Preciso ver sobre "+" e "->" em concatenação.
        break;
    } else if (numeroSecreto > numeroEscolhido) {
        alert("O número secreto é maior que o escolhido.");
    } else if (numeroSecreto < numeroEscolhido) {
        alert("O número secreto é menor que o escolhido.");
    }
}