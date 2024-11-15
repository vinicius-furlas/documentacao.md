/*
Exercício 21: Conversor de Temperaturas
Desenvolva uma função que converta temperaturas entre Celsius e Fahrenheit.
A função deve receber um valor numérico, a unidade de origem ("C" ou "F") e a unidade de destino, retornando o valor convertido.
*/

function converterTemperatura(valor, unidadeOrigem, unidadeDestino) {
    if (unidadeOrigem === 'C' && unidadeDestino === 'F') {
        //Celsius para Fahrenheit
        return (valor * 9/5) + 32;
    } else if (unidadeOrigem === 'F' && unidadeDestino === 'C') {
        //Fahrenheit para Celsius
        return (valor - 32) * 5/9;
    } else {
        return "Unidades inválidas";
    }
}
console.log(converterTemperatura(25, 'C', 'F')); // Resultado: 77
console.log(converterTemperatura(77, 'F', 'C')); // Resultado: 25