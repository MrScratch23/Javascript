"use strict"

/**
 * 
 * @param {String} texto - Texto original.
 * @param {String} textoAReemplazar - Caracteres que serán reemplazados.
 * @param {String} textoAnterior - Caracteres por los cuales se reemplazará.
 */
function reemplaza(texto, textoAReemplazar, textoAnterior) {
    
    let textoLimpio = texto.replaceAll(" ", "").trim();

    // Validar que las longitudes coincidan
    if (textoAReemplazar.length !== textoAnterior.length) {
        alert("Error en la longitud");
        return;
    }


    for (let i = 0; i < textoAReemplazar.length; i++) {
        const letraAReemplazar = textoAReemplazar[i];
        const letraAnterior = textoAnterior[i];

       
        textoLimpio = textoLimpio.replaceAll(letraAReemplazar, letraAnterior);
    }

    alert(`El texto resultante es: ${textoLimpio}`);
}

// Main
reemplaza("pues yavestruz", "eus", "*xp");
