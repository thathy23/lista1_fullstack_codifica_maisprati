// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.
const prompt = require('prompt-sync')();

console.log('Digite 5 números: ')

let soma = 0

for(i=1; i<=5; i++){
    let num = parseFloat(prompt(`Digite o ${i}° número: `))
    soma+=num        
}

console.log(`A soma dos 5 numero é: ${soma}`)
