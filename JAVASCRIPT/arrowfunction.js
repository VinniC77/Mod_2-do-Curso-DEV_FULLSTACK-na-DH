// declaração de função normal
const somare = function() {

}

// arrow function
const somar = ()=> {
    console.log("Estou em uma arrow function")
}
somar();
// ou pode ser declarada assim. Como tem só uma linha, não precisamos das chaves ou da return
const soma = ()=> console.log("Estou em uma arrow function")

// se receber um parametro, não precisa por os parenteses
const num = numero => console.log("Recebi um número: " + numero)
num(7);