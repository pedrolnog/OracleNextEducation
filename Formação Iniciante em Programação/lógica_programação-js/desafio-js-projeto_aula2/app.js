let diaDaSemana = prompt("Qual é o dia da semana?");

if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

let numero = prompt("Digite um número qualquer.");

if (numero > 0) {
    alert("O número é positivo.");
} else {
    alert("O número é negativo.");
}

let pontuacao = 32;

if (pontuacao > 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.\nPontuação atual: " + pontuacao);
}

let valorSaldo = 1520;

alert("O saldo é: " + valorSaldo);

let nome = prompt("Insira seu nome.");

alert("Bem vindo(a), " + nome);
