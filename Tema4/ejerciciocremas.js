
"use strict";

/**
 * 
 * @param {String} nombre 
 * @param {Number} precio 
 * @param {String} marca 
 */

function Ingredientes (nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
}

Ingredientes.prototype.toHTMLRow = function () {
    let sol = "";

    sol += `<tr>
                <td>Nombre ${this.nombre}</th>
                <td>Cantidad: ${this.cantidad} </th>
            </tr>
     `;
    
    return sol;

}

function Crema(nombre, precio, marca) {

    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    this.ingredientes = [];

    
}


Crema.prototype.addIngrediente = function (nombre, cantidad) {

let ingrediente = new Ingredientes (nombre, cantidad)

    this.ingredientes.push(ingrediente);
}

Crema.prototype.removeIngrediente = function (i){
    this.ingredientes.splice(i, 1);
}

Crema.prototype.toHTMLtable = function () {

    let tabla = `
    
    <table>
    <caption> Crema ${this.nombre} - Marca ${this.marca}</caption>
    <thead>
   <tr>
   <th>Ingrediente</th>
   <th>Cantidad</>
   </thead>
   <tbody>`;
  
   for (let ingrediente of this.ingredientes) {
    tabla += this.toHTMLRow();
    
   }

   tabla += `</tbody>
   <tfoot>
   <tr>
   <th> ${this.precio} $ </th>
   </tr>
   </tfoot>
   </table>
   `;

}
