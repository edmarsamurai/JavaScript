/*

Object - Objetos

*/

const edmar = {
    name: 'Edmar',
    age: 39,
    address: {
        street: 'Rua Do Dinheiro 777',
        number: 0,
        city: 'Jandaia Do Sul',
        state: 'PR',
        country: 'Brasil'
    }
}

edmar.address.number = 7

console.log(edmar.address)
