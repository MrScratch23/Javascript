"use strict";

let redesSociales = [];

const gestionarDatos = (datosEnTexto) => {
    const datos = JSON.parse(datosEnTexto);
    console.log(datos);
    redesSociales = datos.arrRedesSociales;
    pintarTabla(redesSociales);
    return redesSociales;
}

const pintarTabla = function(datos) {
   let html = `<table>
    <thead>
        <tr>
            <th>URL</th>
            <th>Plataforma</th>
            <th>Seguidores</th>
        </tr>
    </thead>
    <tbody>`;

    for (const influencer of datos) {
        html += `<tr>
                <td>${influencer.url}</td>
                <td>${influencer.nombre}</td>
                <td>${influencer.seguidores}</td>
                </tr>`;
    }
    
   html += `</tbody></table>`;
   tabla.innerHTML = html;
};

// diferentes funciones de ordenamiento
const ordenarPorNombre = () => {
    const redesOrdenadas = redesSociales.toSorted((a, b) => 
        a.nombre.localeCompare(b.nombre, "es")
    );
    pintarTabla(redesOrdenadas);
};

const ordenarPorSeguidores = () => {
    const redesOrdenadas = redesSociales.toSorted((a, b) => 
        b.seguidores - a.seguidores 
    );
    pintarTabla(redesOrdenadas);
};

const ordenarPorURL = () => {
    const redesOrdenadas = redesSociales.toSorted((a, b) => 
        a.url.localeCompare(b.url, "es")
    );
    pintarTabla(redesOrdenadas);
};

const archivo = document.querySelector("#json-file"); 
const tabla = document.querySelector("#table-body"); 

// event listeners para diferentes botones
document.querySelector("#redSocial").addEventListener('click', (e) => {
    if (redesSociales.length === 0) {
        alert("Primero carga un archivo JSON");
        return;
    }
    ordenarPorNombre();
});

document.querySelector("#seguidores").addEventListener('click', (e) => {
    if (redesSociales.length === 0) {
        alert("Primero carga un archivo JSON");
        return;
    }
    ordenarPorSeguidores();
});

document.querySelector("#url").addEventListener('click', (e) => {
    if (redesSociales.length === 0) {
        alert("Primero carga un archivo JSON");
        return;
    }
    ordenarPorURL();
});

archivo.addEventListener("change", async () => {
    const [file] = archivo.files;
    if (file && (file.type === "application/json" || file.name.endsWith('.json'))) {
        gestionarDatos(await file.text());
    } else {
        alert("Por favor, selecciona un archivo JSON válido");
    }
});