// Serve para copiar dados de dentro de arrays, com [] ou de aobejtos literais com o uso de {} sem alterar os originais
let cores = ['branco', 'azul', 'amarelo', 'vermelho', 'preto']

let [cor1, cor2, cor3] = cores
// assim o JS irá criar 3 variáveis onde irá atribuir o valor correspondente ao ÍNDICE do array
console.log(cor2)

let compras = ['pao', 'leite', 'queijo', 'presunto']

const [item1, item2, item3] = compras

console.log(item2)

// nos objetos, precisamos definir os nomes das variáveis conforme o nome EXATO com os das propriedades que desejamos extrair.

let pessoa = {
    nome: 'Vinicius' ,
    idade: 23,
    profissao: 'Programador',
    seriesFavoritas: ['The Peaky Blinders', 'Breaking Bad', 'Ozark']
}

let {nome, profissao} = pessoa

console.log(profissao)


let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [ , bariloche, , china, ] = destinosIncriveis

console.log(bariloche)



