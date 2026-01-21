"use strict";

// Añadir constante que falta
const DIALOGO_ERROR = "ERROR";

const añadirElementoDelegadoTabla = tabla => {
    tabla.addEventListener('click', async e => {
       if (e.target.tagName != "TR" && e.target.tagName != "TD") return; 
       
       let id_usuario;
       if (e.target.tagName == "TR") {
           id_usuario = e.target.dataset.id;
       }
       else {
        id_usuario = e.target.closest("tr").dataset.id;
       }

       try {
        
        const response = await fetch("https://jsonplaceholder.typicode.com/users/"+id_usuario);

        if (!response.ok) {
            throw new Error("No se pudieron recuperar los datos del usuario " +id_usuario);
        }
        const jsonUsuario = await response.json();

        crearDialog(`${jsonUsuario.name} \n Compañia: ${jsonUsuario.company.name}`);

       }
       catch(error) {
        crearDialog(error.message, DIALOGO_ERROR);
       }
       
    })
}

const crearDialog = (mensaje, tipo) => {
    let dialog = document.createElement("dialog");

    const h2 = document.createElement("h2");
    if (tipo === DIALOGO_ERROR) {
        h2.textContent = "Error";
        h2.style.color = "#881111"
    } else {
        h2.textContent = "Resultado";
    }
    
    // CORREGIDO: Mover la creación del párrafo fuera del else
    const p = document.createElement("p");
    p.textContent = mensaje;
    dialog.appendChild(h2);
    dialog.appendChild(p);
    
    const botonCerrar = document.createElement("button");
    botonCerrar.textContent = "Cerrar";
    botonCerrar.addEventListener("click", () => {
        dialog.close();
        dialog.remove();
    });

    dialog.appendChild(botonCerrar);
    document.body.appendChild(dialog);
    dialog.showModal();     
}

async function generarTabla() {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) throw new Error("Error: " + response.statusText);

    const oJson = await response.json();

    const tabla = document.createElement('table');
    tabla.className = 'mi-tabla';
    tabla.id = 'tabla-datos';

    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');

    const th1 = document.createElement('th');
    th1.textContent = 'Nombre';
    trHead.appendChild(th1);

    const th2 = document.createElement('th');
    th2.textContent = 'Email';
    trHead.appendChild(th2);

    const th3 = document.createElement('th');
    th3.textContent = 'Sitio Web';
    trHead.appendChild(th3);

    const th4 = document.createElement('th');
    th4.textContent = "Ciudad";
    trHead.appendChild(th4);

    thead.appendChild(trHead);
    tabla.appendChild(thead);

    const tbody = document.createElement('tbody');

    for (const elem of oJson) {
        const tr = document.createElement('tr');
        tr.dataset.id = elem.id;

        const tdNombre = document.createElement('td');
        tdNombre.textContent = elem.name;  
        tdNombre.className = 'nombre';
        tr.appendChild(tdNombre);

        const tdEmail = document.createElement('td');
        tdEmail.textContent = elem.email;  
        tdEmail.className = 'email';
        tr.appendChild(tdEmail);

        const tdSitioWeb = document.createElement('td');
        tdSitioWeb.textContent = elem.website;
        tdSitioWeb.className = 'website';
        tr.appendChild(tdSitioWeb);

        const tdCiudad = document.createElement('td');
        tdCiudad.textContent = elem.address.city;  
        tdCiudad.className = "ciudad";
        tr.appendChild(tdCiudad);

        tbody.appendChild(tr);
    }

    tabla.appendChild(tbody);
    document.body.appendChild(tabla);
    añadirElementoDelegadoTabla(tabla);

    } catch (error) {
        const errorElement = document.createElement('div');
        errorElement.textContent = error.message;
        errorElement.style.color = 'red';
        document.body.appendChild(errorElement);
    }
}

generarTabla();