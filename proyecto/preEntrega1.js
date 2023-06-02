// Función para jugar una partida a 15 puntos
function jugarRonda15() {
                                                    //DECLARO VARIABLES LOCALES
  let puntajeNosotros = 0 //PUNTAJES INICIALES DE CADA EQUIPO
  let puntajeEllos = 0
  let turno = 1 //VARIABLE PARA LUEGO ALTERNAR TURNOS

  alert("EMPIEZA JUEGO A 15 PUNTOS")

  while (puntajeNosotros < 15 && puntajeEllos < 15) { //MIENTRAS NINGUN EQUIPO SUPERE LOS 15 PUNTOS
    const puntajeTurno = parseInt(prompt(`Equipo ${turno}, cuantos puntos sumaste este turno?:`)) //LE SOLICITO AL EQUIPO QUE INGRESE CUANTOS PUNTOS OBTUVO ESA RONDA

    if (isNaN(puntajeTurno)) {
      alert("Ingresa un valor numérico válido.") //SI NO ES UN NUMERO, VUELVE A PREGUNTAR
      continue
    }

    if (turno === 1) {
      puntajeNosotros = puntajeNosotros + puntajeTurno 
      alert(`Puntaje del Equipo 1: ${puntajeNosotros}`)

    } else {
      puntajeEllos = puntajeEllos + puntajeTurno  
      alert(`Puntaje del Equipo 2: ${puntajeEllos}`)
    }

    if (puntajeNosotros >= 15 || puntajeEllos >= 15) { //SALIR DEL BUCLE SI ALGUNO DE LOS EQUIPOS ALCANZA O SUPERA LOS 15 PUNTOS
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
    alert(`EL EQUIPO 2 QUEDO CON ${puntajeEllos} PUNTOS`)
  } else {
    alert("ELLOS GANAN (equipo 2)")
    alert(`EL EQUIPO 1 QUEDO CON ${puntajeNosotros} PUNTOS`)
  }
}
                                                    //HAGO LO MISMO PERO PARA UNA PARTIDA A 30 PUNTOS
function jugarRonda30() {
                                                  //DECLARO VARIABLES LOCALES
let puntajeNosotros = 0 //PUNTAJES INICIALES DE CADA EQUIPO
let puntajeEllos = 0
let turno = 1 //VARIABLE PARA LUEGO ALTERNAR TURNOS

alert("EMPIEZA JUEGO A 30 PUNTOS")

while (puntajeNosotros < 30 && puntajeEllos < 30) {
  const puntajeTurno = parseInt(prompt(`Equipo ${turno}, cuantos puntos sumaste este turno?:`)) 

  if (isNaN(puntajeTurno)) {
    alert("Ingresa un valor numérico válido.") 
    continue
  }

  if (turno === 1) {
    puntajeNosotros = puntajeNosotros + puntajeTurno 
    alert(`Puntaje del Equipo 1: ${puntajeNosotros}`)

  } else {
    puntajeEllos = puntajeEllos + puntajeTurno  
    alert(`Puntaje del Equipo 2: ${puntajeEllos}`)
  }

  if (puntajeNosotros >= 30 || puntajeEllos >= 30) {
    break
  }
                                          
  if (turno === 1) {
    turno = 2;
  } else {
    turno = 1;
  }
    }

if (puntajeNosotros >= 30) {
  alert("USTEDES GANAN (equipo 1)")
  alert(`EL EQUIPO 2 QUEDO CON ${puntajeEllos} PUNTOS`)
} else {
  alert("ELLOS GANAN (equipo 2)")
  alert(`EL EQUIPO 1 QUEDO CON ${puntajeNosotros} PUNTOS`)
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

                                  //LLAMO AL MENU DENTRO DE UN CONDICIONAL
if(PARTIDA === 1){
  jugarRonda15()
}else 
    if(PARTIDA === 2){
      jugarRonda30()
    }else
        if(PARTIDA === 0){
          alert("GRACIAS VUELVA PRONTOS")
        }
