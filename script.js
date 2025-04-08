const aniversario = new Date("2025-04-25T00:00:00");

// Função para adicionar zero à esquerda
function zeroEsquerda(num) {
    return num.toString().padStart(2, '0');
}

function atualizarData() {
    const agora = new Date();
    const reduzir = aniversario - agora;
    const time = document.getElementById('time');
    const btn = document.getElementById('btn');

    if (reduzir <= 0) {
        time.textContent = 'Acesso Liberado';
        btn.style.display = 'flex';
        clearInterval(atualizar);
        return;
    }

    const dias = Math.floor(reduzir / (1000 * 60 * 60 * 24));
    const horas = Math.floor((reduzir / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((reduzir / (1000 * 60)) % 60);
    const segundos = Math.floor((reduzir / 1000) % 60);

    time.textContent = `${zeroEsquerda(dias)}d ${zeroEsquerda(horas)}h ${zeroEsquerda(minutos)}m ${zeroEsquerda(segundos)}s`;
}

const atualizar = setInterval(atualizarData, 1000);
atualizarData();


