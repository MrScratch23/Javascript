"use strict";

let arrTareas = localStorage.tareas;

if (!arrTareas) {
    arrTareas = [];
} else {
    arrTareas = JSON.parse(localStorage.getItem("arrTareas"));
}


const addTaskBtn = document.querySelector("#addTaskBtn").addEventListener('click', e => {

    const taskInput = document.querySelector("#taskInput").value.trim();

    tareas.push(taskInput);

    localStorage.setItem("tareas", JSON.stringify(tareas));
    let obtenido = JSON.parse(localStorage.getItem("tareas"));
    console.log(obtenido);

    const dialog = document.createElement("dialog");
    const h2 = document.createElement("h2");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const p = document.createElement("p");
    p.textContent = "Tarea:"
    label.append(p, input);

    const divBotones = document.createElement("div");
    divBotones.style = "display:flex;gap: 1rem; justify-content:center";

    const buttonAceptar = document.createElement("button");
    const buttonCancelar = document.createElement("button");

    divBotones.append(buttonAceptar, buttonCancelar);

    dialog.append(h2, label, divBotones);

    document.body.append(dialog);
    dialog.showModel();

    dialog.addEventListener("close", e=> dialog.remove());

    buttonCancelar.addEventListener('click', e=>{
        dialog.closest();
        dialog.remove();
    })

    buttonAceptar.addEventListener('click', e=> {
        const taskInput = input
    } )


});

// localStorage.setItem("tareas", JSON.stringify(tareas));

