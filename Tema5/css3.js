"use strict";

let arrayLista = []

const pintarLista = function(arrayLista) {
 let html = ``;

 for (const e of arrayLista) {


    html += `<li>${e}</li>`
 }

const lista = document.querySelector("#lista");
lista.innerHTML = html;

};


document.querySelector("#btnAnadir").addEventListener('click', e => {

const texto = document.querySelector("#texto").value.trim();
    arrayLista.push(texto);
    pintarLista(arrayLista);

})



document.querySelector("#btnColorear").addEventListener('click', e => {
    const items = document.querySelectorAll("#lista li");
    
    for (let i = 0; i < items.length; i++) {
        if (arrayLista[i].length % 2 === 0) {
            items[i].style.backgroundColor = "goldenrod";
           
        } else {
            items[i].style.backgroundColor = "red";
            items[i].style.color = "white";
        }
    }
});

