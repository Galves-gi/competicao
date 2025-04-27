/* declarar uma função a partir do id */
document.getElementById('formulario').onsubmit = function (Event) {
    Event.preventDefault();
    /* declaração das variaveis */
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    Event.preventDefault();
    /* validação se o campo estar vazio */
    if (nome === "" || email === "" || mensagem === "") {
        alert('Campo vázio, preenche corretamente.');
        return false;
    }
    /* validação do campo nome o tamnho e se tem caracteres especiais */
    else if (nome.length < 3 || /[^a-zA-Z\s]/g.test(nome)) {
        alert('Campo nome incorreto, preenche corretamente.');
        return false;
    }
    /* validação do e-mail */
    else if (!regexEmail.test(email)) {
        alert('Campo E-mail incorreto, preenche corretamente.');
        return false;
    }
    /* envia para o php */
    this.submit();
}

