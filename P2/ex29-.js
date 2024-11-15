/*
Exercício 29: Validador de Senha Forte
Nível: Iniciante/Intermediário

Desenvolva um programa que peça ao usuário para criar uma senha forte.
O programa deve:
1. Verificar se a senha tem pelo menos 8 caracteres
2. Conter letras maiúsculas e minúsculas
3. Conter números
4. Conter caracteres especiais
5. Continuar pedindo até que todos os critérios sejam atendidos
*/
function validarSenha() {
    let senha;
    
    while (true) {
        senha = prompt("Crie uma senha dificil (pelo menos 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais):");
        
        if (senha.length >= 8 &&
            /[a-z]/.test(senha) &&
            /[A-Z]/.test(senha) &&
            /\d/.test(senha) &&
            /[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
            console.log("Senha forte criada com sucesso!");
            break;
        } else {
            console.log("Senha inválida! Tente novamente.");
        }
    }
}

validarSenha();
