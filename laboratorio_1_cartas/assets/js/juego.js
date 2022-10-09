
let deck = [];
const tipos = ['C','D','H', 'S'];
const especiales = ['A','J','Q','K'];
let puntosJugador = 0,
    puntosComputadora = 0;


//referencias del html

const btnPedir = document.querySelector('#btnPedir');

const btnDetener = document.querySelector('#btnDetener');

const btnNuevo = document.querySelector('#btnNeuvo');

const puntosHTML = document.querySelectorAll('small');

const divCartasjugador = document.querySelector('#jugador-carta');

const divCartasComputadora = document.querySelector('#computadora-carta');
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
 //turno de la computadora
 const turnoComputadora = ( puntosMinimos) => {
        do {
            const carta =  pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta( carta);
            puntosHTML[1].innerHTML = puntosComputadora;
            
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`;
            imgCarta.classList.add('carta');
            divCartasComputadora.append(imgCarta); 

            if( puntosMinimos > 21 ) {
                    break;
            }
        } while ((puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21));
            setTimeout(() => {
                
            if(puntosComputadora === puntosMinimos) {
            alert('nadie Gana :(');
           } else if(puntosMinimos > 21) {
            alert ('gana la computadora');
          }else if (puntosComputadora > 21) {
            alert('jugador gana');
            } else {
                alert ('computadora ganaa')
            }

            }, 100);
 
    }

 //eventos 

 btnPedir.addEventListener('click', () => {
        const carta =  pedirCarta();
        puntosJugador = puntosJugador + valorCarta( carta);
        puntosHTML[0].innerHTML = puntosJugador;
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasjugador.append(imgCarta);      
        
        if(puntosJugador > 21) {
            console.warn('losiewnto mucho, perdiste');
            btnPedir.disabled = true;
            
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }else if(puntosJugador === 21){

            console.warn('21, genial');
            btnPedir.disabled = true;
            
            turnoComputadora(puntosJugador);
        }

 });
  
 //btnDetener

 btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

   
 });

 btnNuevo.addEventListener('click', () =>{
    console.clear();
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerHTML = 0;
    puntosHTML[1].innerHTML = 0;

    divCartasComputadora.innerHTML = '';
    
    divCartasjugador.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
 });