// modo declarativo

function somar(a, b) {
    console.log("Estou somando.")
    return a + b
}

let resultadoSoma = somar(2,5);
console.log(resultadoSoma);
// modo expressão

const multiplicar = function(a, b) {
    console.log("Estou multiplicando.")
    return a * b
}

let resultadoMultiplicar = multiplicar(2,5);
console.log(resultadoMultiplicar);