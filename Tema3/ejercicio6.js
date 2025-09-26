"use strict";

// Funciones
/**
 * 
 * @param {Array} textoArray 
 */
function textoHTML(textoArray) {
    const solucion = 
`<ul>
  <li>${textoArray[0].replace("*", "").trim()}</li>
  <li>${textoArray[1].replace("*", "").trim()}</li>
  <li>${textoArray[2].replace("*", "").trim()}</li>
  <li>${textoArray[3].replace("*", "").trim()}</li>
</ul>`;

    return solucion;
}

const texto = "* Uno\n* Dos\n* Tres \n* Cuatro\n";
const textoArray = texto.trim().split("\n");

const solucion = textoHTML(textoArray);
console.log(solucion);
