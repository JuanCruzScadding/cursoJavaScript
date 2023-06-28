function escuela(){
    let materias = ["Matemáticas", "Física" , "Química" , "Historia" , "Lengua"]
    return materias
}
console.log("------------------EJERCICIO 2------------------------")
let materias = ["Matemáticas", "Física" , "Química" , "Historia" , "Lengua"]
// Array de asignaturas
let asignaturas = ["Matemáticas", "Física", "Química", "Historia", "Lengua"];

// Función para obtener la frase "YO estudio <asignatura>"
function obtenerFraseEstudio(asignatura) {
  return "Yo estudio " + asignatura;
}

// Recorrer el array y mostrar las asignaturas utilizando return
for (let i = 0; i < asignaturas.length; i++) {
  let asignatura = asignaturas[i];
  let fraseEstudio = obtenerFraseEstudio(asignatura);
  console.log(fraseEstudio);
}
console.log("------------------EJERCICIO 3------------------------")
let lascola = ["FISICA", "QUIMICA", "BIOLOGIA"]
let notas = []
function cargarNotas() {
    for (let i = 0; i < lascola.length; i++) {
    notas.push(prompt("Cuanto te sacaste en " + lascola[i]))
    console.log("EN " + lascola[i] + " TE SACASTE " + notas[i])
    if(notas[i] < 6) {
      console.log("TENES QUE RECURSAR " + lascola[i])
    }
}
}
console.log("------------------EJERCICIO 4------------------------")
  
function laloto(){
let loto = []
for (let i = 0; i < 10; i++) {
  let numeros = loto.push(Number(prompt("QUE NUMEROS GANARON")))
}
return(loto)
}
//const casino = laloto()
// casino.sort((a, b) => {
//   return a - b
// } )
console.log("------------------EJERCICIO 5------------------------")
let UnoADiez = [4 ,6 ,3 ,2 ,5 ,7 ,8 ,9 ,1 ,10 ]
console.log("ASI ES ORIGINALMENTE " + UnoADiez)
UnoADiez.sort((a , b) => {
  return a - b
}
)
console.log("ASI DESPUES DEL SORT " + UnoADiez)
console.log("------------------EJERCICIO 6------------------------")

let colegio = ["Matemáticas", "Física" , "Química"]
let calificaciones = []
function tenesRepetir() {
  for (let i = 0; i < colegio.length; i++) {
  calificaciones.push(Number(prompt("CUANTO TE SACASTE EN " + colegio[i].toUpperCase())))   
    if (calificaciones[i] < 6) {
    console.log("TENES QUE RECURSAR " + colegio[i].toUpperCase() + ", PORQUE TE SACASTE " + calificaciones[i])    
  }
    if (calificaciones[i] >= 6){
    console.log("MUY BIEN, APROBASTE " + colegio[i].toUpperCase() + " " + "CON " + calificaciones[i])
  } 
  }
}
console.log("------------------EJERCICIO 7------------------------")
let abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
function multiplos() {
  let nuevoABC = []
  for (let i = 0 ;i < abecedario.length;     i += 3
    ) {
    nuevoABC.push(abecedario[i])
  }
  return nuevoABC
}
console.log(multiplos())
console.log("------------------EJERCICIO 8------------------------")

let vocales = []
function ingresarVocales() {
  for (let i = 0; i < 10; i++) {
    vocales.push(prompt("INGRESE UNA LETRA"))
    if((vocales[i] === "a") || (vocales[i] === "e")||(vocales[i] === "i") ||(vocales[i] === "o") ||(vocales[i] === "u")){
      console.log(vocales[i])
    }  
    else{
      i
    }
  }
}
//ingresarVocales()
console.log("------------------EJERCICIO 9------------------------")
let precios = [50, 75, 46,22, 80, 65, 8,]
console.log(precios)
function ordenar(){precios.sort((a,b)=> {
  return a - b
                                })
return precios
}
console.log(ordenar())
function mayor(){
  return (ordenar().pop())
}
function menor() {
  return (ordenar().shift())
}

console.log(menor() + " "+ mayor())