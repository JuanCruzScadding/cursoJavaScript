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
// function factorial(num){
// while (num > 1) {
//     let resultado = (num * --num)
//     console.log(resultado)
// }
// }
// factorial(prompt("Ingrese el numero"))

function factorialRecursivo(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    return numero * factorialRecursivo(numero - 1);
  }
  alert(factorialRecursivo(prompt("Dame un numero")))