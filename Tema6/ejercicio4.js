"use strict";


 
    const listaAprobados = document.querySelector("#listaAprobados");
    const listaSuspenso = document.querySelector("#listaSuspensos");
    const listaAlumnos = document.querySelector("#listaAlumnos");

document.querySelector("#listaAlumnos").addEventListener('click', e => {
    const estado = document.querySelector("[name='estado']:checked").value;
if (e.target.tagName === "LI") {
  

    let alumno = e.target;
    
    if (estado === "aprobado") {
   

    listaAprobados.append(alumno);
    }

    if (estado === "suspenso") {


    listaSuspenso.prepend(alumno);
    }

}

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


})