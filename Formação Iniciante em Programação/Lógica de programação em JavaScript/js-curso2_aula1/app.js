

// Wrapper para texto na tela.
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function iniciarJogo() {
    limparCampo();

    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');  

    document.getElementById('reiniciar').setAttribute('disabled', true);

    tentativas = 0;    
    numeroSecreto = gerarNumeroAleatorio(10);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto); // Booleano.
    tentativas++;

    let palavraTentativa = tentativas == 1 ? 'tentativa' :  'tentativas';

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p', `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Ativando o botão (deletando o atributo disabled).
    } else if (chute < numeroSecreto) {
        exibirTexto('p', `O número secreto é maior que ${chute}.`);
        limparCampo();
    } else {
        exibirTexto('p', `O número secreto é menor que ${chute}.`);
        limparCampo();
    }

}

function gerarNumeroAleatorio(max) {
    return parseInt(Math.random() * max + 1); // Gera e retorna número entre 1 e max. 
}

let tentativas = 0;
let numeroSecreto = gerarNumeroAleatorio(10);
