//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
const prompt = require('prompt-sync')();

let peso = parseFloat(prompt('Digite seu peso: '))
let altura = parseFloat(prompt('Digite sua altura: '))

let imc = peso / (altura*altura)

console.log(`Seu IMC é: ${imc.toFixed(1)}`)


if (imc < 18.5) {
    console.log('Voce está com Baixo peso');
  } else if (imc >= 18.5 && imc < 24.9) {
    console.log('Voce está com Peso normal');
  } else if (imc >= 25 && imc < 29.9) {
    console.log('Voce está com Sobrepeso');
  } else {
    console.log('Voce está com Obesidade');
  }





