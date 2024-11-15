/*
Exercício 12: Calculadora de Fatorial
Desenvolva um programa que calcule o fatorial de um número fornecido pelo 
usuário. Por exemplo, o fatorial de 5 é: 5 x 4 x 3 x 2 x 1 = 120
*/

function calcFatorial(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * calcFatorial(num - 1);
    }
}

console.log(calcFatorial(7));