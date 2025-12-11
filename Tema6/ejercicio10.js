"use strict";


const listado = document.querySelector("#listado");


const agregar = document.querySelector("#agregar").addEventListener('click', e => {

    const texto = document.querySelector("#texto").value.trim();
    let p = document.createElement("p");
    p.textContent = texto;
    listado.append(p);


});

document.querySelector("#listado").addEventListener('click', e => {
    const checkbox = document.querySelector("[name='direccion']");
    
    if (e.target.tagName != "P") return;
    const p = e.target;
    
    if (checkbox.checked && checkbox.value === "arriba") {
        p.previousElementSibling?.before(p);
    } else {
        p.nextElementSibling?.after(p);
    }
});