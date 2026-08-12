const   numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha=12;

numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelectorAll('parametro-senha__botao');

botoes[0].oneclick= diminuiTamanho;
function diminuiTamanho() {

    if (tamanhoSenha>1) {
            tamanhoSenha=tamanhoSenha-1;
    }


    numeroSenha.textContent=tamanhoSenha;
}

botoes[1].oneclick= aumentaTamanho;
function aumentaTamanho() {

    if (tamanhoSenha<20) {
            tamanhoSenha=tamanhoSenha+1;
    }


    tamanhoSenha=tamanhoSenha+1;
    numeroSenha.textContent=tamanhoSenha;

}