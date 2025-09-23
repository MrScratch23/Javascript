"use strict";

// Funciones

function mostrarTabla() {
    const numero = document.querySelector("#txtMutiplicacion");
    const numeroAMultiplicar = numero.valueAsNumber;

    let solucion = 
        numeroAMultiplicar + " x 1 = " + (numeroAMultiplicar * 1) + "<br>" +
        numeroAMultiplicar + " x 2 = " + (numeroAMultiplicar * 2) + "<br>" +
        numeroAMultiplicar + " x 3 = " + (numeroAMultiplicar * 3) + "<br>" +
        numeroAMultiplicar + " x 4 = " + (numeroAMultiplicar * 4) + "<br>" +
        numeroAMultiplicar + " x 5 = " + (numeroAMultiplicar * 5) + "<br>" +
        numeroAMultiplicar + " x 6 = " + (numeroAMultiplicar * 6) + "<br>" +
        numeroAMultiplicar + " x 7 = " + (numeroAMultiplicar * 7) + "<br>" +
        numeroAMultiplicar + " x 8 = " + (numeroAMultiplicar * 8) + "<br>" +
        numeroAMultiplicar + " x 9 = " + (numeroAMultiplicar * 9) + "<br>" +
        numeroAMultiplicar + " x 10 = " + (numeroAMultiplicar * 10) + "<br>";

    const tablaMultiplicar = document.querySelector("#tablaMultiplicar");
    tablaMultiplicar.innerHTML = solucion;
}

// Main

const btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", mostrarTabla);