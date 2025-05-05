  // Función para mostrar u ocultar el subfiltro cuando se selecciona "Calzado"
  function mostrarSubfiltro() {
    var filtro = document.getElementById('filtro').value;
    var subfiltroContainer = document.getElementById('subfiltro-container');
    
    if (filtro === 'categoria2') { // Si se selecciona Calzado
      subfiltroContainer.style.display = 'block'; // Mostrar el subfiltro
    } else {
      subfiltroContainer.style.display = 'none'; // Ocultar el subfiltro
      document.getElementById('subfiltro').value = 'todos'; // Restablecer la selección del subfiltro
      filtrarProductos(); // Filtrar productos cuando el subfiltro se oculta
    }
    
    filtrarProductos(); // Filtrar productos siempre que cambie la selección principal
  }

  // Función para filtrar productos según el subfiltro de género y la categoría
  function filtrarProductos() {
    var filtro = document.getElementById('filtro').value; // Valor del filtro principal (por categoría)
    var subfiltro = document.getElementById('subfiltro').value; // Valor del subfiltro (por género)
    
    // Filtrar los productos
    var productos = document.querySelectorAll('.col'); // Seleccionamos todos los productos
    
    productos.forEach(function(producto) {
      var mostrar = true;

      // Filtrar por categoría (solo mostrar los productos de la categoría seleccionada)
      if (filtro !== 'todos' && !producto.classList.contains(filtro)) {
        mostrar = false;
      }

      // Filtrar por género (solo mostrar los productos de género seleccionado)
      if (filtro === 'categoria2' && subfiltro !== 'todos' && !producto.classList.contains('genero' + subfiltro)) {
        mostrar = false;
      }

      // Mostrar u ocultar el producto
      producto.style.display = mostrar ? 'block' : 'none';
    });
  }
