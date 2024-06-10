/*
if & else

Controlador de Fluxo
- IF(Se) -> Faça Isso
- Else(Se não) -> Executa

Operadores de Comparação

> maior que
< menor que
== igual que
*/

const notaDoAluno = 0
const notaDeCorte = 5

if(notaDoAluno > notaDeCorte){
// O que será Executado, se o If for verdadeiro
    console.log('Parabéns, você passou de ano')

} else {

    // Se o If for falso, ele entra aqui.
    console.log('Você foi reprovado')

}

const frase = 'Eu sou feliz'
const fraseDigitada = 'Eu sou um pouco feliz'

if(frase == fraseDigitada) {
    console.log('Frase correta')
} else {
    console.log('Frase incorreta, tente novamente')
}