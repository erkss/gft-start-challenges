const readline = require('readline');

// Cria a interface de entrada e saída
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cria a função para calcular o saldo de Rankeadas
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Cria a função para determinar o nível conforme o saldo de vitórias
function determinarNivel(saldo) {
    if (saldo < 10) {
        return "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        return "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        return "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        return "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        return "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        return "Lendário";
    } else if (saldo >= 101) {
        return "Imortal";
    }
}

// Pergunta ao usuário e armazena as respostas
entrada.question("Digite a quantidade de vitórias: ", (vitorias) => {
    entrada.question("Digite a quantidade de derrotas: ", (derrotas) => {
        // Converte as entradas para números inteiros
        vitorias = parseInt(vitorias);
        derrotas = parseInt(derrotas);

        // Calcula o saldo e exibe o resultado
        const saldo = calcularSaldo(vitorias, derrotas);
        const nivel = determinarNivel(saldo);
        console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}.`);

        // Fecha a interface de entrada
        entrada.close();
    });
});