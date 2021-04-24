const somar = (numeroA, numeroB)=> numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao)=> operacao(numeroA, numeroB);

// quando passamos uma função como parêmetro não devemos passar com o () para execução, apenas o nome
console.log(calculadora(5, 2, somar));

console.log(calculadora(5, 2, (numeroA, numeroB) => numeroA - numeroB));


