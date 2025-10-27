"use strict";
// funciones

let arrProductos=[ 
  ["Ambientador", 1.25],  
  ["Queso en lonchas", 2.80], 
  ["Turrón de chocolate", 1.70], 
  ["Chirimoya", 1.54],
  ["Granada", 0.48],  
  ["Arroz", 1.30],
];

  let productosPedido = [];


const añadirProducto = function() {

    const productoTXT = document.querySelector("#producto");
    const producto = productoTXT.value;
    const cantidadTXT = document.querySelector("#cantidad")
    const cantidad = cantidadTXT.valueAsNumber;

    const productoSeleccionado = arrProductos[producto];

    const itemPedido = {
    producto: productoSeleccionado[0],
    cantidad: cantidad,
    precioUnitario: productoSeleccionado[1],
    precioTotal: cantidad * productoSeleccionado[1]
};

productosPedido.push(itemPedido);

return productosPedido;

};


const mostrarPedido = function() {

    const resultado = document.querySelector("#resultado");

    if (productosPedido.length === 0) {
        resultado.innerHTML = "El carrito está vacío";
        return;
    }

    let totalCarrito = 0;

    for (const producto of productosPedido) {
        totalCarrito += producto.precioTotal;
    }
  
    let sol = `
    <table border="1">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
            </tr>
        </thead>
        <tbody>`;

    for (const producto of productosPedido) {
        sol += `
            <tr>
                <td>${producto.producto}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precioUnitario}€</td>
                <td>${producto.precioTotal}€</td>
            </tr>`;
    }

     sol += `
            <tr>
                <td colspan="3" style="text-align: right; font-weight: bold;">TOTAL:</td>
                <td style="font-weight: bold;">${totalCarrito.toFixed(2)}€</td>
            </tr>
        </tbody>
    </table>`;

    resultado.innerHTML = sol;
};
 

// main

const btnAñadir = document.querySelector("#btnAñadir");
btnAñadir.addEventListener('click', añadirProducto);
const btnMostrar = document.querySelector("#btnVerPedido");
btnMostrar.addEventListener('click', mostrarPedido);