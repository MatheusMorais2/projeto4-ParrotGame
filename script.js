let numeroCarta = prompt("Com quantas cartas você quer jogar? (Numero par entre 4 e 14)");

while (numeroCarta % 2 !== 0 || numeroCarta < 4 || numeroCarta > 14) {
    numeroCarta = prompt("Com quantas cartas você quer jogar? (Entre 4 e 14)");
}

let baralho = [];

//Adicionar o numero certo de cartas no baralho
for (let i=0; i< numeroCarta/2; i++){
    baralho.push('/imagens/'+(i+1)+'.gif');
    baralho.push('/imagens/'+(i+1)+'.gif');
    console.log(baralho[i]);
}

baralho.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
console.log(baralho);

// Função para randomizar o baralho
function comparador() { 
	return Math.random() - 0.5; 
}