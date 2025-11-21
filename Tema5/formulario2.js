"use strict";

document.querySelector("#miBoton").addEventListener ('click',e => {
let opciones = [];
const miDivision = document.querySelector("#miDivision");
opciones = document.querySelectorAll("[type='checkbox']:checked");

if (opciones.length === 0) {
    miDivision.innerHTML = "Selecciona al menos una.";
}

if (opciones.length === 3) {
     miDivision.innerHTML = "No puede seleccionar todas.";
}

if (opciones.length >1 && opciones.length <3) {
    let html = `<ul>`

    for (const opcion of opciones) {
        html += `<li>${opcion.value}</li>`;
    }

    html += `</ul>`;

    miDivision.innerHTML = html;
}


})