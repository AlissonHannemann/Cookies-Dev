const produtos = document.querySelectorAll('.cont');
const titulo1 = document.querySelector('.menuProdutos .titulo1');
const preco1 = document.querySelector('.menuProdutos .preco1');
const descricao1 = document.querySelector('.menuProdutos .descricao1');
const imagem1 = document.querySelector('.menuProdutos .imagem1');
const menuLigado = document.querySelector('.menuProdutos');
const sair = document.querySelector('#sairProdutos');
const comprar = document.querySelector('.comprar');
const carrinho = document.querySelector('.carrinho');

produtos.forEach((el) => {
    el.addEventListener('click', () => {
        let titulo = el.querySelector('.titulo').textContent.trim();
        let preco = el.querySelector('.preco').textContent.trim();
        const imagem = el.querySelector('.imagem').getAttribute('src');
        let descricao = el.querySelector('.descricao').textContent.trim();

        titulo1.textContent = titulo;
        preco1.textContent = preco;
        imagem1.src = imagem;
        descricao1.textContent = descricao;
        
        menuLigado.setAttribute('id', 'menuProdutosOn');

    })
})

sair.addEventListener('click', () => {
    menuLigado.removeAttribute('id', 'menuProdutosOn');
})