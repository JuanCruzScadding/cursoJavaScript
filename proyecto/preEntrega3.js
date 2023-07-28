// Array de objetos que representa cada película con título y género
const peliculas = [
  { titulo: "El padrino", genero: "Drama", imagen:"../img/elPadrino.jpg" },
  { titulo: "Pulp Fiction", genero: "Crimen", imagen:"../img/pulpFiction.jpg"  },
  { titulo: "El Señor de los Anillos: La Comunidad del Anillo", genero: "Aventura", imagen:"../img/lordOfRings.jpg" },
  { titulo: "El club de la lucha", genero: "Drama", imagen:"../img/fightClub.jpg" },
  { titulo: "Forrest Gump", genero: "Drama", imagen:"../img/forestGump.jpg" },
  { titulo: "Matrix", genero: "Ciencia ficción", imagen:"../img/matrix.jpg" },
  { titulo: "Openheimer", genero: "Drama", imagen:"../img/openheimer.webp" },
  { titulo: "El caballero oscuro", genero: "Acción" , imagen:"../img/caballeroOscuro.jpg" },
  { titulo: "La lista de Schindler", genero: "Drama", imagen:"../img/ista.jpg"},
  { titulo: "Star wars episodio I : La amenaza fantasma", genero: "Ciencia Ficcion", imagen:"../img/starWars.jpg" },
  { titulo: "Gladiador", genero: "Acción", imagen:"../img/gladiador.jpg" },
  { titulo: "El diablo viste a la moda", genero: "Drama", imagen:"../img/devilPrada.jpg" },
  { titulo: "Interestelar", genero: "Ciencia ficción", imagen:"../img/interestelar.jpg" },
  { titulo: "La naranja mecánica", genero: "Ciencia ficción", imagen:"../img/naranja.webp" },
  { titulo: "Titanic", genero: "Drama", imagen:"../img/titanic.jpg"},
  { titulo: "Inception (El origen)", genero: "Ciencia ficción", imagen:"../img/inception.jpg" },
  { titulo: "Jurassic Park", genero: "Aventura", imagen:"../img/park.jpg" },
  { titulo: "Volver al futuro", genero: "Ciencia ficción", imagen:"../img/volver.webp" },
  { titulo: "El rey león", genero: "Animación" , imagen:"../img/reyLeon.jpg"},
  { titulo: "Gladiator", genero: "Acción", imagen:"../img/gladiador.jpg" },
]
// Array para almacenar las películas agregadas al carrito
let carrito = []



// Función para mostrar los resultados de la búsqueda
function mostrarResultados(peliculas) {
  const resultadosContainer = document.getElementById("resultados")
  resultadosContainer.innerHTML = ""

  if (peliculas.length === 0) {
    resultadosContainer.innerHTML = "No se encontraron resultados."
  } else {
    peliculas.forEach(pelicula => {
      const peliculaElement = document.createElement("div")
      peliculaElement.classList.add("pelicula")

      peliculaElement.innerHTML = `
        <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
        <strong>Título:</strong> ${pelicula.titulo}<br>
        <strong>Género:</strong> ${pelicula.genero}<br>
        <button onclick="agregarAlCarrito('${pelicula.titulo}', '${pelicula.genero}')">Agregar al carrito</button>
      `

      resultadosContainer.appendChild(peliculaElement)
    })
  }
}

// Función para agregar una película al carrito
function agregarAlCarrito(titulo, genero) {
  const peliculaEnCarrito = carrito.find(p => p.titulo === titulo && p.genero === genero)

  if (!peliculaEnCarrito) {
    carrito.push({ titulo, genero })
    mostrarNotificacion("Película agregada al carrito.")
  } else {
    mostrarNotificacion("Esta película ya está en el carrito.")
  }

  guardarCarritoEnStorage() // Guardar el carrito en el almacenamiento local
  verListaCompleta() // Actualizar la visualización del carrito
}

// Función para eliminar una película del carrito
function eliminarPelicula(titulo, genero) {
  carrito = carrito.filter(pelicula => pelicula.titulo !== titulo || pelicula.genero !== genero)
  mostrarNotificacion("Película eliminada del carrito.")

  guardarCarritoEnStorage() // Guardar el carrito en el almacenamiento local
  verListaCompleta() // Actualizar la visualización del carrito
}

// Función para ver la lista completa de películas en el carrito
function verListaCompleta() {
  const carritoLista = document.getElementById("carritoLista")
  carritoLista.innerHTML = ""

  if (carrito.length === 0) {
    carritoLista.innerHTML = "El carrito está vacío."
  } else {
    const peliculaItems = carrito.map(pelicula => {
      const peliculaItem = document.createElement("li")
      peliculaItem.textContent = `${pelicula.titulo} - ${pelicula.genero}`
      return peliculaItem
    })

    carritoLista.append(...peliculaItems)
  }
}

// Función para guardar el carrito en el almacenamiento local usando JSON
function guardarCarritoEnStorage() {
  const carritoJSON = JSON.stringify(carrito)
  localStorage.setItem("carrito", carritoJSON)
}

// Función para cargar el carrito desde el almacenamiento local usando JSON
function cargarCarritoDesdeStorage() {
  const carritoJSON = localStorage.getItem("carrito")
  if (carritoJSON) {
    carrito = JSON.parse(carritoJSON)
    verListaCompleta() // Actualizar la visualización del carrito
  }
}

// Función simulada para obtener los datos de películas desde el servidor (simulación de fetch)
function obtenerPeliculasDesdeServidor() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(peliculas)
    }, 1000) // La simulación de "espera del servidor" de 1 segundo
  })
}
async function buscarPorTitulo() {
  const tituloABuscar = document.getElementById("buscarTitulo").value.toLowerCase()

  try {
    const peliculasEncontradas = await obtenerPeliculasDesdeServidor()

    const peliculasFiltradas = peliculasEncontradas.filter(
      (pelicula) => pelicula.titulo.toLowerCase().includes(tituloABuscar)
    )

    mostrarResultados(peliculasFiltradas)
  } catch (error) {
    console.error("Error al obtener las películas:", error)
  }
}
// Función para abrir el panel lateral del carrito
function abrirPanelLateral() {
  const panelLateral = document.getElementById("panelLateral")
  panelLateral.style.right = "0"
}

// Función para cerrar el panel lateral del carrito
function cerrarPanelLateral() {
  const panelLateral = document.getElementById("panelLateral")
  panelLateral.style.right = "-300px"
}

// Función para vaciar el carrito
function vaciarCarrito() {
  carrito = []
  verListaCompleta()
}

// Función para mostrar una notificación con Toastify
function mostrarNotificacion(mensaje) {
  Toastify({
    text: mensaje,
    duration: 2000,
    close: true,
    gravity: "bottom",
    position: "right",
    backgroundColor: "#222",
    className: "mi-notificacion",
  }).showToast()
}

// Función para enviar la lista de películas a un amigo
function enviarLista() {
  if (carrito.length === 0) {
    mostrarNotificacion("El carrito está vacío, no se puede enviar la lista.")
    return
  }

  // Creamos una copia de la lista del carrito para agregarla al historial
  const listaEnviada = [...carrito]
  historialListas.push(listaEnviada)

  mostrarNotificacion(`Lista enviada a tu amigo. Se incluyeron ${carrito.length} películas.`)

  vaciarCarrito()
  mostrarHistorialListas()
  guardarCarritoEnStorage() // Guardar el carrito en el almacenamiento local
}

// Array para almacenar el historial de listas enviadas
let historialListas = []

// Función para mostrar el historial de listas enviadas
function mostrarHistorialListas() {
  const historialListaElement = document.getElementById("historialLista")
  historialListaElement.innerHTML = ""

  historialListas.forEach((lista, index) => {
    const listaItem = document.createElement("li")
    listaItem.textContent = `Lista ${index + 1}: ${lista.map(pelicula => `${pelicula.titulo} - ${pelicula.genero}`).join(", ")}`
    historialListaElement.appendChild(listaItem)
  })
}

// Función para mostrar el carrito actual
function mostrarCarrito() {
  abrirPanelLateral()
  verListaCompleta()
}

// Al cargar la página, cargar el carrito desde el almacenamiento local y mostrar las listas enviadas
window.addEventListener("load", () => {
  cargarCarritoDesdeStorage()
  mostrarHistorialListas()
})
