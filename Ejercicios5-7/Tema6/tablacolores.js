
"use strict";

const tabla = document.querySelector("#tablaColores");

tabla.addEventListener('click', e => {
    const divAcción = document.querySelector("#divAcción");


    if (e.target.tagName === "DIV") {
        let color = e.target.cloneNode(true);

        let p = document.createElement("p");
        p.textContent = "Agregado color: " + e.target.textContent;
        divAcción.append(p);
        
        tabla.append(color);
        // e.target.after(color);
    }

    if (e.target.tagName === "P") {
        const colorBorrado = tabla.lastElementChild.textContent;
        tabla.lastElementChild.remove();
        let p = document.createElement("p");
        p.textContent = "Eliminado ultimo color: " + colorBorrado;
        divAcción.append(p);
        
    }
});