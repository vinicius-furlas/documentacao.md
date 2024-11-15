/*
Exercício 22: Verificador de Maioridade Internacional
Nível: Iniciante

Crie um programa que determine se uma pessoa pode beber álcool em diferentes países.
O programa deve:
1. Receber a idade da pessoa
2. Verificar e informar se ela pode beber nos seguintes lugares:
   - Brasil e EUA (21 anos)
   - Japão e Indonésia (20 anos)
   - Portugal e Alemanha (16 anos)
*/
function verificarMaioridade(idade) {
   // Verificando se a pessoa pode beber no Brasil e EUA 18 anos
   if (idade >= 18) {
console.log("Você pode beber no Brasil e nos EUA.");
   } else {
console.log("Você não pode beber no Brasil e nos EUA.");
   }

   // Verificando se a pessoa pode beber no Japão e Indonésia (20 anos)
   if (idade >= 20) {
console.log("Você pode beber no Japão e na Indonésia.");
   } else {
console.log("Você não pode beber no Japão e na Indonésia.");
   }

   // Verificando se a pessoa pode beber em Portugal e Alemanha (16 anos)
   if (idade >= 16) {
console.log("Você pode beber em Portugal e na Alemanha.");
   } else {
console.log("Você não pode beber em Portugal e na Alemanha.");
   }
}
//EXEMPLO DE TESTE
verificarMaioridade(18); // Teste com a idade 18