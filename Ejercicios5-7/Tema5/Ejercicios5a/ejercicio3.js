"use strict";


document.addEventListener('contextmenu', e => {
    e.preventDefault();
    if (e.target.tagName === "P") {
       const menuContextual = document.querySelector("#menuContextual");
       menuContextual.classList.toggle('oculto');
   

    }

    const textoParrafo = document.querySelector("#textoParrafo");

    const btnCursiva = document.querySelector("#btnCursiva");
       btnCursiva.addEventListener('click', () =>{
        textoParrafo.style.fontStyle = "italic";
       });

       const btnNegrita = document.querySelector("#btnNegrita");
       btnNegrita.addEventListener('click', () =>{
        textoParrafo.style.fontWeight = "bold";
       });

})