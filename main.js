const form = document.getElementById('form-contatos');
const imgContato = '<img src="./images/user.png" alt="Contato" />';
const imgMovel = '<img src="./images/handphone.png" alt="Móvel" />';
const imgFixo = '<img src="./images/old-phone.png" alt="Fixo" />';
const contatos = [];
const telefones = [];

let digito = '';
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (telefones.includes(inputTelefoneContato.value)) {
        alert(`O telefone ${inputTelefoneContato.value} já está cadastrado na tabela`);
    } else {
        contatos.push(inputNomeContato.value);
        telefones.push(inputTelefoneContato.value);

        let linha = '<tr>';

        linha += `<td><img src="./images/user.png" alt="Contato" /> ${inputNomeContato.value}</td>`;
        digito = String(inputTelefoneContato.value);
        linha += `<td>${digito.charAt(0) > 6 ? imgMovel : imgFixo}  ${inputTelefoneContato.value}</td>`;
        linha += `</tr>`;
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};