
console.log("***** Programa que mostra números ímpares de 1 a 100 *****");
let i = 1;
while (i <= 100) {
    if (i % 2 == 1) {
        console.log("Números ímpares: " + i);
    }
    i++;
}

console.log("***** Programa que mostra números pares de 1 a 100 *****");
i = 1;
while (i <= 100) {
    if (i % 2 == 0) {
        console.log("Números pares: " + i);
    }
    i++;
}

function motraParesEImpares(n) {
    console.log("***** Programa que mostra números pares e ímpares de um número *****");
    i = 1;
    console.log("**** Números pares****")
    while (i <= n) {
        if (i % 2 == 0) {
            console.log(+i);
        }
        i++;
    }
    i = 1;
    console.log("Numeros ímpares")
    while (i <= n) {

        if (i % 2 == 1) {
            console.log(i);
        }
        i++
    }
}
motraParesEImpares(20);

console.log("***** Programa que calcula a média de cada aluno *****");
let readline = require('readline-sync');
let quantidadeAlunos = parseInt(readline.question("Qual a quantidade de Alunos? "));
let n = 1;
let notasTotal = 0;
while(n <= quantidadeAlunos){
    let notas = parseInt(readline.question("Digite a nota do aluno " + n +": " ));
    notasTotal = notas + notasTotal;
    n++;
}
 let media = notasTotal / quantidadeAlunos;
 console.log("A média da turma é: " + media);









