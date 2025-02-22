let pontos = 0;
let tempoRestante = 30;
let intervaloTempo;
let intervaloBotao;

const botao = document.getElementById('botao');
const pontuacao = document.getElementById('pontuacao');
const tempoElement = document.getElementById('tempo');
const resultado = document.getElementById('resultado');
const iniciarBotao = document.getElementById('iniciarBotao');
const observacao = document.getElementById('observacao'); 

function moverBotao() {
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    const posX = Math.random() * (larguraTela - botao.offsetWidth);
    const posY = Math.random() * (alturaTela - botao.offsetHeight);

    botao.style.position = 'absolute';
    botao.style.left = `${posX}px`;
    botao.style.top = `${posY}px`;
}

function atualizarTempo() {
    tempoRestante--;
    tempoElement.innerHTML = `Tempo: ${tempoRestante}s`;

    if (tempoRestante <= 0) {
        clearInterval(intervaloTempo);
        clearInterval(intervaloBotao);
        mostrarResultado();
    }
}

function clicar() {
    pontos++;
    pontuacao.innerHTML = `Pontuação: ${pontos}`;
    moverBotao();
}

function mostrarResultado() {
    resultado.innerHTML = `Fim de jogo! Sua pontuação final é: ${pontos}`;
    resultado.style.display = 'block';
    botao.style.display = 'none';
}

function iniciarJogo() {
    iniciarBotao.style.display = 'none'; 
    botao.style.display = 'inline-block'; 
    observacao.style.opacity = 0; 
    intervaloTempo = setInterval(atualizarTempo, 1000);
    intervaloBotao = setInterval(moverBotao, 500);

    moverBotao();
}
