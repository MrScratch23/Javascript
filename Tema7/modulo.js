"use strict";


console.log("Probando las importaciones de un módulo autónomo");
alert("Bienvenido");

// importación del módulo cuadrado.js


import {cuadrado, doble, autor} from './cuadrado.js';
// importar todo el modulo
// import * as moduloCuadrado from './cuadrado.js';

document.querySelector("#btnAccion").addEventListener("click", e=>{
  console.log("Botón pulsado");
  alert(cuadrado(7)+ " de parte de "+ autor);
  // alert(moduloCuadrado.cuadrado(7)+ " de parte de "+ moduloCuadrado.autor );

});