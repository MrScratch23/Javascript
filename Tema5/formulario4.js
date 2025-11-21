"use strict";

let helados = []


document.querySelector("#buttons").addEventListener('click', e => {
const sabor = document.querySelector("#flavorSelect").value;
const puntos = document.querySelector("[name='rating']:checked");

    let helado = [sabor, puntos];
    helados.push(helado);

})

document.querySelector("#resultsBtn").addEventListener('click', e => {
    let sabores = []
    sabores = document.querySelectorAll("#flavorSelect");


})