/*
Exercício 19: Calculadora com Funções
Crie uma função chamada calculadora que receba dois números e uma operação (+, -, *, /) como parâmetros e retorne o resultado da operação matemática.
*/

function calculadora(num1, num2, operacao) {
    if (operacao === '+') {
        return num1 + num2;
    } else if (operacao === '-') {
        return num1 - num2;
    } else if (operacao === '*') {
        return num1 * num2;
    } else if (operacao === '/') {
        return num1 / num2;
    } else {
        return "Operação inválida";
    }
}

console.log(calculadora(5, 3, '+')); // Resultado: 8
console.log(calculadora(5, 3, '-')); // Resultado: 2
console.log(calculadora(5, 3, '*')); // Resultado: 15
console.log(calculadora(5, 3, '/')); // Resultado: 1.666...

