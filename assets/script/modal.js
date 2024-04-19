let modal = document.querySelector('#modal');

let btnAbrirModal = document.querySelectorAll('.btn');
let btnFecharModal = document.querySelector('#closeModal');



function minhaFuncao (idDoElemento) {
    console.log(idDoElemento);
}

for (i=0; i < btnAbrirModal.length; i++){
    var botao = btnAbrirModal[i];
    botao.addEventListener('click' , function() {
        var idDoElemento = this.id;
        minhaFuncao(idDoElemento);
    });
}