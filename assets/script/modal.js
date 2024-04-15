const modal = document.querySelector('#modal');
const btnAbrirModal = document.querySelectorAll('.btn')
console.log(btnAbrirModal);

btnAbrirModal[1].addEventListener('click' , () => {
    modal.showModal();
});


