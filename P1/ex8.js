/*
Exercício 8: Jogo de Adivinhação
Desenvolva um jogo onde o computador escolhe um número fixo (por exemplo, 7) e o usuário deve adivinhar qual é este número. O programa deve continuar pedindo palpites até que o usuário acerte.
*/

const prompt = require("readline-sync");
let secretNum = 7;
let continuar = true;

console.log("Adivinhe um número de 0 a 10.")
while (continuar) {
    let tentativa = prompt.questionInt("Seu chute é: ")
    if(tentativa == secretNum) {
        console.log("Parabens você acertou!!")
        continuar = false
    } else {
        console.log("Você errou, tente novamente.")
    }
}