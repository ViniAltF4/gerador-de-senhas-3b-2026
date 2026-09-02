const campoSenha = document.querySelector('#campo-senha');
const tamanhoSenhaTexto = document.querySelector('#tamanho-senha');
const btnDiminuir = document.querySelector('#diminuir');
const btnAumentar = document.querySelector('#aumentar');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let tamanhoSenha = 12;

btnDiminuir.addEventListener('click', diminuirTamanho);
btnAumentar.addEventListener('click', aumentarTamanho);

function diminuirTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
        tamanhoSenhaTexto.textContent = tamanhoSenha;
        gerarSenha();
    }
}

function aumentarTamanho() {
    tamanhoSenha++;
    tamanhoSenhaTexto.textContent = tamanhoSenha;
    gerarSenha();
}

function gerarSenha() {
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        const numeroAleatorio = Math.floor(Math.random() * letrasMaiusculas.length);
        senha += letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}

gerarSenha();