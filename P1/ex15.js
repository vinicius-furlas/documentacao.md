/*
Exercício 15: Localizador de Maior Valor
Crie um programa que encontre e mostre o maior valor em um array de números. 
Use um loop para comparar cada valor com uma variável que armazena o maior valor encontrado até o momento.
*/

const nums = [7, 9, 1, 0, 11, 50, 25, 42, 12, 3, 8];

for( let i = 0; i < nums.length; i++ ) {
    for( let j = 0; j < (nums.length - i -1); j++ ) {
        if( nums[j] > nums[j + 1]){
            let temp = nums[j]; 
            nums[j] = nums[j + 1];
            nums[j + 1] = temp;
        }
    }
}

console.log("O maior número é: " + nums[numbers.length - 1]); 