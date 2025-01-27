let numero = 1;

while (numero <= 10) {
    console.log(numero);
    numero++;
}

numero = 10;

while (numero >= 0) {
    console.log(numero);
    numero--;
}

let numero2 = prompt("Insira um número: ");

while (numero2 >= 0) {
    console.log("O número atual é:" + numero2);
    numero2--;
}

numero2 = prompt("Insira um número: ");
numero = 0;

while (numero <= numero2) {
    console.log("O número atual é:" + numero);
    numero++;
}