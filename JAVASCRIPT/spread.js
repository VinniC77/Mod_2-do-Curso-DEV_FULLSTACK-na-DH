// spread serve para juntarmos os itens de um array, objeto ou função

let frutas = ['banana', 'uva', 'pessego']
let frutas2 = ['caqui', 'pera', 'goiaba']
let todasAsFrtuas = [...frutas, ...frutas2]

console.log(todasAsFrtuas)

// com objetos, podemos inserir um objeto dentro de vários outros, por exemplo

let curso = {
    curso: 'FullStack',
    turno: 'Manha',
    sede: 'Sao Paulo'
}
let estudanteUm = {
    nome: 'Vinicius',
    email: 'vinic@google.com',
    ...curso
}
let estudanteDois = {
    nome: 'Jessica',
    email: 'jessiquinha@apple.com',
    ...curso
}

console.log(estudanteDois)

let eu = {
    nome: 'Vini',
    idade: 32
}

let infoPessoal = {
    tel: 332432432432,
    rg: 3234423213,
    ...eu
}

let dadosCompletos = {
    endereço: "Rua das Camelias",
    ...infoPessoal
}
console.log(dadosCompletos)
// spread em function - Serve para definir um valor de parâmetros indeterminado e deve ser informado nos parâmetros da mesma. E os retornos serão em forma de array
function comVariosParametros(...params) {
    console.log(params)
}
comVariosParametros('a')
comVariosParametros('a', 'b')
comVariosParametros('a', 'b', 'c')

// função: Como não sei quantos parametros usarei na função, posso informar assim nos parametros: ...paramns
