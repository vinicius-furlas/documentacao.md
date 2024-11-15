/*
Exercício 16: Sistema de Cadastro de Aluno
Crie um objeto que represente um aluno com propriedades para nome, idade, notas (array com 3 notas) e endereço (outro objeto com rua e número). 
O programa deve mostrar os dados do aluno e calcular sua média.
*/
let aluno = {
    nome: "Vinícius Furlanetti",
    idade: 16,
    notas: [7, 8, 9],
    endereco: {
        rua: "Rua Bla Bla Bla",
        numero: 123
    },
    //calcular a média das notas
    calcularMedia: function() {
        let soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    },
    // dados do aluno
    mostrarDados: function() {
        console.log("Nome: " + this.nome);
        console.log("Idade: " + this.idade);
        console.log("Endereço: " + this.endereco.rua + ", " + this.endereco.numero);
        console.log("Notas: " + this.notas.join(", "));
        console.log("Média: " + this.calcularMedia());
    }
};

aluno.mostrarDados();

