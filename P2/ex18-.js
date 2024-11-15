/*
Exercício 18: Organizador de Contatos
Crie um objeto que funcione como uma agenda de contatos simples. O objeto deve ter arrays para diferentes categorias de contatos (amigos, família, trabalho) e um método para mostrar os contatos de uma categoria específica.
*/
// Criando o objeto da agenda de contatos
let agenda = {
    amigos: ["João", "Maria", "Carlos"],
    familia: ["Ana", "Pedro", "Lucia"],
    trabalho: ["Fernando", "Beatriz", "Gustavo"],
    
    //contatos de uma categoria
    mostrarContatos: function(categoria) {
        if (this[categoria]) {
            console.log("Contatos de " + categoria + ":");
            console.log(this[categoria].join(", "));
        } else {
            console.log("Categoria não encontrada.");
        }
    }
};

agenda.mostrarContatos("amigos");
