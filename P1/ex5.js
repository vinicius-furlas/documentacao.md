/*
Exercício 5: Conversor de Meses
Desenvolva um programa que receba um número de 1 a 12 e retorne o nome do mês correspondente. Caso seja digitado um número fora desse intervalo, mostre a mensagem "Mês inválido".
*/
function conversorMeses(num) {
    switch (num) {
        case 1:
            return "Janeiro";
            break;
        case 2:
            return "Fevereiro";
            break;
        case 3:
            return "Março";
            break;
        case 4:
            return "Abril";
            break;
        case 5:
            return "Maio";
            break;
        case 6:
            return "Junho";
            break;
        case 7:
            return "Julho";
            break;
        case 8:
            return "Agosto";
            break;
        case 9:
            return "Setembro";
            break;
        case 10:
            return "Outubro";
            break;
        case 11:
            return "Novembro";
            break;
        case 12:
            return "Dezembro";
            break;
        default:
            console.log("Erro. Digite um número inteiro entre 1 e 12.")
            break;
    }
}

console.log(conversorMeses(6));