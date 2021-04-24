// if ternario = condição ? executa se true : executa se false. E só executa 2 resultados. Ou true ou false
let oMaior = 4 > 10 ? "O 4 é maior!" : "O 10 é maior!"
console.log(oMaior)

let dia = "terça"
let resultado = dia == "domingo" ? "Vou pra praia" : "Fico em casa"
console.log(resultado)

// switch - Executa os "casos". É important inserir o break para o JS não continuar executando os outros casos. Se nenhum case for executado, ele executa o default
switch(dia) {
    case "segunda":
        console.log("Vou tomar café")
        break;
    case "quarta":
        console.log("Vou para o cinema")
        break;
    case "terça":
        console.log("Vou estudar")
        break;
    default:
        console.log("Eu não vou fazer nada")
}