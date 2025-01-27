console.log('Bem vindo(a)');

let nome = prompt("Qual seu nome?");

console.log(`Olá, ${nome}!`);

alert(`Olá, ${nome}!`);

let linguagem = prompt("Qual sua linguagem de programação favorita?");

console.log(linguagem);

let valor1 = 5;
let valor2 = 10;

let resultado = valor1 + valor2;

console.log(`O resultado da subtração entre ${valor1} e ${valor2} é igual a ${resultado}`);

let idade = prompt("Insira sua idade.");

idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade.");

let numero = prompt("Insira um número");

if (numero == 0) { 
    console.log("Número é 0.");
} else if (numero > 0) {
    console.log("Número positivo.");
} else {
    console.log("Número negativo");
}

numero = 1;

while (numero <= 10) {
    console.log(numero);
    numero++;
}

let nota = parseInt(Math.random() * 10 + 1);
nota >= 7 ? console.log("Aprovado") : console.log("Reprovado");

console.log(Math.random());
console.log(parseInt(Math.random() * 10 + 1));
console.log(parseInt(Math.random() * 1000 + 1));
