function mudarInput() {
  
    const input = document.getElementById("main-input")

    input.style.background = "#fff000"
   
}

const elements = document.getElementsByClassName("paragraph-js")

console.log(elements)


const tagName = document.getElementsByTagName("p")

console.log(tagName)




const element = document.querySelector(".paragraph-js")

element.textContent = "O novo texto é esse"

const souSexy = document.querySelector(".text")

souSexy.innerHTML = "Texto inner HTML <b>HTMl</b>"


const button = document.querySelector(".main-button")

button.style.color = "#fff000"
button.style.background = "#000"

const titulo = document.querySelector("h1")

titulo.style.fontSize = "100px"



//getElementsByName

// querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
// querySelectorAll -> Trás TODOS os elementos que encontar 


/*const element = document.querySelector("#main-input")

element.value = 12452

console.log(element.placeholder)*/


/*

textContent -> Pega todo o conteúdo
innerText -> Pega APENAS o texto
innerHTML -> Permite adicionar HTML e texto

*/





