"use strict";

const resultado = document.querySelector("#resultado");

resultado.children[2].textContent = "Lista de animales"

resultado.children[1].lastElementChild.textContent = "Lobo";

resultado.children[1].children[2].children[0].textContent = "de agua";

console.log(resultado.lastElementChild.textContent);