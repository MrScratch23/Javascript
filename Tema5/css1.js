"use strict";


document.querySelector("#btnCambio").addEventListener('click', e => {
    // #47adad; color nuevo



    const botones = document.querySelectorAll("button");

    for (const boton of botones) {
        boton.style.backgroundColor = "#47adad";
    }

})


// Botón de modo oscuro/claro
document.querySelector("#btnModo").addEventListener('click', e => {
    const link = document.querySelector("#theme-styles");
    
    if (link.getAttribute("href") === "css1claro.css") {
        link.setAttribute("href", "css1oscuro.css");
    } else {
        link.setAttribute("href", "css1claro.css");
    }
});