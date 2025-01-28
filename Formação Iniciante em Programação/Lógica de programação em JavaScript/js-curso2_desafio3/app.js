function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

function calcularFatorial(valor) {
    let produto = 1;
    while (valor > 0) {
        produto = produto * valor;
        valor--;
    }
    return produto;
}

function calcularDolarEmReal(valor) {
    return (valor * 4.8);
}

function calcularAreaPerimetro(altura, largura) {
    alert(`Área: ${altura * largura}\nPerímetro: ${altura + largura + altura + largura}`);
}

function calcularAreaPerimetroCircular(raio) {
    alert(`Área: ${(raio * raio) * 3.14}\nPerímetro: ${((3.14 * 2) * raio).toFixed(1)}`);
}

function tabuadaValor(valor) {
    let multiplicador = 1;
    let texto = '';

    while (multiplicador <= 10) {
        texto = texto + `${valor} * ${multiplicador} = ${valor * multiplicador}\n`;
        multiplicador++;
    }
    alert(texto);
}

console.log(calcularIMC(70, 1.60));
console.log(calcularFatorial(5));
console.log(calcularDolarEmReal(5));

calcularAreaPerimetro(5, 10);

calcularAreaPerimetroCircular(5);

tabuadaValor(5);