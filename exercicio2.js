// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//    controle if-else.

const prompt = require('prompt-sync')();

let idade = prompt("Digite a idade da pessoa e veja sua classificação: ")

if(idade <=12){

    console.log("Até 12 anos classificação: Criança")

}else if(idade > 12 && idade <= 17){

    console.log("Entre 13 e 17 anos classificação: Adolescente")

}else if(idade >= 18 && idade <=59){

    console.log("Entre de 18 e 59 anos classificação: Adulto ")

}else {

    console.log("A partir de 60 anos classificação: Idoso")
    
}


