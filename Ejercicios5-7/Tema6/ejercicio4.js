"use strict";


document.querySelector("#listaAlumnos").addEventListener('click', e => {

    const listaAprobados = document.querySelector("#listaAprobados"); 
    const listaSuspensos = document.querySelector("#listaSuspensos");
    let alumno = e.target;
    
    if (e.target.tagName === "LI") {
        const radioValue = document.querySelector('input[name="estado"]:checked')?.value;
        if (!radioValue) {
            alert("Selecciona una opción");
            return;
        }    

        if (radioValue === "aprobado") {
            listaAprobados.appendChild(alumno);
        }

        if (radioValue === "suspenso") {
            listaSuspensos.append(alumno);
        }

    }
})

document.querySelector("#listaSuspensos").addEventListener('click', e => {
        
        let alumno = e.target;

    if (e.target.tagName === "LI") {
         listaAprobados.append(alumno);
    }

})

document.querySelector("#listaAprobados").addEventListener('click', e => {
        
        let alumno = e.target;

    if (e.target.tagName === "LI") {
         listaAlumnos.append(alumno);
    }

})


