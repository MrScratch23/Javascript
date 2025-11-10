"use strict";

// funciones


const añadirProducto = () => {
  return;
};

const mostrarProducto = () => {
  return;
};

const productos= [
            { id: "A001", nombre: "Laptop Dell", categoria: "Tecnología", precio: 800, stock: 5 },
            { id: "A002", nombre: "Mouse Inalámbrico", categoria: "Accesorios", precio: 25, stock: 20 },
            { id: "A003", nombre: "Monitor 24\"", categoria: "Tecnología", precio: 200, stock: 12 },
            { id: "B001", nombre: "Silla Oficina", categoria: "Mobiliario", precio: 150, stock: 8 },
            { id: "A004", nombre: "Teclado Mecánico", categoria: "Accesorios", precio: 75, stock: 15 }
        ];




const listaProductos = document.querySelector("#producto");

let sol = ``;


for (const producto of productos) {
    sol += `<option value=${producto.nombre}>${producto.nombre}</option>`;
}

listaProductos.innerHTML = sol;



// main


const btnAñadir = document.querySelector("#btnAñadir");
btnAñadir.addEventListener('click', añadirProducto);
const btnMostrar = document.querySelector("#btnMostrar");
btnMostrar.addEventListener('click', mostrarProducto);

