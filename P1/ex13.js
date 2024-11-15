/*
Exercício 13: Lista de Compras
Crie um programa que contenha um array com uma lista de compras. 
O programa deve percorrer o array e mostrar cada item precedido pela mensagem "Preciso comprar: ".
*/

const listaCompras = ["Óleo", "Feijão", "Arroz", "Filé", "Macarrão"];

listaCompras.forEach(compra => console.log(`Preciso comprar: ${compra}`));