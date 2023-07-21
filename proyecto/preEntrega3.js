// Array de objetos que representa cada película con título y género
const peliculas = [
  { titulo: "El padrino", genero: "Drama" },
  { titulo: "Pulp Fiction", genero: "Crimen" },
  { titulo: "El Señor de los Anillos: La Comunidad del Anillo", genero: "Aventura" },
  { titulo: "El club de la lucha", genero: "Drama" },
  { titulo: "Forrest Gump", genero: "Drama" },
  { titulo: "Matrix", genero: "Ciencia ficción" },
  { titulo: "Cadena perpetua", genero: "Drama" },
  { titulo: "El caballero oscuro", genero: "Acción" },
  { titulo: "La lista de Schindler", genero: "Drama" },
  { titulo: "El Señor de los Anillos: El retorno del rey", genero: "Aventura" },
  { titulo: "Gladiador", genero: "Acción" },
  { titulo: "El resplandor", genero: "Terror" },
  { titulo: "Interestelar", genero: "Ciencia ficción" },
  { titulo: "La naranja mecánica", genero: "Ciencia ficción" },
  { titulo: "Titanic", genero: "Drama" },
  { titulo: "Inception (El origen)", genero: "Ciencia ficción" },
  { titulo: "Jurassic Park", genero: "Aventura" },
  { titulo: "El rey león", genero: "Animación" },
  { titulo: "Volver al futuro", genero: "Ciencia ficción" },
  { titulo: "Gladiator", genero: "Acción" },
]


// Array para almacenar las películas agregadas al carrito
let carrito = []

// Obtenemos los elementos del DOM
const inputTitulo = document.getElementById("inputTitulo")
const inputGenero = document.getElementById("inputGenero")
const resultadosContainer = document.getElementById("resultados")
const listaCarrito = document.getElementById("listaCarrito")
const contenedorNotificaciones = document.getElementById("contenedorNotificaciones")

// Función para buscar películas por título o género
function buscarPeliculas() {
  const titulo = inputTitulo.value.trim().toLowerCase()
  const genero = inputGenero.value.trim().toLowerCase()

  // Simulamos una solicitud fetch para obtener los resultados
  obtenerResultadosSimulados()
    .then(peliculas => {
      const resultados = peliculas.filter(pelicula => {
        const tituloEnMinuscula = pelicula.titulo.toLowerCase()
        const generoEnMinuscula = pelicula.genero.toLowerCase()
  
        return tituloEnMinuscula.includes(titulo) && generoEnMinuscula.includes(genero)
      })
  
      mostrarResultados(resultados)
    })
    .catch(error => {
      console.error("Error en la búsqueda:", error)
      mostrarNotificacion("Error en la búsqueda de películas.")
    })
}
// Función para simular la obtención de resultados con Fetch y Promesas
function obtenerResultadosSimulados() {
  return new Promise(resolve => {
    // Simulamos una demora de medio segundo para obtener los resultados
    setTimeout(() => {
      resolve(peliculas)
    }, 500)
  })
}


// Función para mostrar los resultados de la búsqueda
function mostrarResultados(peliculas) {
  resultadosContainer.innerHTML = ""

  if (peliculas.length === 0) {
    resultadosContainer.innerHTML = "No se encontraron resultados."
  } else {
    peliculas.forEach(pelicula => {
      const peliculaElement = document.createElement("div")
      peliculaElement.innerHTML =
        "<strong>Título:</strong> " + pelicula.titulo + "<br>" +
        "<strong>Género:</strong> " + pelicula.genero + "<br>" +
        "<button onclick='agregarAlCarrito(\"" + pelicula.titulo + "\")'>Agregar al carrito</button>"
      resultadosContainer.appendChild(peliculaElement)
    })
  }
}

// Función para agregar una película al carrito
function agregarAlCarrito(titulo) {
  if (!carrito.includes(titulo)) {
    carrito.push(titulo)
    mostrarNotificacion("Película agregada al carrito.")
  } else {
    eliminarPelicula(titulo)
    mostrarNotificacion("Película eliminada del carrito.")
  }
}

// Función para eliminar una película del carrito
function eliminarPelicula(titulo) {
  carrito = carrito.filter(pelicula => pelicula !== titulo)
  verListaCompleta()
}

// Función para ver la lista completa de películas en el carrito
function verListaCompleta() {
  listaCarrito.innerHTML = ""

  if (carrito.length === 0) {
    listaCarrito.innerHTML = "El carrito está vacío."
  } else {
    carrito.forEach(titulo => {
      const peliculaElement = document.createElement("div")
      peliculaElement.innerHTML =
        "<strong>Título:</strong> " + titulo + "<br>" +
        "<button onclick='eliminarPelicula(\"" + titulo + "\")'>Eliminar del carrito</button>"
      listaCarrito.appendChild(peliculaElement)
    })
  }
}

// Función para vaciar completamente el carrito
function vaciarCarrito() {
  carrito = []
  verListaCompleta()
  mostrarNotificacion("El carrito ha sido vaciado.")
}

// Función para mostrar una notificación
function mostrarNotificacion(mensaje) {
  const notificacion = document.createElement("div")
  notificacion.className = "notificacion"
  notificacion.textContent = mensaje

  // Agregar la notificación al contenedor de notificaciones
  contenedorNotificaciones.appendChild(notificacion)

  // Eliminar la notificación después de 2 segundos
  setTimeout(function () {
    contenedorNotificaciones.removeChild(notificacion)
  }, 2000)
}
// Función para enviar la lista de películas a un amigo
function enviarLista() {
  if (carrito.length === 0) {
    mostrarNotificacion("El carrito está vacío, no se puede enviar la lista.")
    return
  }

  const datosLista = JSON.stringify(carrito)

  // Simulamos el envío de la lista con una notificación de Toastify
  Toastify({
    text: "La lista ha sido enviada a tu amigo y el carrito se ha vaciado.",
    duration: 2000,
    close: true,
    gravity: "top",
    position: "right",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast()

  vaciarCarrito()
}