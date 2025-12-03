"use strict";


let resultado = document.querySelector("#resultado");

resultado.firstElementChild.textContent = "Lista de animales";
const listaUl = resultado.firstElementChild.nextElementSibling;

listaUl.lastElementChild.textContent = "Lobo";
//listaUl.lastElementChild.previousElementSibling.firstElementChild.textContent = "de agua";
// mejor manera con children

listaUl.children[2].firstElementChild.textContent = "de agua"

console.log(resultado.lastElementChild.textContent);

let a = document.querySelector("#enlace");
a.href = "www.google.es";

