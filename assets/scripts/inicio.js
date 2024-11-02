const produtos = document.querySelectorAll('.cont');
const titulo1 = document.querySelector('.menuProdutos .titulo1');
const preco1 = document.querySelector('.menuProdutos .preco1');
const descricao1 = document.querySelector('.menuProdutos .descricao1');
const imagem1 = document.querySelector('.menuProdutos .imagem1');
const menuLigado = document.querySelector('.menuProdutos');
const sair = document.querySelector('#sairProdutos');
const comprar = document.querySelector('.comprar');
const carrinho = document.querySelector('.carrinho');
const contCarrinho = document.querySelector('.contCarrinho');
const itensCarrinho = document.querySelectorAll('#itensCarrinho li');


function atualizarCarrinho () {
    itensCarrinho.innerHTML = '';

    if (produtosCarrinho.length === 0) {
        contCarrinho.style.display = 'block';
    } else {
        contCarrinho.style.display = 'none';
        produtosCarrinho.forEach ((el) => {
            const li = document.createElement('li');
            li.textContent = el;
            itensCarrinho.appendChild(li);
        })
    }
}

produtos.forEach((el) => {
        el.addEventListener('click', () => {
            let titulo2 = el.querySelector('.titulo').textContent.trim();
            let preco2 = el.querySelector('.preco').textContent.trim();
            const imagem2 = el.querySelector('.imagem').getAttribute('src');
            let descricao2 = el.querySelector('.descricao').textContent.trim();

            titulo1.textContent = titulo2;
            preco1.textContent = preco2;
            imagem1.src = imagem2;
            descricao1.textContent = descricao2;
            
            menuLigado.setAttribute('id', 'menuProdutosOn');

            let produto = {}
            produto.nome = titulo2
            produto.valor = preco2

        })
})

sair.addEventListener('click', () => {
    menuLigado.removeAttribute('id', 'menuProdutosOn');
})