// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();

let continuar

do {

let numero = parseInt(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
  fatorial *= i;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);

do {
    continuar = prompt("Deseja verificar outro número? (S/N): ").toUpperCase();

    if (continuar !== "S" && continuar !== "N") {
        console.log("Resposta inválida, digite 'S' para sim ou 'N' para não.");
    }
} while (continuar !== "S" && continuar !== "N");

} while (continuar === "S");

console.log("Programa encerrado.");
