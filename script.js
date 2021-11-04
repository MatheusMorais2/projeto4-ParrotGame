let numeroCarta = prompt("Com quantas cartas você quer jogar? (Numero par entre 4 e 14)");

while (numeroCarta % 2 !== 0 || numeroCarta < 4 || numeroCarta > 14) {
    numeroCarta = prompt("Com quantas cartas você quer jogar? (Entre 4 e 14)");
}