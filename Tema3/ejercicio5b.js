"use strict";

// Funciones

/**
 * 
 * @param {String} regalo
 */

function envolver(regalo) {
   let longitud = regalo.length+4;
   let sol = "*".repeat(longitud);
   sol += '\n* ${regalo} *\n';
   sol += "*".repeat(longitud);
   return sol;
}



// Main


console.log( envolver("reloj") ); // *********\n* reloj *\n*********