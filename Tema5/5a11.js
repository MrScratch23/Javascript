"use strict";

const gestionarDatos = (datosEnTexto) => {
    try {
        const datos = JSON.parse(datosEnTexto);
        console.log(datos);
        // Aquí puedes continuar con tu lógica para mostrar en la tabla
    } catch (error) {
        console.error("Error al parsear JSON:", error);
        alert("El archivo no tiene un formato JSON válido");
    }
}

const archivo = document.querySelector("#json-file"); // Faltaba #
const tabla = document.querySelector("#table-body"); // Faltaba #

archivo.addEventListener("change", async () => {
    const [file] = archivo.files;

    if (file) {
        // Verificar que sea un archivo JSON
        if (file.type === "application/json" || file.name.endsWith('.json')) {
            gestionarDatos(await file.text());
        } else {
            alert("Por favor, selecciona un archivo JSON válido");
        }
    }
});
