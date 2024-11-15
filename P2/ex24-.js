/*
Exercício 3: Aprovação de Empréstimo
Nível: Intermediário

Crie um sistema que avalie a elegibilidade para empréstimo baseado em múltiplos critérios:
1. Receba: salário, idade, tempo de emprego e valor do empréstimo desejado
2. Analise os critérios
3. Forneça o resultado com feedback específico
4. Calcule e mostre o valor máximo disponível quando aplicável
*/
function avaliarEmprestimo(salario, idade, tempoEmprego, valorEmprestimo) {
    let aprovado = false;
    let maxEmprestimo = 0;
    let feedback = "";

    if (idade < 18) {
        feedback = "A idade mínima para empréstimo é 18 anos.";
    } else if (tempoEmprego < 2) {
        feedback = "Você precisa ter pelo menos 2 anos de emprego para solicitar um empréstimo.";
    } else if (valorEmprestimo > salario * 5) {
        feedback = "O valor solicitado excede o limite de 5 vezes seu salário.";
    } else {
        //valor máximo disponível para empréstimo
        maxEmprestimo = salario * 5;
        aprovado = true;
        feedback = `Empréstimo aprovado! Você pode solicitar até R$${maxEmprestimo.toFixed(2)}.`;
    }
    console.log(feedback);
}
