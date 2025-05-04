// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync') ()

const nota = prompt('Digite sua nota: ')
    if(nota >= 7 && nota <=10){
        console.log('Aprovado')
    }else if(nota < 7 && nota > 0){
        console.log('Recuperação')
    }else if(nota == 0){
        console.log('Reprovado')        
    }else{
        console.log('Digite uma nota válida entre 0 e 10')
    }

