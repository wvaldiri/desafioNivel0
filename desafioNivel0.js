//ANTES DE EMPEZAR:
//Copia este código base completo en un nuevo archivo llamado desafio.js

//-----------------------------------------------------------------------//

//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto 
// de la lógica funcione bien)

const jugadorUno = {
    nombre: "Marce",
    habilidades: {
      ataque: 84,
      velocidad: 33,
      vida: 90,
      magia: 120,
    },
    articulos: ["espada", "escudo", "varita"],
  };
  
  const jugadorDos = {
    nombre: "Flor",
    habilidades: {
      ataque: 73,
      velocidad: 30,
      vida: 80,
      magia: 130,
    },
    articulos: ["escudo", "varita", "capa", "pocion"],
  };
  
  //-----------------------------------------------------------------------//
  
  //PUNTOS INICIALES DEL JUEGO:
  //Estas variables servirán para almacenar los puntos ganados por cada jugador.
  //Cada vez que un jugador gana en una habilidad determinada se deberá
  //sumar 1 punto en el contador correspondiente:
  var contadorPuntosJug1 = 0;
  var contadorPuntosJug2 = 0;
  
  //Ganador:
  var ganador;
  
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR PODER DE ATAQUE
  
  //La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
  //contador. Según la condición que se cumpla, se irán sumando los puntos.
  
 //creo 2 variables en la la que  llamo los objetos  del jugador 1 y el jugador2
const compararAtaqueJugador1 = jugadorUno.habilidades.ataque
const compararAtaqueJugador2 = jugadorDos.habilidades.ataque

//comparo si el ataque del jugador1 es mayor que  el jugador2
  if (compararAtaqueJugador1 > compararAtaqueJugador2) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
  } else if (compararAtaqueJugador2 > compararAtaqueJugador1) { // en caso contrario
    contadorPuntosJug2++;
  } else { // si es un empate
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }
 
  
  //COMPARACIÓN POR VELOCIDAD:
  //(Escribir debajo el código que te permita generar esta comparación)
  
  //-----------------------------------------------------------------------//
  const compararVelocidadJugador1 = jugadorUno.habilidades.velocidad
  const compararVelocidadJugador2 = jugadorDos.habilidades.velocidad
//comparamos si la velicidad del jugador1 > Jugador2
  if (compararVelocidadJugador1 > compararVelocidadJugador2) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
  } else if (compararVelocidadJugador2 > compararVelocidadJugador1) { // en caso contrario
    contadorPuntosJug2++;
  } else { // si es un empate
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }
  //----------------------------------------------------------------------------//
  
  //COMPARACIÓN POR NIVEL DE VIDA:
  //(Escribir debajo el código que te permita generar esta comparación)

  const compararVidaJugador1 = jugadorUno.habilidades.vida
  const compararVidaJugador2 = jugadorDos.habilidades.vida

  if (compararVidaJugador1 > compararVidaJugador2) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
  } else if (compararVidaJugador2 > compararVidaJugador1) { // en caso contrario
    contadorPuntosJug2++;
  } else { // si es un empate
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }

  
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR MAGIA:
  //(Escribir debajo el código que te permita generar esta comparación)
  const compararMagiaJugador1 = jugadorUno.habilidades.magia
  const compararMagiaJugador2 = jugadorDos.habilidades.magia

  if(compararMagiaJugador1 > compararMagiaJugador2){
    contadorPuntosJug1++;
  }else if(compararMagiaJugador2 > compararMagiaJugador1){
    contadorPuntosJug2++;
  }else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }
 
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
  //(Escribir debajo el código que te permita generar esta comparación)
  const compararArticulosJugador1 = jugadorUno.articulos.length;
  const compararArticulosJugador2 = jugadorDos.articulos.length;

  if(compararArticulosJugador1 > compararArticulosJugador2){
    contadorPuntosJug1++;
  }else if (compararArticulosJugador2 > compararArticulosJugador1){
    contadorPuntosJug2++;
  }else{
    contadorPuntosJug1++;  
    contadorPuntosJug2++;
  }

  console.log (contadorPuntosJug1)
  console.log (contadorPuntosJug2)
  //-----------------------------------------------------------------------//
  
  //DEFINIENDO EL GANADOR DE LA PARTIDA
  //En este espacio deberás generar la comparación final de puntos
  //que determine al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida
  
  // ejemplo:
  //var resultado = {
  /*nombreDeJug1: jugadorUno.nombre,
  nombreDeJug2: jugadorDos.nombre,
  
   }
  // console.log(resultado)*/

  
  if(contadorPuntosJug1 > contadorPuntosJug2){
        console.log("El ganador es: " , jugadorUno.nombre)
  }else if(contadorPuntosJug2 > contadorPuntosJug1){
    console.log("El ganador es: " +  jugadorDos.nombre)
  } else{
    console.log(" Es un Empate")
  }
  //-----------------------------------------------------------------------//
