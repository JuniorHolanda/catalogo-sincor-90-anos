let modal = document.querySelector('#modal');

let btnAbrirModal = document.querySelectorAll('.btn');
let btnFecharModal = document.querySelector('#closeModal');

function fecharModal () {
    modal.close();
    modal.classList.remove('modal-style')
}

function abrirModal (idDoElemento) {
    modal.classList.add('modal-style')
    modal.show();
    
}

for (i=0; i < btnAbrirModal.length; i++){
    var botao = btnAbrirModal[i];
    botao.addEventListener('click' , function() {
        var idDoElemento = this.id;
        abrirModal(idDoElemento);
    });
}

btnFecharModal.addEventListener('click' , function () {
    fecharModal();
})