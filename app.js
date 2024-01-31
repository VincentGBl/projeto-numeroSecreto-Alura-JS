let listadeNumerosEscolhidos = [];
let numeroLimite = 10;
let contador = 0;
let numeroSecreto = gerarNumeroAleatório();

criaçãoTextos('h1', 'jogo do numero secreto');

criaçãoTextos('p', 'chute um número entre 1 e 10');

function criaçãoTextos(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial(){
    criaçãoTextos(`h1`, `Jogo do número secreto`);
    criaçãoTextos(`p`, `Escolha um número entre 1 e 10`);
}

function verificarChute() {
    contador += 1;
    let chute = document.querySelector('input').value
    if(numeroSecreto == chute) {
        criaçãoTextos('h1', 'Parabéns,você acertou!!!');
        let palavraTentativa = contador > 1 ? 'tentativas' : 'tentativa';
        criaçãoTextos('p', `você descobriu o número secreto com ${contador} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        limparCampo();
        if (chute > numeroSecreto) {
            criaçãoTextos('p', `o número secreto é menor que ${chute}`);
        } else {
            criaçãoTextos('p', `o número secreto é maior que ${chute}`);
        }
    }
}

function gerarNumeroAleatório() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if (listadeNumerosEscolhidos.length == numeroLimite) {
        listadeNumerosEscolhidos = [];
    }
    if (listadeNumerosEscolhidos.includes(numeroEscolhido)){
        return gerarNumeroAleatório();
    } else{
        listadeNumerosEscolhidos.push(numeroEscolhido);
        console.log(listadeNumerosEscolhidos);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    console.log('clicou porra');
    numeroSecreto = gerarNumeroAleatório();
    contador = 0;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}