function clicarConsole() {
    console.log("O botão foi clicado.");
}

function clicarAlerta() {
    alert('Eu amo JS');
}

function clicarPrompt() {
    let cidade = prompt("Diga uma cidade do Brasil.");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function clicarSoma() {
    let numero1 = prompt("Insira um número:");
    let numero2 = prompt("Insira outro número:");
    alert(`Resultado da soma: ${parseInt(numero1) + parseInt(numero2)}`);
}

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';