
// function nomeCompleto (nome, sobrenome) {
//     return nome + " " + sobrenome
// }

// function iniciais (nome, sobrenome) {
//     return nome[0] + sobrenome[0]
// }

// function saudar (nome, sobrenome, callback) {
//     return 'Olá ' + callback(nome, sobrenome) + "!"
// }

// console.log(saudar("Vinicius", "Clunc", nomeCompleto))

// console.log(saudar('Vinicius', 'Clunc', iniciais))

// function dobro (num1) {
//     return num1 * 2
// }

// function triplo (num2) {
//     return num2 * 3
// }

// function aplicar (num3, callback) {
//     return callback(num3, callback)
// }

// console.log(aplicar(3, triplo))


// function somar (num1, num2) {
//     return num1 + num2
// }

// function subtrarir (num1, num2) {
//     return num1 - num2
// }

// function multiplicar (num1, num2) {
//     return num1 * num2
// }

// function dividir (num1, num2) {
//     return num1 / num2
// }

// function calculadora(num1, num2, callback) {
//     return callback(num1, num2, callback)
// }

// console.log(calculadora(5, 2, subtrarir))


function adicionarHttp (url) {
     return "http://" + url
}

function processar (lista, callback) {
    let temp = []
    for (var i = 0; i < lista.length; i++) {
        temp.push(callback(lista[i]))
    }
    return temp
}

console.log(processar(['www.google.com','www.yahoo.com'], adicionarHttp))