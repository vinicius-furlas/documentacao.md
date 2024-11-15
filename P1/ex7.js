/*
Exercício 7: Contagem Regressiva
Crie um programa que faça uma contagem regressiva começando de 10 até 1, e ao final mostre a palavra "Fim!". Use o loop while para implementar a contagem.
*/

let i = 10;
while (i >= 0) {
    if(i === 0) {
        console.log("Fim!");
        break;
    }

    console.log(i);
    i--;
}