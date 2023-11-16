console.log('activo');

document.querySelector('#botonfiltrar').addEventListener('click', cargarYFiltrar);

function cargarYFiltrar() {
    fetch('dep1.json')
        .then(response => response.json())
        .then(data => {
            // carga el JSON, llama a la función filtrarPropiedades
            filtrarPropiedades(data);
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}

function filtrarPropiedades(data) {
    // obtiene valores ingresados por el usuario
    var minPrecio = document.getElementById("minPrecio").valueAsNumber || 0;
    var maxPrecio = document.getElementById("maxPrecio").valueAsNumber || Infinity;

    // Filtra por propiedades con precios dentro del rango
    var resultadosFiltrados = data.filter(function(propiedad) {
        var precio = parseInt(propiedad.Precio.replace("$", "").replace(".", "").replace(",", ""));
        return precio >= minPrecio && precio <= maxPrecio;
    });

    // Mostrar resultados en la página
    mostrarResultados(resultadosFiltrados);
}

function mostrarResultados(resultados) {
    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

    if (resultados.length === 0) {
        resultadosDiv.innerHTML = "<p>No hay propiedades que coincidan con los criterios de búsqueda.</p>";
        return;
    }

    // Crear elementos para mostrar los resultados
    resultados.forEach(function(propiedad) {
        var propiedadDiv = document.createElement("div");
        propiedadDiv.innerHTML = `
            <img src="${propiedad.imagen}" alt="Imagen de la propiedad">
            <p>Precio: ${propiedad.Precio}</p>
            <p>Ubicación: ${propiedad.Ubicacion}</p>
            <p>Superficie: ${propiedad.Superficie}</p>
            <p>Descripción: ${propiedad.Descripcion}</p>
        `;
        resultadosDiv.appendChild(propiedadDiv);
    });
}