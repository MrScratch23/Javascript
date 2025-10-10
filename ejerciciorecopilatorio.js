"use strict"

// funciones

const crearTarea = () => {
// Recuperamos el texto de la tarea que el usuario quiere crear
const txtTarea = document.querySelector("#tarea");
const textoTarea = tarea.value.trim();

// Comprobamos que el cuadro de texto tenga algo escrito
// con !textoTarea para saber si es falso

if (!textoTarea) { // si el usuario no ha escrito nada salimos de la funcion
  return ;  
}

// si llegamos aqui es que hay un texto en la tarea

// Lo añadimos la arrray de tareas
    arrTareas.push(textoTarea);

// Guardamos el array de tareas en el local storage, STRINGFY ES PARA GUARDAR UN ARRAY EN EL LOCAL STORAGE, PARA TRANSFORMARLO

localStorage.tareas = JSON.stringify (arrTareas);

// Mostramos la lista de tareas en la division
const divTareasPorHacer = document.querySelector("#divTareasPorHacer");

mostrarTareas (arrTareas, divTareasPorHacer);
    

   
}

const mostrarTareas = function (arrTareas, divTareasPorHacer) {




let sol = "<ul>";


 for (const tarea of arrTareas) {
    sol+=`<li>${tarea}</li>`;
 }
 sol += "</ul>";


divTareasPorHacer.innerHTML = sol;

}






// main

/// localstorage.tareas  =["bajar la basura", "comprar el pan"]
/// localstorage.tareasCompletadas = ["Sacar a la perra"]

// Recuperamos el boton y le añadimos funcionalidad
const btnCrearTarea = document.querySelector("#btnCrearTarea");
btnCrearTarea.addEventListener('click', crearTarea);


// Comprobamos si ya existe tareas almacenadas en el local storage
let arrTareas; // el array con las tareas a realizar


if (localStorage.tareas) {
arrTareas = JSON.parse (localStorage.tareas);

const divTareasPorHacer = document.querySelector("#divTareasPorHacer");
mostrarTareas (arrTareas, divTareasPorHacer);
    


} else {
    arrTareas = [];

}

// comprobamos si existen las tareas completeadas
let completadas; // array con las tareas completadas
if (localStorage.completadas) {
    completadas = JSON.parse (localStorage.tareas);

const divCompletadas = document.querySelector("#divCompletadas");
mostrarTareas (completadas, divCompletadas);
    


} else {
    completadas = [];
    
}