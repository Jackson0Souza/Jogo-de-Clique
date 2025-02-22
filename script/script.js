let pontos = 0;
let tempoRestante = 30;
let intervaloTempo;
let intervaloBotao;

const botao = document.getElementById('botao');
const pontuacao = document.getElementById('pontuacao');
const tempoElement = document.getElementById('tempo');
const resultado = document.getElementById('resultado');
const iniciarBotao = document.getElementById('iniciarBotao'); // Referência para o botão de iniciar
const observacao = document.getElementById('observacao'); // Referência para a observação

// Função para mover o botão aleatoriamente
function moverBotao() {
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    const posX = Math.random() * (larguraTela - botao.offsetWidth);
    const posY = Math.random() * (alturaTela - botao.offsetHeight);

    botao.style.position = 'absolute';
    botao.style.left = `${posX}px`;
    botao.style.top = `${posY}px`;
}

// Função para atualizar o tempo
function atualizarTempo() {
    tempoRestante--;
    tempoElement.innerHTML = `Tempo: ${tempoRestante}s`;

    if (tempoRestante <= 0) {
        clearInterval(intervaloTempo);
        clearInterval(intervaloBotao);
        mostrarResultado();
    }
}

// Função que é chamada quando o botão é clicado
function clicar() {
    pontos++;
    pontuacao.innerHTML = `Pontuação: ${pontos}`;
    moverBotao();
}

// Função para exibir o resultado final
function mostrarResultado() {
    resultado.innerHTML = `Fim de jogo! Sua pontuação final é: ${pontos}`;
    resultado.style.display = 'block';
    botao.style.display = 'none'; // Esconde o botão após o fim do jogo
}

// Função para iniciar o jogo
function iniciarJogo() {
    iniciarBotao.style.display = 'none'; // Esconde o botão de iniciar
    botao.style.display = 'inline-block'; // Mostra o botão de clicar
    observacao.style.opacity = 0; // Faz a observação desaparecer suavemente

    intervaloTempo = setInterval(atualizarTempo, 1000);
    intervaloBotao = setInterval(moverBotao, 500);

    // Inicializa o botão na tela
    moverBotao();
}
