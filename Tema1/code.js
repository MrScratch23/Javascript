/* PRIMERA LINEA QUE SIEMPRE HAY QUE PONER EN CUALQUIER SCRIPT JS */
"use strict";
// Forma de organizar


//////////////////////////////////////////////////////////////////
//// FUNCIONES

function accion () {
    alert ("Hola caracola");
}
//////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////
// MAIN
//////////////////////////////////////////////////////////////////

// 1.-Recuperamos el boton del HTML
// Forma antigua de obtener un elemento por ID
// document.getElementById("btnAccion")
// Forma mas moderna, mas eficiente
let btnAccion = document.querySelector("#btnAccion");
console.log("El contenido de la variable aparece abajo:")
console.log(btnAccion);

// 2.- Añadimos funcionalidad al boton 
btnAccion.addEventListener("click", accion);

