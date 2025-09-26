"use strict"

/**
 * Reemplaza caracteres de un texto según dos cadenas de referencia.
 * 
 * @param {String} texto - Texto original.
 * @param {String} textoAReemplazar - Caracteres que serán reemplazados.
 * @param {String} textoAnterior - Caracteres por los cuales se reemplazará.
 */
function reemplaza(texto, textoAReemplazar, textoAnterior) {
    // Limpiar espacios y hacer el texto modificable
    let textoLimpio = texto.replaceAll(" ", "").trim();

    // Validar que las longitudes coincidan
    if (textoAReemplazar.length !== textoAnterior.length) {
        alert("Error en la longitud");
        return;
    }

    // Reemplazar cada letra según correspondencia
    for (let i = 0; i < textoAReemplazar.length; i++) {
        const letraAReemplazar = textoAReemplazar[i];
        const letraAnterior = textoAnterior[i];

        // Reemplazar todas las ocurrencias de la letra
        textoLimpio = textoLimpio.replaceAll(letraAReemplazar, letraAnterior);
    }

    alert(`El texto resultante es: ${textoLimpio}`);
}

// Main
reemplaza("pues yavestruz", "eus", "*xp");
