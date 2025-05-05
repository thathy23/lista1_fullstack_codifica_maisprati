// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.
const prompt = require('prompt-sync')();

let quantMaca = parseFloat(prompt('Digite a quantidade de maçã: '));


if(quantMaca < 12){
   console.log(`O valor total da compra foi: R$ ${quantMaca * 0.30.toFixed(2)}`)
}else if (quantMaca >= 12 ){
    console.log(`O valor total da compra foi: R$ ${quantMaca * 0.25.toFixed(2)}`)
} 