/*1. Crie um array chamado misturado que contenha um número,
uma string e um booleano. Imprima o tipo de dado de cada
elemento usando typeof.*/
let misturado = [42, "hello", true];
console.log(typeof misturado[0]);
console.log(typeof misturado[1]); 
console.log(typeof misturado[2]); 


/*2. Declare um array bidimensional chamado matriz com 3 linhas e
2 colunas. Preencha-o com números de sua escolha. Imprima o
elemento na segunda linha e primeira coluna.*/
let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matriz[1][0]);

/*3. Crie um array chamado diasDaSemana com os dias da semana.
Use um loop for para imprimir cada dia em uma nova linha.*/
let diasDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
for (let dia of diasDaSemana) {
console.log(dia);
}
