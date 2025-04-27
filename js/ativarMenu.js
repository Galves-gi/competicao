function ativarMenu() {
    /* declaração da variaveis */
    const menu = document.querySelector('.menu');
    const icon = document.getElementById('icon');
    /* insira a class ativarMenu no ul do html */
    menu.classList.toggle('ativarMenu');
    /* condição para realizar a troca dos icones */
    if (icon.classList.contains('bi-list')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x');
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
    }
}