vitorias = Math.random() * (250 - 1) + 1;
vitorias = Math.round(vitorias);
derrotas = Math.random() * (vitorias - 1) + 1;
derrotas = Math.round(derrotas);
nivel = ""

saldoVitorias = saldo(vitorias, derrotas);

if (saldoVitorias <= 10) {
    nivel = "Ferro";
} else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    nivel = "Bronze";
} else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    nivel = "Prata";
} else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    nivel = "Ouro";
} else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    nivel = "Diamante";
} else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    nivel = "Lendário";
} else if (saldoVitorias > 100) {
    nivel = "Imortal";
}

function saldo (vitorias, derrotas) {
    total = vitorias - derrotas;
    return total;
}

console.log(`O Herói tem de saldo ${saldoVitorias} vitórias e está no nivel de ${nivel}`);