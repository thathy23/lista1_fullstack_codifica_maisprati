//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número inteiro: '))

for(i=1; i<=10; i++){
    console.log(`${i} - ${num}`)
}

