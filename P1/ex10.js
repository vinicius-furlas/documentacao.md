/*
Exercício 10: Gerador de Tabuada
Desenvolva um programa que receba um número do usuário e mostre a tabuada desse número de 1 a 10. Use o loop for para gerar a tabuada.
*/

function gerarTabuada(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}

console.log(gerarTabuada(5))