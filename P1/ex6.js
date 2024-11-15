/*
Exercício 3: Classificador de Produtos
Crie um programa que classifique produtos com base em seus códigos:
1 - Alimento não perecível
2 - Alimento perecível
3 - Vestuário
4 - Limpeza
Qualquer outro código - Inválido
*/

const alimentosNaoPereciveis = ["Arroz", "Açucar", "Vinagre", "Sal"];
const alimentosPereciveis = ["Frango", "Leite", "Ovo", "Camarão"];
const vestuarios = ["Camisa", "Calça", "Tênis", "Luva"];
const limpezas = ["Desinfetando", "Álcool", "Detergente", "Sabão em pó"];

function produtos(num) {
    switch (num) {
        case 1:
            return alimentosNaoPereciveis
            break;
        case 2:
            return alimentosPereciveis;
            break;
        case 3:
            return vestuarios;
            break;
        case 4:
            return limpezas;
            break;
        default:
            console.log("Erro, Digite um número válido entre 1 a 4")
    }
}

console.log(produtos(1))