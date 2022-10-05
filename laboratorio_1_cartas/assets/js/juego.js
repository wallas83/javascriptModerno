
let deck = [];
const tipos = ['C','D','H', 'S'];
const especiales = ['A','J','Q','K'];
let puntosJugador = 0,
    puntosComputadora = 0;


//referencias del html

const btnPedir = document.querySelector('#btnPedir');
const puntosHTML = document.querySelectorAll('small');

const divCartasjugador = document.querySelector('#jugador-cartas');
// esta funcion crea una nueva deck
const crearDeck = () => {
    for (let i = 2; i <= 10 ; i++) {
        for ( let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for(let esp of especiales) {
            deck.push(esp + tipo);  
        }
    }
    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
}
crearDeck();

// esta funcion permite tomar una carta

const pedirCarta = () => {

    if(deck.length === 0 ) {
        throw 'No hay cartas en el deck'
    }
    let carta = deck.pop();
  
    return carta;
}

 // pedirCarta();

 const valorCarta = (carta) => {
    const valor  = carta.substring(0, carta.length - 1);
   // let puntos = 0 ;
   return  (isNaN(valor)) ? 
            (valor === 'A') ? 11 : 10  
            : puntos = valor * 1 ;
    
        

 }

 //eventos 

 btnPedir.addEventListener('click', () => {
        const carta =  pedirCarta();
        puntosJugador = puntosJugador + valorCarta( carta);
        puntosHTML[0].innerHTML = puntosJugador;
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`

 });
  