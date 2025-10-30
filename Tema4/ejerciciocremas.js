"use strict";

let cremas = [];

/**
 * 
 * @param {String} nombre 
 * @param {Number} precio 
 * @param {String} marca 
 */

function Ingredientes(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
}

Ingredientes.prototype.toHTMLRow = function () {
    return `
        <tr>
            <td>${this.nombre}</td>
            <td>${this.cantidad}</td>
        </tr>
    `;
}

function Crema(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    this.ingredientes = [];
}

Crema.prototype.addIngrediente = function (nombre, cantidad) {
    let ingrediente = new Ingredientes(nombre, cantidad);
    this.ingredientes.push(ingrediente);
}

Crema.prototype.removeIngrediente = function (i) {
    this.ingredientes.splice(i, 1);
}

Crema.prototype.toHTMLtable = function () {
    let tabla = `
    <table>
        <caption> Crema ${this.nombre} - Marca ${this.marca}</caption>
        <thead>
            <tr>
                <th>Ingrediente</th>
                <th>Cantidad</th>
            </tr>
        </thead>
        <tbody>`;

    for (let ingrediente of this.ingredientes) {
        tabla += ingrediente.toHTMLRow();
    }

    tabla += `
        </tbody>
        <tfoot>
            <tr>
                <th>Precio: ${this.precio} $</th>
            </tr>
        </tfoot>
    </table>
    `;

    return tabla;
}

const btnAñadir = document.querySelector("#btnAñadir");
btnAñadir.addEventListener('click', () => {
    const nombreCrema = document.querySelector("#nombreCrema").value;
    const precioCrema = document.querySelector("#precioCrema").valueAsNumber;
    const marcaCrema = document.querySelector("#marcaCrema").value;

    const crema = new Crema(nombreCrema, precioCrema, marcaCrema);
    cremas.push(crema);

    // Mostrar la crema añadida en el listado
    actualizarListado();
});

// Función para actualizar el listado de cremas
function actualizarListado() {
    const lista = document.querySelector("#cremasList");
    lista.innerHTML = ''; // Limpiar el listado antes de volver a mostrarlo

    cremas.forEach((crema, index) => {
        lista.innerHTML += `
            <div>
                <h3>Crema ${crema.nombre} - ${crema.marca}</h3>
                ${crema.toHTMLtable()}
                <p>Índice: ${index}</p>
            </div>
        `;
    });
}

// Datos de prueba - Añadimos algunas cremas y sus ingredientes al cargar
document.addEventListener('DOMContentLoaded', () => {
    const crema1 = new Crema('Crema Hidratante', 15, 'HidraMax');
    crema1.addIngrediente('Agua', 50);
    crema1.addIngrediente('Glicerina', 20);
    crema1.addIngrediente('Ácido Hialurónico', 10);
    cremas.push(crema1);

    const crema2 = new Crema('Crema Antiarrugas', 25, 'AgeDefy');
    crema2.addIngrediente('Retinol', 5);
    crema2.addIngrediente('Colágeno', 15);
    crema2.addIngrediente('Vitaminas C y E', 8);
    cremas.push(crema2);

    // Actualizamos el listado de cremas en la página
    actualizarListado();
});

const btnAñadirIngrediente = document.querySelector("#btnAñadirIngrediente");
btnAñadirIngrediente.addEventListener('click', () => {
    const nombreIngrediente = document.querySelector("#nombreIngrediente").value;
    const cantidadIngrediente = document.querySelector("#cantidadIngrediente").valueAsNumber;
    const indiceCrema = document.querySelector("#indiceCrema").valueAsNumber;

    if (cremas[indiceCrema]) {
        cremas[indiceCrema].addIngrediente(nombreIngrediente, cantidadIngrediente);

        // Actualizar solo la crema específica en el listado
        actualizarListado();
    } else {
        alert("Crema no encontrada.");
    }
});

const btnBorrarIngrediente = document.querySelector("#btnBorrarIngrediente");
btnBorrarIngrediente.addEventListener('click', () => {
    const indiceIngrediente = document.querySelector("#indiceIngrediente").valueAsNumber;
    const indiceCremaBorrar = document.querySelector("#indiceCremaBorrar").valueAsNumber;

    if (cremas[indiceCremaBorrar] && cremas[indiceCremaBorrar].ingredientes[indiceIngrediente]) {
        cremas[indiceCremaBorrar].removeIngrediente(indiceIngrediente);

        // Actualizar solo la crema específica en el listado
        actualizarListado();
    } else {
        alert("Índice de crema o ingrediente no válido.");
    }
});
