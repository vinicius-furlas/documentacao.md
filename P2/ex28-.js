/*
Exercício 28: Jogo de Adivinhação Aprimorado
Nível: Iniciante

Crie um jogo onde o computador escolhe um número aleatório e o jogador deve adivinhar.
O programa deve:
1. Gerar um número aleatório entre 1 e 100
2. Dar dicas se o palpite está alto ou baixo
3. Contar o número de tentativas
4. Limitar o número máximo de tentativas
*/

function jogoAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const tentativasMaximas = 10;
    let tentativas = 0;
    
    console.log("Bem-vindo ao Jogo de Adivinhação!");
    console.log(`Tente adivinhar o número entre 1 e 100.`);
    console.log(`Você tem ${tentativasMaximas} tentativas.`);
    
    function adivinharNumero() {
        let palpite = parseInt(prompt("Digite seu palpite:"));
        tentativas++;
        
        if (palpite === numeroAleatorio) {
            console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
        } else if (tentativas >= tentativasMaximas) {
            console.log(`Você atingiu o número máximo de tentativas. O número era ${numeroAleatorio}.`);
        } else if (palpite > numeroAleatorio) {
            console.log("Seu palpite está alto. Tente novamente.");
            adivinharNumero();
        } else if (palpite < numeroAleatorio) {
            console.log("Seu palpite está baixo. Tente novamente.");
            adivinharNumero();
        }
    }
    
    adivinharNumero();
}

jogoAdivinhacao();

