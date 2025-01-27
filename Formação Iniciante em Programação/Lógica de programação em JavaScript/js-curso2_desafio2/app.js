function olaMundo() {
    console.log("Olá, mundo!");
}

function olaNome(nome) {
    console.log(`Olá, ${nome}!`);
}

function dobrarValor(valor) {
    return valor * 2;
}

function mediaValor(valor1, valor2, valor3) {
    return (parseInt(valor1) + parseInt(valor2) + parseInt(valor3)) / 3;
}

function maiorValor(valor1, valor2) {
    return (valor1 > valor2 ? valor1 : valor2);
}

function valorQuadrado(valor) {
    return valor * valor;
}

olaNome(prompt("Insira seu nome"));

console.log(dobrarValor(prompt("Insira um número")));

console.log(mediaValor(prompt("Insira o primeiro valor"), prompt("Insira o segundo valor"), prompt("Insira o terceiro valor")));

console.log(maiorValor(prompt("Insira o primeiro valor"), prompt("Insira o segundo valor")));

console.log(valorQuadrado(prompt("Insira um número")));