const peliculas = [
  { titulo: 'The Shawshank Redemption', genero: 'Drama', anio: 1994 },
  { titulo: 'El Padrino', genero: 'Crimen', anio: 1972 },
  { titulo: 'Pulp Fiction', genero: 'Crimen', anio: 1994 },
  { titulo: 'El Caballero Oscuro', genero: 'Acción', anio: 2008 },
  { titulo: 'El club de la pelea', genero: 'Drama', anio: 1999 },
]

// Selección de elementos del DOM
const opcionMenu = document.getElementById('opcion-menu')
const opcionTitulo = document.getElementById('opcion-titulo')
const opcionAnio = document.getElementById('opcion-anio')
const opcionGenero = document.getElementById('opcion-genero')
const tituloBusqueda = document.getElementById('titulo-busqueda')
const anioBusqueda = document.getElementById('anio-busqueda')
const generoBusqueda = document.getElementById('genero-busqueda')
const resultado = document.getElementById('resultado')
const lista = document.getElementById('lista')
const amigo1Btn = document.getElementById('amigo1')
const amigo2Btn = document.getElementById('amigo2')
const amigo3Btn = document.getElementById('amigo3')

// Variable para almacenar las películas en la lista
let peliculasEnLista = []

// Manejador de eventos para el cambio de opción en el menú
opcionMenu.addEventListener('change', mostrarOpcion)

// Función para mostrar la opción seleccionada en el menú
function mostrarOpcion() {
  const opcionSeleccionada = opcionMenu.value
  opcionTitulo.style.display = 'none'
  opcionAnio.style.display = 'none'
  opcionGenero.style.display = 'none'

  if (opcionSeleccionada === '1') {
    opcionTitulo.style.display = 'block'
  } else if (opcionSeleccionada === '2') {
    opcionAnio.style.display = 'block'
  } else if (opcionSeleccionada === '3') {
    opcionGenero.style.display = 'block'
  }
}

// Función para buscar películas por título
function buscarPeliculasPorTitulo() {
  const titulo = tituloBusqueda.value
  const peliculasFiltradas = peliculas.filter(pelicula =>
    pelicula.titulo.toLowerCase().includes(titulo.toLowerCase())
  )

  mostrarResultados(peliculasFiltradas)
}

// Función para buscar películas por año
function buscarPeliculasPorAnio() {
  const anio = parseInt(anioBusqueda.value, 10)
  const peliculasFiltradas = peliculas.filter(pelicula => pelicula.anio === anio)

  mostrarResultados(peliculasFiltradas)
}

// Función para buscar películas por género
function buscarPeliculasPorGenero() {
  const genero = generoBusqueda.value
  const peliculasFiltradas = peliculas.filter(pelicula =>
    pelicula.genero.toLowerCase().includes(genero.toLowerCase())
  )

  mostrarResultados(peliculasFiltradas)
}

// Función para mostrar los resultados de búsqueda
function mostrarResultados(peliculas) {
  resultado.innerHTML = ''

  if (peliculas.length === 0) {
    resultado.textContent = 'No se encontraron películas.'
  } else {
    peliculas.forEach(pelicula => {
      const peliculaElement = document.createElement('li')
      peliculaElement.textContent = pelicula.titulo
      resultado.appendChild(peliculaElement)

      const agregarListaBtn = document.createElement('button')
      agregarListaBtn.textContent = 'Agregar a la lista'
      peliculaElement.appendChild(agregarListaBtn)

      agregarListaBtn.addEventListener('click', () => agregarLista(pelicula))
    })
  }
}

// Función para agregar una película a la lista
function agregarLista(pelicula) {
  if (!peliculasEnLista.includes(pelicula)) {
    peliculasEnLista.push(pelicula)
    mostrarLista()
  } else {
    alert('Esta película ya está en la lista.')
  }
}

// Función para mostrar el contenido de la lista
function mostrarLista() {
  lista.innerHTML = ''

  if (peliculasEnLista.length === 0) {
    const listaVacia = document.createElement('li')
    listaVacia.textContent = 'La lista está vacía.'
    lista.appendChild(listaVacia)
  } else {
    peliculasEnLista.forEach(pelicula => {
      const peliculaElement = document.createElement('li')
      peliculaElement.textContent = pelicula.titulo
      lista.appendChild(peliculaElement)
    })
  }
}

// Event listeners para los botones de envío a amigos
amigo1Btn.addEventListener('click', () => enviarLista('Amigo 1'))
amigo2Btn.addEventListener('click', () => enviarLista('Amigo 2'))
amigo3Btn.addEventListener('click', () => enviarLista('Amigo 3'))

// Función para enviar la lista a un amigo
function enviarLista(amigo) {
  const peliculasEnviadas = peliculasEnLista.map(pelicula => pelicula.titulo)
  const mensaje = peliculasEnviadas.length > 0
    ? `Se ha enviado la lista a ${amigo} con las siguientes películas:\n${peliculasEnviadas.join('\n')}`
    : 'La lista esta vacia.'

  alert(mensaje)
}

// Event listeners para los botones de búsqueda
document.getElementById('buscar-titulo').addEventListener('click', buscarPeliculasPorTitulo)
document.getElementById('buscar-anio').addEventListener('click', buscarPeliculasPorAnio)
document.getElementById('buscar-genero').addEventListener('click', buscarPeliculasPorGenero)
