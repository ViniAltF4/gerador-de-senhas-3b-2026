// Seleção de elementos do DOM
const campoSenha = document.querySelector('#campo-senha');
const tamanhoSenhaTexto = document.querySelector('#tamanho-senha');
const btnDiminuir = document.querySelector('#diminuir');
const btnAumentar = document.querySelector('#aumentar');
const checkboxes = document.querySelectorAll('.checkbox');
const indicadorForca = document.querySelector('#indicador-forca');
const textoEntropia = document.querySelector('#texto-entropia');

// Conjuntos de caracteres base
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';

let tamanhoSenha = 12;

// Funções para alterar o tamanho da senha
btnDiminuir.addEventListener('click', () => {
    if (tamanhoSenha > 4) {
        tamanhoSenha--;
        tamanhoSenhaTexto.textContent = tamanhoSenha;
        gerarSenha();
    }
});

btnAumentar.addEventListener('click', () => {
    if (tamanhoSenha < 30) {
        tamanhoSenha++;
        tamanhoSenhaTexto.textContent = tamanhoSenha;
        gerarSenha();
    }
});

// Atualiza a senha ao marcar/desmarcar qualquer opção
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', gerarSenha);
});

// Função principal de geração
function gerarSenha() {
    let alfabeto = '';
    let tamanhoAlfabeto = 0;

    if (checkboxes[0].checked) {
        alfabeto += letrasMaiusculas;
        tamanhoAlfabeto += 26;
    }
    if (checkboxes[1].checked) {
        alfabeto += letrasMinusculas;
        tamanhoAlfabeto += 26;
    }
    if (checkboxes[2].checked) {
        alfabeto += numeros;
        tamanhoAlfabeto += 10;
    }
    if (checkboxes[3].checked) {
        alfabeto += simbolos;
        tamanhoAlfabeto += simbolos.length;
    }

    // Se nenhuma opção estiver marcada, limpa o campo
    if (alfabeto === '') {
        campoSenha.value = '';
        atualizarForca(0, 0);
        return;
    }

    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        const indiceAleatorio = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[indiceAleatorio];
    }

    campoSenha.value = senha;
    calcularEntropia(tamanhoAlfabeto);
}

// Cálculo matemático da Força da Senha (Entropia em bits: E = L * log2(N))
function calcularEntropia(tamanhoAlfabeto) {
    if (tamanhoAlfabeto === 0) return;

    const entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    atualizarForca(entropia);
}

// Atualização visual da barra de força
function atualizarForca(entropia) {
    textoEntropia.textContent = `Entropia: ${Math.floor(entropia)} bits`;

    // Reset de classes
    indicadorForca.className = 'forca';

    if (entropia < 35) {
        indicadorForca.classList.add('fraca');
        indicadorForca.style.width = '25%';
    } else if (entropia >= 35 && entropia < 60) {
        indicadorForca.classList.add('media');
        indicadorForca.style.width = '60%';
    } else {
        indicadorForca.classList.add('forte');
        indicadorForca.style.width = '100%';
    }
}

// Gera uma senha inicial ao carregar a página
gerarSenha();