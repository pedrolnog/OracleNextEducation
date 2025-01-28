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


    /* Checa se o número anterior existe na lista.
    while (numeroSecreto == historicoNumeros[historicoNumeros.length - 1]) {
        numeroSecreto = gerarNumeroAleatorio(10);
        console.log(numeroSecreto);
        console.log('Número rolado');
    }

    historicoNumeros.push(numeroEscolhido); // Adiciona o número secreto ao histórico.
    */
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
    let numeroEscolhido = parseInt(Math.random() * max + 1); // Gera e retorna número entre 1 e max. 
    
    historicoNumeros.length >= 5 ? historicoNumeros.shift() : NaN; // Checa se o histórico tem mais que 5 itens e apaga o mais antigo caso sim.

    // Não permite que um número gerado seja igual a um dos últimos 5 do histórico.
    if (historicoNumeros.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(10);
    } else {
        historicoNumeros.push(numeroEscolhido); // Adiciona o número secreto ao histórico.
        console.log(historicoNumeros); // Mostra no console o histórico.
        return numeroEscolhido;
    }
}

let historicoNumeros = [];
let tentativas = 0;

iniciarJogo();