// Callbacks - É uma função que se passa como parâmetro de outra função

// .map() - Executa cada elemento do array baseado no callback que passamos como parâmetro e retorna um array com o mesmo número de elementos do array original

let numeros = [2, 4, 6]

// Jeito antigo/descritivo de declarar uma função
let dobNum = numeros.map(function(num) {
    return num * 2
})
console.log(dobNum)
// Jeito Arrow Function de declarar uma função. O resultado é o mesmo, mas o código fica mais simples.
let dobroNumeros = numeros.map((numero) => numero * 2)
console.log(dobroNumeros)

// .filter() - Também passa por cada elemento do array, filtrando e gerando um novo array baseado na condição que definimos
let idades = [15, 39, 18, 23, 10]
let maiores = idades.filter((idade) => idade >= 18)
console.log(maiores)

// .reduce() -Executado sobre o array e recebe como parâmtro um callback, como todos os outros métodos,que vai passar por cada elemento do array, no entanto irá retornar como resultado um único valor. O callback recebe 2 parametros, o 1 o acumulador e o segundo o elemento atual
let numbers = [5, 7, 16]
let resultado = numbers.reduce((acumulador, numero) => acumulador + numero)
console.log(resultado)

// .forEach() - Sua função é iterar(percorrer) sobre cada elemento do array.
let paises = ['Argentina', 'Brasil', 'Colombia']
paises.forEach((pais) => console.log(pais))

let indice = numeros.forEach((num, indice) => console.log('O indice ' + indice + ' tem o valor: ' + num))