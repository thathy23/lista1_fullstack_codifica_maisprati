// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

while(true) {

console.log('Escolha um dos itens abaixo:')
console.log('Para Doces digite [1]');
console.log('Para Salgados digite [2]');
console.log('Para Outros digite [3]');

let opcao = Number(prompt('Digite a opção desejada: '));

switch (opcao) {
    case 1:9
        console.log('Opção 1 (Doces) escolhida');
        break;
    case 2:
        console.log('Opção 2 (Salgados) escolhida');
        break;
    case 3:
        console.log('Opção 3 (outros) escolhida');
        break;
    default:
        console.log('Opção inválida, digite 1,2 ou 3');
        continue;
    }
    break;
}