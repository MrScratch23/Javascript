"use strict";

document.addEventListener('DOMContentLoaded', function() {
    const yearInput = document.getElementById('txtAnoNacimiento');
    const currentYear = new Date().getFullYear();
    yearInput.max = currentYear;
});

const errores = [];

document.querySelector("#btnEnviar").addEventListener('click', e => {
    const dialogo = document.querySelector("#dialogo");    
    const dialogoContent = document.querySelector("#dialogo-content"); // CORREGIDO: con guión
    const pin1 = document.querySelector("#txtPIN1").value;
    const pin2 = document.querySelector("#txtPIN2").value;
    const txtNickname = document.querySelector("#txtNickname");
    const radioDiaNacimiento = document.querySelector("[name='radioDiaNacimiento']:checked");
    const txtDiaNacimiento = document.querySelector("#txtDiaNacimiento");
    const txtMesNacimiento = document.querySelector("#txtMesNacimiento");
    const txtAnoNacimiento = document.querySelector("#txtAnoNacimiento");
    const coloresSeleccionados = document.querySelectorAll('input[type="checkbox"]:checked');
    
    // Limpiar errores anteriores
    errores.length = 0;

    // Validar nickname
    if (!txtNickname.checkValidity()) {
        let error = "El nombre no está escrito de forma correcta. Debe contener entre 3 y 8 caracteres, no puede empezar por un número, están prohibidos los siguientes caracteres: .,:;";
        errores.push(error);
    }

    // Validar PINs
    if (pin1 !== pin2) {
        let error = "El pin debe coincidir";
        errores.push(error);
    }

    // Validar formato de PINs (4 dígitos)
    if (!/^\d{4}$/.test(pin1) || !/^\d{4}$/.test(pin2)) {
        let error = "El PIN debe contener exactamente 4 dígitos";
        errores.push(error);
    }

    // Validar fecha de nacimiento si se seleccionó "Sí"
    if (radioDiaNacimiento && radioDiaNacimiento.value === "Sí") {
        if (!txtDiaNacimiento.value || !txtMesNacimiento.value || !txtAnoNacimiento.value) {
            let error = "Debe completar la fecha de nacimiento";
            errores.push(error);
        }

        if (!txtAnoNacimiento.checkValidity()) {
            let error = "El año debe ser introducido de forma correcta.";
            errores.push(error);
        }
        if (!txtDiaNacimiento.checkValidity()) {
            let error = "El día debe ser introducido de forma correcta.";
            errores.push(error);
        }
        if (!txtMesNacimiento.checkValidity()) {
            let error = "El mes debe ser introducido de forma correcta.";
            errores.push(error);
        }
    }

    // Validar colores (SIEMPRE se ejecuta)
    if (coloresSeleccionados.length !== 2) {
        let error = "Debe escoger exactamente dos colores.";
        errores.push(error);
    }

    // Mostrar errores en el diálogo
    dialogoContent.innerHTML = "";
   
    if (errores.length !== 0) {
        e.preventDefault(); // Prevenir envío del formulario
        
        let html = `<h3>Errores encontrados:</h3><ul>`;
        for (const error of errores) {
            html += `<li>${error}</li>`;
        }
        html += `</ul>`;
        
        dialogoContent.innerHTML = html;
        dialogo.showModal();
    } else {
        // Si no hay errores, el formulario se envía normalmente
        document.querySelector("#frmEnviar").submit();
    }
});

// Opcional: agregar botón para cerrar el diálogo
document.querySelector("#dialogo").addEventListener('click', function(e) {
    if (e.target === this) {
        this.close();
    }
});