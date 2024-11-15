/*
Exercício 20: Verificador de Palíndromo
Crie uma função que receba uma palavra ou frase e verifique se ela é um palíndromo (se pode ser lida da mesma forma de trás para frente, desconsiderando espaços e maiúsculas/minúsculas).
*/
function verificarPalindromo(frase) {
    frase = frase.replace(/\s/g, '').toLowerCase();

    let fraseInvertida = frase.split('').reverse().join('');

    if (frase === fraseInvertida) {
        return true; // É um palíndromo
    } else {
        return false; // Não é um palíndromo
    }
}
