/*
Exercício 9: Somador de Números
Crie um programa que peça números ao usuário e some todos eles. 
O programa deve parar de pedir números quando o usuário digitar 0, e então mostrar a soma total.
*/

const prompt = require("readline-sync");
let res = 0;
let continuar = true;
while (continuar) {
    const num = prompt.questionInt("Digite um número: ")
    if (num === 0) {
        console.log(`Seu resultado é: ${res}.`)
        continuar = false;
    }

    res += num;
}