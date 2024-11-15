/*
Exercício 4: Calculadora Básica
Crie uma calculadora que receba a operação desejada (+, -, *, /) e dois números.
O programa deve realizar a operação escolhida e mostrar o resultado.
Utilize switch case para implementar as diferentes operações.
*/

function calculadora(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
            case "/":
                return num1 / num2;
                break;
        default:
            console.log("Erro.")
    }
}

console.log(calculadora(10, "+", 5));