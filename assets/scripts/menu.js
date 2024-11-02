const menu = document.getElementById('menuButton');
const menuOn = document.querySelector('.menuOff');
const fundo = document.querySelector('.fundoMenu');
const fechar = document.getElementById('fechar');


menu.addEventListener('click', () => {
    if (fundo.style.display === 'block') {
        menuOn.removeAttribute('id', 'menuOn');
        fundo.style.display = 'none';
    } else {
        menuOn.setAttribute('id', 'menuOn');
        fundo.style.display = 'block';
    }
    
})

fechar.addEventListener('click', () => {
    menuOn.removeAttribute('id', 'menuOn');
    fundo.style.display = 'none';
})

fundo.addEventListener('click', () => {
    menuOn.removeAttribute('id', 'menuOn');
    fundo.style.display = 'none';
})