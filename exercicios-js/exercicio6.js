// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

console.log('Informe 3 valores para verificar o tipo de triangulo: ')

let A = Number(prompt("Digite o primeiro valor: ")) 
let B = Number(prompt("Digite o segundo valor: ")) 
let C = Number(prompt("Digite o terceiro valor: ")) 

if (A < B + C && B < A + C && C < A + B) {
  
    if (A === B && B === C){
        console.log('Triângulo equilátero')     
    } else if (A === B || A === C || B === C){
        console.log('Triângulo isósceles')     
    } else {
        console.log('Triângulo escaleno')
    }
//colocar nessa ordem equilatero, isosceles e por ultimo escaleno para nao dar erro.    

}else{
    console.log('Os valores digitados nao formam um triângulo')
}
6
