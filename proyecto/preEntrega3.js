const peliculas = [
    { titulo: 'The Shawshank Redemption', genero: 'Drama', anio: 1994 },
    { titulo: 'El Padrino', genero: 'Crimen', anio: 1972 },
    { titulo: 'Pulp Fiction', genero: 'Crimen', anio: 1994 },
    { titulo: 'El Caballero Oscuro', genero: 'Acción', anio: 2008 },
    { titulo: 'El club de la pelea', genero: 'Drama', anio: 1999 },
  ];
  
  const opcionMenu = document.getElementById('opcion-menu');
  const opcionTitulo = document.getElementById('opcion-titulo');
  const opcionAnio = document.getElementById('opcion-anio');
  const opcionGenero = document.getElementById('opcion-genero');
  const tituloBusqueda = document.getElementById('titulo-busqueda');
  const anioBusqueda = document.getElementById('anio-busqueda');
  const generoBusqueda = document.getElementById('genero-busqueda');
  const resultado = document.getElementById('resultado');
  const carrito = document.getElementById('carrito');
  const amigo1Btn = document.getElementById('amigo1');
  const amigo2Btn = document.getElementById('amigo2');
  const amigo3Btn = document.getElementById('amigo3');
  let peliculasEnCarrito = [];
  
  opcionMenu.addEventListener('change', mostrarOpcion);
  
  function mostrarOpcion() {
    const opcionSeleccionada = opcionMenu.value;
    opcionTitulo.style.display = 'none';
    opcionAnio.style.display = 'none';
    opcionGenero.style.display = 'none';
  
    if (opcionSeleccionada === '1') {
      opcionTitulo.style.display = 'block';
    } else if (opcionSeleccionada === '2') {
      opcionAnio.style.display = 'block';
    } else if (opcionSeleccionada === '3') {
      opcionGenero.style.display = 'block';
    }
  }
  
  function buscarPeliculasPorTitulo() {
    const titulo = tituloBusqueda.value;
    const peliculasFiltradas = peliculas.filter(pelicula =>
      pelicula.titulo.toLowerCase().includes(titulo.toLowerCase())
    );
  
    mostrarResultados(peliculasFiltradas);
  }
  
  function buscarPeliculasPorAnio() {
    const anio = parseInt(anioBusqueda.value, 10);
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.anio === anio);
  
    mostrarResultados(peliculasFiltradas);
  }
  
  function buscarPeliculasPorGenero() {
    const genero = generoBusqueda.value;
    const peliculasFiltradas = peliculas.filter(pelicula =>
      pelicula.genero.toLowerCase().includes(genero.toLowerCase())
    );
  
    mostrarResultados(peliculasFiltradas);
  }
  
  function mostrarResultados(peliculas) {
    resultado.innerHTML = '';
  
    if (peliculas.length === 0) {
      resultado.textContent = 'No se encontraron películas.';
    } else {
      peliculas.forEach(pelicula => {
        const peliculaElement = document.createElement('li');
        peliculaElement.textContent = pelicula.titulo;
        resultado.appendChild(peliculaElement);
  
        const agregarAlCarritoBtn = document.createElement('button');
        agregarAlCarritoBtn.textContent = 'Agregar al Carrito';
        peliculaElement.appendChild(agregarAlCarritoBtn);
  
        agregarAlCarritoBtn.addEventListener('click', () => agregarAlCarrito(pelicula));
      });
    }
  }
  
  function agregarAlCarrito(pelicula) {
    peliculasEnCarrito.push(pelicula);
    mostrarCarrito();
  }
  
  function mostrarCarrito() {
    carrito.innerHTML = '';
  
    if (peliculasEnCarrito.length === 0) {
      const carritoVacio = document.createElement('li');
      carritoVacio.textContent = 'El carrito está vacío.';
      carrito.appendChild(carritoVacio);
    } else {
      peliculasEnCarrito.forEach(pelicula => {
        const peliculaElement = document.createElement('li');
        peliculaElement.textContent = pelicula.titulo;
        carrito.appendChild(peliculaElement);
      });
    }
  }
  
  amigo1Btn.addEventListener('click', () => enviarCarrito('Amigo 1'));
  amigo2Btn.addEventListener('click', () => enviarCarrito('Amigo 2'));
  amigo3Btn.addEventListener('click', () => enviarCarrito('Amigo 3'));
  
  function enviarCarrito(amigo) {
    const peliculasEnviadas = peliculasEnCarrito.map(pelicula => pelicula.titulo);
    const mensaje = peliculasEnviadas.length > 0
      ? `Se ha enviado el carrito a ${amigo} con las siguientes películas:\n${peliculasEnviadas.join('\n')}`
      : 'El carrito está vacío.';
  
    alert(mensaje);
  }
  
  document.getElementById('buscar-titulo').addEventListener('click', buscarPeliculasPorTitulo);
  document.getElementById('buscar-anio').addEventListener('click', buscarPeliculasPorAnio);
  document.getElementById('buscar-genero').addEventListener('click', buscarPeliculasPorGenero);
  