// Length
console.log("Oi, eu sou o Vinícius".length);
// OU
let texto = "Oi, eu sou o Vinícius";
console.log(texto.length)

// indexOf
console.log(texto.indexOf("joao"));

// slice
console.log(texto.slice(0, 4))
let palavra = texto.slice(0, 4)
console.log(palavra)
console.log(texto) // o slice não altera o texto original

// trim - retira os espaços das "pontas" da string, não entre as palavras.

// split - transforma uma string em array
let frase = "Sou do planeta terra."
console.log(frase.split(" "));
console.log(frase.split("p"))

// replace - 2 parametros. O 1 indica a string a ser trocada e o 2 a nova string
let prog = "Sou programador PHP"
console.log(prog.replace("PHP", "JavaScript"))

let musica = "And bingo was his name, oh!";

console.log(musica.split(" "));
