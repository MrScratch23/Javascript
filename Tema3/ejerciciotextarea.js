"use strict";



// funciones

function guardarTexto() {
    const textArea = document.querySelector("#textArea")
    const txtNota = document.querySelector("#texto");
    const nota = txtNota.value.trim();
    const area = textArea.value;
    

       
    const textoGuardado = JSON.parse(localStorage.getItem("texto")) || [];

   

   // agregar con push 
    textoGuardado.push({ titulo: nota, contenido: area });

    
    localStorage.setItem("texto", JSON.stringify(textoGuardado));

    txtNota.value = "";
    textArea.value = "";

    
}    



function mostrarTexto() {

    const textArea = document.querySelector("#textArea");
    const notasGuardadas = JSON.parse(localStorage.getItem("texto"));

    
    let sol = "";
    for (let i = 0; i < notasGuardadas.length; i++) {
        sol += "Título: " + notasGuardadas[i].titulo + "\n";
        sol += "Contenido: " + notasGuardadas[i].contenido + "\n\n";
    }

    // Mostrar el contenido guardado en una alerta
   textArea.innerHTML = sol;

    
}

function eliminar() {
localStorage.clear();
    
}


// main

const btnGuardar = document.querySelector("#btnGuardar");
btnGuardar.addEventListener('click', guardarTexto);
const btnMostrar = document.querySelector("#btnMostrar");
btnMostrar.addEventListener('click', mostrarTexto);
const btnEliminar = document.querySelector("#btnEliminar");
btnEliminar.addEventListener('click', eliminar);