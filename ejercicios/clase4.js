//EJERCICIO 1
function holaAmiga(){
    console.log("HOLA AMIGA")
}
holaAmiga()


//EJERCICIO 2
function holaNombre(){
    let nombre = prompt("CUAL ES TU NOMBRE")
    console.log("HOLA " + nombre.toUpperCase())
}
//holaNombre()



//EJERCICIO 3
function facto(numero){
  let resultado = 1
  for (let i = 1; i <= numero; i++) {
    resultado = resultado *i
  }
  return resultado
}
console.log(facto(5))

//EJERCICIO 5

function area(radio) {
  let sup = Math.PI * (radio**2)
  return sup
}
function volumen(altura){
  let vol = area(2) * altura
  return vol
}
//EJERCICIO 6
function calcularPromedio(numeros) {
  let lista = 0
  let suma = 0
 for (let i = 0; i < numeros.length; i++) {
  if (typeof numeros[i] === 'number'){
    suma += numeros[i]
    lista++
  }  
}

  if(lista === 0){
    return 0
  }else{
    let promedio = (suma / lista)
    return promedio
  }
 }

let nashenumeros = []
console.log(calcularPromedio(nashenumeros))


//EJERCICIO 7
