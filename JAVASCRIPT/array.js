/*
let pessoa = ["Vini", 22, 1.82, true, ["música", "café", "musculação"]];
console.log(pessoa[4]);
console.log(pessoa.length);

// Métodos no Array

let pessoa = ["Vini"];
// push - Adiciona um elemento ao final do array
pessoa.push(22);

// pop - Elimina o último elemento da array. Se aribuirmos uma variavel, ele armazena esse valor.
let excluido = pessoa.pop()

// unshift - Adciona um elemento no inicio do array
pessoa.unshift(25);

// shift - Elimina o primeiro elemento da array. Se atribuirmos uma variavel ele armazena esse valor.
let primeiro = pessoa.shift();
*/

let eu = ["Vini", 1.82, "Vini"]

// indexOf - Retorna o indice da palavra que foi procurada.
console.log(eu.indexOf("Vini"))

// lastIndexOF - Retorna o indicde da palavra que foi procurada, mas de trás pra frente.Ou seja, o ultimo(last)
console.log(eu.lastIndexOf("Vini"))

// join - Transforma a array numa String. Ou seja, num só elemento. Separa por vírgula por padrão
console.log(eu.join())
console.log(eu.join(" - "))