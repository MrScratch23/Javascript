"use strict";


document.querySelector("#btnAnadir").addEventListener('click', e=> {
    const clase = document.querySelector("#claseInput").value.trim();

     const parrafo = document.querySelector("#parrafo");

    if (clase) {
         parrafo.classList.add(clase);
    }

})



document.querySelector("#btnEliminar").addEventListener('click', e=> {
    const clase = document.querySelector("#claseInput").value.trim();

     const parrafo = document.querySelector("#parrafo");

    if (clase) {
         parrafo.classList.remove(clase);
    }

})