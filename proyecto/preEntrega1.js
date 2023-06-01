// Función para jugar una ronda por turnos
function jugarRonda15() {
  let puntajeNosotros = 0
  let puntajeEllos = 0
  let turno = 1

  while (puntajeNosotros < 15 && puntajeEllos < 15) {
    const puntajeTurno = parseInt(prompt(`Equipo ${turno}, ingresa los puntos que sumaron en este turno:`))

    if (isNaN(puntajeTurno)) {
      console.log('Ingresa un valor numérico válido.')
      continue
    }

    if (turno === 1) {
      puntajeNosotros += puntajeTurno
    } else {
      puntajeEllos += puntajeTurno
    }

    console.log(`Puntaje del Equipo 1: ${puntajeNosotros}`)
    console.log(`Puntaje del Equipo 2: ${puntajeEllos}`)

    if (puntajeNosotros >= 15 || puntajeEllos >= 15) {
      break
    }

    if (turno === 1) {
      turno = 2;
    } else {
      turno = 1;
    }
      }

  if (puntajeNosotros >= 15) {
    console.log("USTEDES GANAN")
  } else {
    console.log("ELLOS GANAN")
  }
}

// Llamada a la función para jugar una ronda
function jugarRonda30() {
  let puntajeNosotros = 0
  let puntajeEllos = 0
  let turno = 1


  while (puntajeNosotros < 30 && puntajeEllos < 30) {
    const puntajeTurno = parseInt(prompt(`Equipo ${turno}, ingresa los puntos que sumaron en este turno:`))

    if (isNaN(puntajeTurno)) {
      console.log('Ingresa un valor numérico válido.')
      continue
    }

    if (turno === 1) {
      puntajeNosotros += puntajeTurno
    } else {
      puntajeEllos += puntajeTurno
    }

    console.log(`Puntaje del Equipo 1: ${puntajeNosotros}`)
    console.log(`Puntaje del Equipo 2: ${puntajeEllos}`)

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
    console.log('¡Empate! Ambos equipos han alcanzado los 30 puntos.')
  } else if (puntajeNosotros >= 30) {
    console.log('¡Ustedes han ganado la ronda con 30 puntos!')
  } else {
    console.log('¡Ellos han ganado la ronda con 30 puntos!')
  }
}
function menu(partida) {
  let menu = parseInt(prompt("ELIJA UN MODO DE JUEGO\n1 : PARTIDA A 15 PUNTOS\n2 : PARTIDA A 30 PUNTOS\n0 : PARA SALIR"))
  partida = menu
  if(isNaN(menu)){
    alert("Elija una opcion valida")
  }
  return partida
}
if (menu("partida") === 1) {
  jugarRonda15()
}else
  if(menu("partida") === 2){
    jugarRonda30()
  }
  else
    if(menu("partida") === 0){
    }