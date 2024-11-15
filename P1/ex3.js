function verificarIdade(idade) {
    if (idade < 16) {
        console.log("Não pode votar");
    } else if(idade >= 16 && idade <= 17 || idade > 70) {
        console.log("Voto opcional");
    } else if(idade >= 18 && idade <= 70){
        console.log("Voto Obrigatório.")
    }
}
console.log(verificarIdade(40))