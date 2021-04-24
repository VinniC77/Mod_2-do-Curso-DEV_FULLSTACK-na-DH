let meuPais = {
    nome: "Brasil",
    populacao: 2032342302,
    capital: "Brasilia",
    dizerNacionalidade: function() {
        return "Nasci no " + this.nome;
    }
};
console.log(meuPais.dizerNacionalidade())
// para acessar a propriedade usa-se a dot notation
console.log("A capital do " + meuPais.nome + " é " + meuPais.capital)

// this - Quando estamos dentro do método (função dentro de obejto), e queremos se referir a uma propriedade interna do obejtoo, podemos usar a palavra reservada this. Irá se referirá ao obejto que está chamando a função

let carro = {
    nome: "Fox",
    ano: 2012,
    ligar: function() {
        console.log("O carro " + this.nome + " está ligado.")
    }
}
carro.ligar()

// funções construtoras - Devem sempre iniciar com letra maiúscula - Serve como molde pra criar vários objetos com a mesma estrutura
function Carro(nomeCarro, anoCarro) {
    this.nome = nomeCarro;
    this.ano = anoCarro;
}

// com o molde pronto precisaremos criar outros carros. Para isso instanciamos através do "new". Ou seja, criar um objeto específico a partir da função de molde
let civic = new Carro("Civic", "2019");
let gol = new Carro("Gol", "2012")

console.log(civic)
console.log(gol)