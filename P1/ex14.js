/*
Exercício 14: Calculadora de Média
Desenvolva um programa que contenha um array com 5 notas. O programa deve calcular e mostrar a média das notas utilizando um loop para somar todos os valores.
*/

const notas = [1, 2, 3, 4, 5];
let media = 0;

for (let i = 0; i < 5; i++) {
    media += notas[i];
}

media /= 5;
console.log("A média é: " + media);