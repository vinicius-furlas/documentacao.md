/*
Exercício 23: Calculadora de IMC com Recomendações
Nível: Iniciante/Intermediário

Desenvolva uma calculadora de IMC que além de mostrar o índice:
1. Receba peso e altura
2. Calcule o IMC
3. Classifique em categorias
4. Forneça uma recomendação personalizada para cada faixa
*/
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    console.log("Seu IMC é: " + imc.toFixed(2));
    //recomendações
    if (imc < 18.5) {
        console.log("Classificação: Abaixo do peso");
        console.log("Recomendação: Considere aumentar sua ingestão de calorias e consultar um nutricionista.");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Classificação: Peso normal");
        console.log("Recomendação: Continue mantendo uma alimentação equilibrada e praticando atividades físicas.");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Classificação: Sobrepeso");
        console.log("Recomendação: Tente controlar o peso com uma alimentação saudável e exercícios físicos regulares.");
    } else {
        console.log("Classificação: Obesidade");
        console.log("Recomendação: Consulte um médico ou nutricionista para um plano de perda de peso seguro e eficaz.");
    }
}