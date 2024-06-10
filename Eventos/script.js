/*

Eventos

*/


const inputValor = document.querySelector('input')
const spanValor = document.querySelector('span')

function cliqueiNoBotao() {
    //alert('Botão clicado com sucesso!')
    //alert(inputValor.value)

    spanValor.innerHTML = inputValor.value
}

function digiteiNoInput() {
   console.log('digitei no input')
}