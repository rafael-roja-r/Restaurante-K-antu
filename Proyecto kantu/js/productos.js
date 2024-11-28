// Función para cargar el archivo JSON
function loadJSON(filePath, callback) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo JSON desde ${filePath}`);
            }
            return response.json();
        })
        .then(data => callback(data))
        .catch(error => console.error("Error:", error));
}

// Función para renderizar las tarjetas de productos
function renderProductos(data) {
    const container = document.getElementById("tipo"); // Contenedor donde se colocarán las tarjetas

    // Recorrer el JSON con un bucle 'for'
    for (let i = 0; i < data.length; i++) {
        const plato = data[i];

        // Crear una nueva tarjeta usando la estructura existente
        const producto = document.createElement("div");
        producto.classList.add("producto");

        // Construir el contenido de la tarjeta
        producto.innerHTML = `
            <div class="imgs">
                <img src="${plato.url}" alt="${plato.nombre}">
            </div>
            <div class="detalles">
                <p id="nombre">${plato.nombre}</p>
                <p id="precio">Precio: S/ ${plato.precio.toFixed(2)}</p>
                <div class="bostones">
                    <button type="submit">Reservar</button>
                    <button type="submit" id="detalles">Detalles</button>
                </div>
            </div>
        `;

        // Añadir la tarjeta al contenedor
        container.appendChild(producto);
    }
}

// Cargar los datos del archivo JSON y renderizarlos
document.addEventListener("DOMContentLoaded", () => {
    loadJSON("./db/platos.json", renderProductos);
});
