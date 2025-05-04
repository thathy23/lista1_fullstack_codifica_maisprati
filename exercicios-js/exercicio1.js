//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

let numero = prompt("Digite um número inteiro para verificar se é par ou impar: ");
if (numero % 2 === 0 ) {

    console.log (`O numero ${numero} é par`)
}else {
    console.log (`O numero ${numero} é impar`)
}




