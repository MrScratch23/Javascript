"use strict";

function esPalindromo(texto) {
    texto = texto.trim().toLowerCase();
    // expresion para quitar todos los espacios
    texto = texto.replace(/\s+/g, "");

    let contadorPalindromo = 0;
    let longitud = texto.length;

    for (let i = 0; i < longitud; i++) {
        if (texto[i] === texto[longitud - 1 - i]) {
            contadorPalindromo++;
        }
    }

    if (contadorPalindromo === longitud) {
        return "Es palíndromo";
    } else {
        return "No es palíndromo";
    }
}

let texto = "arriba la birra";
console.log(esPalindromo(texto));  
