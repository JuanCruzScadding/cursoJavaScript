// Función para jugar una partida a 15 puntos
function jugarRonda15() {
                                                    //DECLARO VARIABLES LOCALES
  let puntajeNosotros = 0
  let puntajeEllos = 0
  let turno = 1
  alert("EMPIEZA JUEGO A 15 PUNTOS")
                                                    //
  while (puntajeNosotros < 15 && puntajeEllos < 15) {
    const puntajeTurno = parseInt(prompt(`Equipo ${turno}, cuantos puntos sumaste este turno?:`))

    if (isNaN(puntajeTurno)) {
      alert("Ingresa un valor numérico válido.")
      continue
    }

    if (turno === 1) {
      puntajeNosotros = puntajeNosotros + puntajeTurno
    } else {
      puntajeEllos += puntajeTurno
    }

    alert(`Puntaje del Equipo 1: ${puntajeNosotros}`)
    alert(`Puntaje del Equipo 2: ${puntajeEllos}`)

    if (puntajeNosotros >= 15 || puntajeEllos >= 15) {
      break
    }
                                                    //ESTE CONDICIONAL ALTERNA LOS TURNOS
    if (turno === 1) {
      turno = 2;
    } else {
      turno = 1;
    }
      }

  if (puntajeNosotros >= 15) {
    alert("USTEDES GANAN (equipo 1)")
  } else {
    alert("ELLOS GANAN (equipo 2)")
  }
}

function jugarRonda30() {
  let puntajeNosotros = 0
  let puntajeEllos = 0
  let turno = 1

  alert("EMPIEZA JUEGO A 30 PUNTOS")

  while (puntajeNosotros < 30 && puntajeEllos < 30) {
    const puntajeTurno = parseInt(prompt(`Equipo ${turno}, ingresa los puntos que sumaron en este turno:`))

    if (isNaN(puntajeTurno)) {
      alert('Ingresa un valor numérico válido.')
      continue
    }

    if (turno === 1) {
      puntajeNosotros += puntajeTurno
    } else {
      puntajeEllos += puntajeTurno
    }

    alert(`Puntaje del Equipo 1: ${puntajeNosotros}`)
    alert(`Puntaje del Equipo 2: ${puntajeEllos}`)

    if (puntajeNosotros >= 30 || puntajeEllos >= 30) {
      break
    }

    if (turno === 1) {
      turno = 2;
    } else {
      turno = 1;
    }
      }

  if (puntajeNosotros >= 30 && puntajeEllos >= 30) {
    alert('¡Empate! Ambos equipos han alcanzado los 30 puntos.')
  } else if (puntajeNosotros >= 30) {
    alert('¡Ustedes han ganado la ronda con 30 puntos!')
  } else {
    alert('¡Ellos han ganado la ronda con 30 puntos!')
  }
}
function menuPrincipal() {
  let menu = parseInt(prompt("ELIJA UN MODO DE JUEGO\n1 : PARTIDA A 15 PUNTOS\n2 : PARTIDA A 30 PUNTOS\n0 : PARA SALIR"))
  if((menu === 1) || (menu === 2)|| (menu === 0)){
    return menu
  }else{
    alert("INGRESA UNA OPCION VALIDA")
    menuPrincipal()
  }
}
const PARTIDA = menuPrincipal()
if(PARTIDA === 1){
  jugarRonda15()
}else 
    if(PARTIDA === 2){
      jugarRonda30()
    }else
        if(PARTIDA === 0){
          alert("GRACIAS VUELVA PRONTOS")
        }
