/*
Exercício 25: Conversor de Unidades
Nível: Iniciante

Crie um conversor de unidades que:
1. Receba um valor numérico
2. Receba a unidade de origem (kg, g, mg)
3. Receba a unidade de destino
4. Retorne o valor convertido
*/
function converterUnidade(valor, unidadeOrigem, unidadeDestino) {
    let resultado;

    //Convertendo para a unidade desejada
    if (unidadeOrigem === "kg") {
        if (unidadeDestino === "g") {
            resultado = valor * 1000;  // 1 kg = 1000 g
        } else if (unidadeDestino === "mg") {
            resultado = valor * 1000000; //1 kg = 1,000,000 mg
        } else {
            return "Unidade de destino inválida!";
        }
    } else if (unidadeOrigem === "g") {
        if (unidadeDestino === "kg") {
            resultado = valor / 1000;  // 1 g = 0.001 kg
        } else if (unidadeDestino === "mg") {
            resultado = valor * 1000;  // 1 g = 1000 mg
        } else {
            return "Unidade de destino inválida!";
        }
    } else if (unidadeOrigem === "mg") {
        if (unidadeDestino === "kg") {
            resultado = valor / 1000000;  // 1 mg = 0.000001 kg
        } else if (unidadeDestino === "g") {
            resultado = valor / 1000;  // 1 mg = 0.001 g
        } else {
            return "Unidade de destino inválida!";
        }
    } else {
        return "Unidade de origem inválida!";
    }

    return resultado;
}