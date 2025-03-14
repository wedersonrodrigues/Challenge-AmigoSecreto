let listaAmigos = [];

function limpaCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
    campo.focus();
}

function verificaErro(nomeAmigo) {
    if (isNaN(nomeAmigo) || !nomeAmigo == null) {
        return true;
    } else {
        return false;
    }
}

function atualizaListaAmigos() {
        // Atualiza lista de amigos no HTML
        let linha = document.getElementById('listaAmigos');
        linha.innerHTML = '';

        // Exibe lista de amigos no HTML
        listaAmigos.forEach(nome => {
            let elemento = document.createElement('li');
            elemento.textContent = nome;
            linha.appendChild(elemento);
        });
}

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    
    if (!verificaErro(nomeAmigo)) {
        alert('Erro: insira um nome válido!');
        limpaCampo();
        return;
    }
    
    if (listaAmigos.includes(nomeAmigo)) {
        alert('Nome já existente!');
    } else {
        listaAmigos.push(nomeAmigo);
        atualizaListaAmigos();
    }
    
    limpaCampo();
    console.log(listaAmigos);
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Nenhum amigo adicionado!');
        return;
    }

    if (listaAmigos.length > 1) {

        let indiceArraySorteado = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[indiceArraySorteado];
        
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Amigo Sorteado: ${amigoSorteado}`;
        confetes();

        let linha = document.getElementById('listaAmigos');
        linha.innerHTML = '';
        listaAmigos = [];
        // Desativa os botões "Adicionar" e "Sortear amigo" para não haver alterações do resultado.
        // Obriga refresh da página para novo sorteio.
        //document.querySelectorAll('button').forEach(button => button.disabled = true);

    } else {
        alert('Número insuficiente de participantes!');
    }
}


/*
    Exibe efeito de confetes na tela
    Contribuição do artigo:
    https://www.mco2.com.br/artigos/como-fazer-o-efeito-de-jogar-confetes-com-javascript.html
*/
function confetes() {
    let params = {
        particleCount: 500, // Quantidade de confetes
        spread: 90, // O quanto eles se espalham
        startVelocity: 70, // Velocidade inicial
        origin: { x: 0, y: 0.5 }, // Posição inicial na tela
        angle: 45 // Ângulo em que os confetes serão lançados
    };

// Joga confetes da esquerda pra direita
confetti(params);

// Joga confetes da direita para a esquerda
params.origin.x = 1;
params.angle = 135;
confetti(params);
}