
"use strict";
// datos de prueba, descomentalos si quieres


let hospital = new Hospital();
let medicos = [];
let citas = [];




// funciones


const altaMedico = function() {
    
    const txtIdMedico = document.querySelector("[name='txtIdMedico']").value;
    const idMedico = parseInt(txtIdMedico);

    const nombre = document.querySelector("[name='txtNombre']").value.trim();
    const txtTelefono = document.querySelector("[name='txtTelefono']").value;

    const telefono = parseInt(txtTelefono);

    const email = document.querySelector("[name='txtEmail']").value.trim();
    const txtColegiado = document.querySelector("[name='txtColegiado']").value;
    
    const numeroColegiado = parseInt(txtColegiado)


    let medico = new Medico(idMedico, nombre, telefono, email, numeroColegiado);

    let mensaje = hospital.altaMedico(medico);
    
    listado.innerHTML = mensaje;
    
  
};


const altaCita = function() {



    const txtIdMedico = document.querySelector("[name='txtIdMedico']").value;
    const idMedico = parseInt(txtIdMedico);
    const txtPaciente = document.querySelector("[name='txtPaciente']").value.trim();
    const txtFecha = document.querySelector("[name='txtFecha']").value;
        // hay que transformar el objeto date, ya lo transformo en tolocale en el metodo row de objetos
        const fecha = new Date(txtFecha);


    const hora = document.querySelector("[name='txtHora']").valueAsNumer;

    const cita = new Cita(idMedico, txtPaciente, fecha, hora);

    let mensaje = hospital.altaCita(cita);

    listado.innerHTML = mensaje;

  
};


const mostrarLista = function() {
  


    listado.innerHTML = hospital.listadoMedicos();
    let boton = `<button id="elemento" type="button" id="btnOrdenarTabla">Ordenar tabla por nombre</button>`;

    listado.innerHTML += "<br>";
    listado.innerHTML += boton;


};

const mostrarCitas = function() {
    
  listado.innerHTML = hospital.listadoCitas();
};

// main

const ordenarNombre = function() {
    listado.innerHTML = hospital.ordenarMedicos("nombre");
    listado.innerHTML += "<br>";
    listado.innerHTML += boton;
};

// botones y funcionalidades


// ocultar y mostrar formularios

const btnFormAltaMedico = document.querySelector("#btnFormAltaMedico").addEventListener('click', (e)=>{
divFrmAltaMedico.classList.remove("ocultar");
divFrmAltaCita.classList.add("ocultar");

});

const btnFormAltaCita = document.querySelector("#btnFormAltaCita").addEventListener('click', (e)=> {
    divFrmAltaCita.classList.remove("ocultar");
    divFrmAltaMedico.classList.add("ocultar");
});


const divFrmAltaCita = document.querySelector("#divFrmAltaCita");
divFrmAltaCita.classList.add("ocultar");

const divFrmAltaMedico = document.querySelector("#divFrmAltaMedico");
divFrmAltaMedico.classList.add("ocultar");
//

// botones de alta y listados

const listado = document.querySelector("#listado");

const btnAltaMedico = document.querySelector("#btnAltaMedico");
btnAltaMedico.addEventListener('click', altaMedico);

const btnAltaCita = document.querySelector("#btnAltaCita");
btnAltaCita.addEventListener('click', altaCita);


const btnListadoMedicos = document.querySelector("#btnListadoMedicos");
btnListadoMedicos.addEventListener('click', mostrarLista);

const btnListadoCitas = document.querySelector("#btnListadoCitas");
btnListadoCitas.addEventListener('click', mostrarCitas);

const btnOrdenarTabla = document.querySelector("#btnOrdenarTabla");
btnOrdenarTabla.addEventListener('click', ordenarNombre);