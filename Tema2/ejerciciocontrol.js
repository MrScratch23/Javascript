"use strict";



// Funciones

function getPH() {

   const phAgua = document.querySelector("#txtPH").valueAsNumber;


    let solucion = " ";



    if (phAgua >= 6.5 && phAgua <= 8.5) {
        
        solucion = "<p>El ph del agua es neutro</p>";
    }

    if (phAgua <= 11 && phAgua >= 8.5) {
        solucion = "ligeramente alcalino"
    }

    if (phAgua > 11) {
        solucion = "muy alcalino"
    }

    if (phAgua <= 6.5 && phAgua <= 3.5) {
        solucion = "ligeramente acido"
    }
    if (phAgua < 3.5) {
        solucion = " muy acido"
    }

    const resultadoPH = document.querySelector("#resultadoPH");

    resultadoPH.innerHTML = `<p> El ph del agua es: ${solucion}</p>`;
    
}


// Main

const btnAgua = document.querySelector("#btnAgua");

btnAgua.addEventListener('click', getPH);
