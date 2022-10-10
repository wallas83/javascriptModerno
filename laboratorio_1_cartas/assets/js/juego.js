
        const miModulo =  (()=> {
            'use strict'
            let deck = [];
        const tipos = ['C','D','H', 'S'];
        const especiales = ['A','J','Q','K'];
       

        let puntosJugadores = [];
        //referencias del html

        const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNeuvo');


        const puntosHTML = document.querySelectorAll('small'),
            divCartasJugadores = document.querySelectorAll('.divCartas');
           //esta ffuncion inicializa el juego
        const inicializarjuego = (numJugadores = 2) => {
                    puntosJugadores = [];
                     deck =  crearDeck();
                     for (let i = 0; i < numJugadores; i++) {
                        
                        puntosJugadores.push(0);
                     }

                    puntosHTML.forEach(elem => elem.innerText = 0)      
                     divCartasJugadores.forEach(elem => elem.innerHTML = '');
        
            btnPedir.disabled = false;
            btnDetener.disabled = false;
            }
        
        // esta funcion crea una nueva deck

        const crearDeck = () => {
            deck = [];
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
            return _.shuffle(deck);
        

        
        }

        // esta funcion permite tomar una carta

        const pedirCarta = () => {

            if(deck.length === 0 ) {
                throw 'No hay cartas en el deck'
            }
            return deck.pop();
        
            
        }

        // pedirCarta();

        const valorCarta = (carta) => {
            const valor  = carta.substring(0, carta.length - 1); 
        return  (isNaN(valor)) ? 
                    (valor === 'A') ? 11 : 10  
                    :  valor * 1 ;
            
                

        }
            //Turno: 0 = primer jugador  y el ultimo sera la computadora
        const acumularPuntos = (carta, turno,)=> {
            puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta);
            puntosHTML[turno].innerText = puntosJugadores[turno];
            return puntosJugadores[turno];
            
        }

        const crearCarta = (carta, turno) => {
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`;
            imgCarta.classList.add('carta');
            divCartasJugadores[turno].append(imgCarta); 
        }

        const determinarganador = () => {

            const [puntosMinimos, puntosComputadora] = puntosJugadores;
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
        //turno de la computadora
        const turnoComputadora = ( puntosMinimos) => {
                let puntosComputadora = 0;
            do {
                    const carta =  pedirCarta();
                   puntosComputadora =  acumularPuntos(carta, puntosJugadores.length - 1);
                    crearCarta(carta, puntosJugadores.length -1);
                 
                } while ((puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21));
                    
                
                determinarganador();
        
            }

        //eventos 

        btnPedir.addEventListener('click', () => {
                const carta =  pedirCarta();
                const puntosJugador =  acumularPuntos(carta, 0)
                crearCarta(carta,0);
                 
                
                if(puntosJugador > 21) {
                    console.warn('lo sieNto mucho, perdiste');
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
            turnoComputadora(puntosJugadores[0]);

        
        });

        btnNuevo.addEventListener('click', () =>{
           
           
             inicializarjuego();
           
        });

                return { 
                    nuevoJuego :inicializarjuego};
        })();

