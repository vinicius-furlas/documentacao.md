/*
Exercício 17: Gerenciador de Estoque
Crie um objeto produto com propriedades nome, preço e quantidade, e um método que calcule o valor total (preço * quantidade). O programa deve mostrar os dados do produto e o valor total do estoque.
*/
let produto = {
    nome: "Camiseta",
    preco: 29.90,
    quantidade: 100,
    //valor total do estoque
    calcularValorTotal: function() {
        return this.preco * this.quantidade;
    },
    //dados do produto
    mostrarDados: function() {
        console.log("Nome: " + this.nome);
        console.log("Preço: R$ " + this.preco.toFixed(2));
        console.log("Quantidade: " + this.quantidade);
        console.log("Valor total de estoque: R$ " + this.calcularValorTotal().toFixed(2));
    }
};

produto.mostrarDados();
