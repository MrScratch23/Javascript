"use strict"

// funciones

function fichar() {
    alert(1);
    const fichaje = new Date().toString();
    alert(fichaje);

    // Obtener lo que ya hay guardado, o iniciar un array vacío
    let fechas = JSON.parse(localStorage.getItem("fechas")) || [];

    // Agregar el nuevo fichaje
    fechas.push(fichaje);

    // Guardar el array actualizado
    localStorage.setItem("fechas", JSON.stringify(fechas));
}


function mostrar() {
    const divFichajes = document.querySelector("#divFichajes");

    // Obtener del localStorage la lista de fechas
    let todasFechas = JSON.parse(localStorage.getItem("fechas")) || [];

    // formateado para que se vea bien, añadiendo un boton de vuelta hacia atras
    divFichajes.innerHTML = todasFechas.map(f => `<p>${f}</p>`).join('');
}


function resetear() {
   
    localStorage.clear();
     alert("Local storage borrada");
}


// main

const btnFichar = document.querySelector("#btnFichar");
const btnMostrar = document.querySelector("#btnMostrar");
const btnResetear = document.querySelector("#btnResetear");

btnFichar.addEventListener('click', fichar);
btnMostrar.addEventListener('click', mostrar);
btnResetear.addEventListener('click', resetear);