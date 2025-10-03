"use strict";

// guarda el color en cookie y aplica el fondo
function conseguirCookie() {
    const select = document.querySelector("#color");
    const color = select.value;

    let colorCSS = "";
    if (color === "rojo") {
        colorCSS = "red";
    } else if (color === "azul") {
        colorCSS = "blue";
    }

    // IMPORTANTE: usar path=/ para que se lea siempre desde cualquier ruta
    document.cookie = "colorGuardado=" + colorCSS + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
    document.body.style.backgroundColor = colorCSS;

    alert("Color cambiado a: " + color);
}

// funcion para leer cookie por nombre
function obtenerCookie(nombre) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(nombre + '=')) {
            return cookie.substring((nombre + '=').length);
        }
    }
    return null;
}

// función para aplicar el color guardado al cargar la página
function aplicarColorGuardado() {
    const colorGuardado = obtenerCookie("colorGuardado");

    if (colorGuardado) {
        document.body.style.backgroundColor = colorGuardado;

       
    }
}


const btnCambiar = document.querySelector('#btnCambiar');
btnCambiar.addEventListener('click', conseguirCookie);

// Al cargar la página, aplicar el color guardado, para eso podemos usar el domcontent
document.addEventListener('DOMContentLoaded', aplicarColorGuardado);

