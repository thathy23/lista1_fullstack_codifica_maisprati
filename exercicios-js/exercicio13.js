// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
const prompt = require('prompt-sync')();

let num = 0
let soma = 0
let contador = 0


do {
    num = parseFloat(prompt('Digite números decimais para soma: (para sair digite 0)'))
    
    if (num !== 0) {
      soma += num;
      contador++;
    }
  
  } while (num !== 0);
  
  if (contador > 0) {
    let media = soma / contador;
    console.log("A média é igual à: ", media);
  } else {
    console.log("Digite um número decimal");
  }

