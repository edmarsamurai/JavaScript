/*

AddEventListener

*/


const input = document.querySelector('#input-main')
const select = document.querySelector('select')
const button = document.querySelector('.btn')


/*select.addEventListener('change', function(){
    console.log('troquei o valor')
})*/


function troqueiValor(event) {
    console.log(event)
}

input.addEventListener('keypress', troqueiValor)

select.addEventListener('change', troqueiValor)

button.addEventListener('click', troqueiValor)