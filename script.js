const form = document.getElementById('formContatos');
const nomeInput = document.getElementById('nome');
const telefoneInput = document.getElementById('telefone');
const tabelaBody = document.querySelector('table tbody');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = nomeInput.value.trim();
    const telefone = telefoneInput.value.trim();

    if (nome && telefone) {
        const novaLinha = document.createElement('tr');

        const colunaNome = document.createElement('td');
        colunaNome.textContent = nome;

        const colunaTelefone = document.createElement('td');
        colunaTelefone.textContent = telefone;

        novaLinha.appendChild(colunaNome);
        novaLinha.appendChild(colunaTelefone);

        tabelaBody.appendChild(novaLinha);

        // Limpar os campos após adicionar
        nomeInput.value = '';
        telefoneInput.value = '';
        nomeInput.focus(); // foca de novo no campo nome
    }
});
