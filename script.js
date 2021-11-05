let numeroCarta = prompt("Com quantas cartas você quer jogar? (Numero par entre 4 e 14)");

while (numeroCarta % 2 !== 0 || numeroCarta < 4 || numeroCarta > 14) {
    numeroCarta = prompt("Com quantas cartas você quer jogar? (Entre 4 e 14)");
}

let baralho = [];

// Adicionar o numero certo de cartas no baralho
for (let i=0; i< numeroCarta/2; i++){
    baralho.push('/imagens/'+(i+1)+'.gif');
    baralho.push('/imagens/'+(i+1)+'.gif');
    console.log(baralho[i]);
}

baralho.sort(comparador); // Após esta linha,o baralho estará embaralhado
console.log(baralho);

// Função para randomizar o baralho
function comparador() { 
	return Math.random(baralho) - 0.5;
}

// Adicionar as cartas na tela
const main = document.querySelector('main');
for (let j=0; j<numeroCarta; j++) {
    main.innerHTML += 
    `<div class="card">
            <div class="front-face face">
              <img src="imagens/front.png">
            </div>
            <div class="back-face face">
                <img src="${baralho[j]}">
            </div>
    </div>`;
}

/*function virarCarta(carta) {
    carta.classList.add(  .card .back-face {
        transform: rotateY(0deg);
      }
    
      .card:hover .front-face {
        transform: rotateY(-180deg);
      })

}*/