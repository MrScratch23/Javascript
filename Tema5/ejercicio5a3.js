
"use strict";

const cambiarCursiva = function() {
   
    const divTexto = document.querySelector("#divTexto > p");
    divTexto.style.fontStyle = "italic";
  
};

const cambiarNegrita = function() {

     
    const divTexto = document.querySelector("#divTexto > p");
    divTexto.style.fontWeight = "bold";
 
};


const btnCursiva = document.querySelector("#btnCursiva");
btnCursiva.addEventListener('click', cambiarCursiva);

const btnNegrita = document.querySelector("#btnNegrita");
btnNegrita.addEventListener('click', cambiarNegrita)
