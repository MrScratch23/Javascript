"use strict";

// funciones
function validarErrores() {
    
    // Recuperamos las etiquetas
    const txtNombre = document.querySelector("#txtNombre");
    const txtEdad = document.querySelector("#txtEdad");
    const txtCurso = document.querySelector("#txtCurso");
    const txtPassword1 = document.querySelector("#txtContraseña");
    const txtPassword2 = document.querySelector("#txtContraseñaSegura");
    const divErrores = document.querySelector("#errores");

    // Recuperamos los valores
    const nombre = txtNombre.value;
    const edad = txtEdad.valueAsNumber;
    const curso = txtCurso.value;
    const pw1 = txtPassword1.value;
    const pw2 = txtPassword2.value;

    // Creo la variable donde se van a guardar los errores
    let errores = "";

    // Comprobamos si están vacíos el nombre, edad y turno
    if (nombre === "" || Number.isNaN(edad) || curso === "") {
        errores += "<p>Deben rellenarse todos los campos.</p>";
    }

    // Comprobamos si el nombre es mayor de 20
    if (nombre.length > 20) {
        errores += "<p> El nombre no puede tener más de 20 caracteres</p>";
    }

    if (edad < 18 || edad > 67) {
        errores += "<p> La edad debe estar comprendida entre 18 y 67 años</p>";
    }

    if (curso !== "Mañana" && curso !== "Tarde") {
        errores += "<p> Los turnos son Mañana y Tarde. Vigile las mayúsculas.</p>";
    }

    if (pw1.length < 6 || pw1 !== pw2) {
        errores += "<p> Las contraseñas deben coincidir y tener al menos 6 caracteres </p>";
    }

    // Si se ha producido algún error, la cadena de caracteres errores no estará vacía
    if (errores !== "") {
        divErrores.innerHTML = errores;
    } else {
        divErrores.innerHTML = "";
    }

    
}

// main
const btnValidar = document.querySelector("#btnValidar");
btnValidar.addEventListener('click', validarErrores);
