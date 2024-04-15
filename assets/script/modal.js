//CAPTURAR TODOS OS BOTÕES EM UMA LISTA
//CRIAR O MODAL
//CRIAR CONTEUDO DO MODAL
//INSERIR CONTEÚDO DO MODAL
//CRIAR UMA FUNÇÃO QUE EXIBA O MODAL COM O CONTEUDO REFERENTES AO BOTÃO CLICADO

//cria o modal
let modal = document.createElement('dialog');
modal.classList.add('modal-container')

//cria container do título + descrição
let containerTitleInfo = document.createElement('div');
containerTitleInfo.classList.add('title-info-modal');
let title = document.createElement('h2')
title.textContent = 'Olá mundo!'
let description = document.createElement('p')
description.textContent = 'eu sou um parágrafo!'



//galeria de imagem 
let galeriaImg = document.createElement('div');
galeriaImg.classList.add('galeriaImg');
 

//cria a imagem de destaque
let containerImgDestaque = document.createElement('div');
containerImgDestaque.classList.add('containerImgDestaque');
let imgDestaque = document.createElement('img');
imgDestaque.src = '/assets/img/products/necessaire-gran.jpg'
imgDestaque.alt = 'Aque vai uma descrição do produto, aque vai uma descrição do produto,';
imgDestaque.classList.add('imgDestaqueItem');


//captura o botão de abrir modal
let btnAbrirModal = document.querySelectorAll('#btnAbrirModal');

//cria o botão de fechar modal
let btnFecharModal = document.createElement('button');

//cria o array com os títulos de produtos
let tituloProduto = [
    'carteiraSlim',
    'pastaIbm',
    'portaCartão',
    'estojotri',
    'necessaireCn',
    'bolsaCarteiro',
    'carteiraRR',
    'necessaireGran',
    'necFachini',
    'risqueERabisque',
    'organizadorWish',
    'portaTenis',
    'MochilaAdv',
    'TrashBag',
    'kitHigiene',
    'miniBagPst',
    'termicaMiu',
    'termicaAeTri'
]

//cria os textos dos produtos
let textoProduto = [
    '111111111111111lorem impson, dolor. atbun. safadin, a lorem safadim impson impson, dolor. atbun. safadin, a lorem safadim impson',

    '2222222222222lorem impson, dolor. atbun. safadin, a lorem safadim impson impson, dolor. atbun. safadin, a lorem safadim impson',

    '333333333333333lorem impson, dolor. atbun. safadin, a lorem safadim impson impson, dolor. atbun. safadin, a lorem safadim impson',

    '444444444444444lorem impson, dolor. atbun. safadin, a lorem safadim impson impson, dolor. atbun. safadin, a lorem safadim impson',
]

let botaoteste = document.querySelector('.botaoTeste')
containerTitleInfo.appendChild(title)
containerTitleInfo.appendChild(description) 

function acionarModal (){
    
    modal.appendChild(containerTitleInfo)
    document.body.appendChild(modal)
    modal.show()
}


botaoteste.addEventListener('click' , function () {
    acionarModal()
} )