const prompt = require('prompt-sync')({ sigint: true });

let continuar;

do {
    const numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci: "));

    let a = 0;
    let b = 1;
    let valorFibonacci = 0;

    while (valorFibonacci < numero) {
        valorFibonacci = a + b;
        a = b;
        b = valorFibonacci;
    }

    if (numero === 0 || valorFibonacci === numero) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
    }

    do {
        continuar = prompt("Deseja verificar outro número? (S/N): ").toUpperCase();

        if (continuar !== "S" && continuar !== "N") {
            console.log("Resposta inválida, digite 'S' para sim ou 'N' para não.");
        }
    } while (continuar !== "S" && continuar !== "N");

} while (continuar === "S");

console.log("Programa encerrado.");

        } while (continuar.equals("S"));

        console.log("Programa encerrado.");
        sc.close();
