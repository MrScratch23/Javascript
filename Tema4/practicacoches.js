"use strict";

// funciones
let arrayVehiculos = [];


const añadirVehiculo = function() {
  
const tipoVehiculo = document.querySelector('input[name="tipoVehiculo"]:checked')?.value;
if (!tipoVehiculo) {
    alert("Selecciona una opción");
    return;
}


const marca = document.querySelector("#marca").value;
const modelo = document.querySelector("#modelo").value;
const matricula = document.querySelector("#matricula").value;
const precio = document.querySelector("#precio");

if (marca === "" || modelo === "" || matricula === "" || precio === "") {
    alert("Todas las opciones deben ser rellenadas");
    return;
}

if (tipoVehiculo.toLowerCase === "coche") {
    const tipoCombustible = document.querySelector('input[name="tipoCombustibleCoche"]:checked')?.value;
    if (!tipoCombustible) {
        alert("Selecciona una opción para el combustible");
        return;
    }

    const numeroPuertas = document.querySelector("#numeroPuertas");
    let coche = new Coche(marca, modelo, matricula, precio, tipoCombustible, numeroPuertas);
    arrayVehiculos.push(coche);
}


if (tipoVehiculo.toLowerCase === "motocicleta") {
    const cilindrada = document.querySelector("#cilindrada").valueAsNumber;
    const tipoMoto = document.querySelector("#tipoMoto").value;

    let motocicleta = new Motocicleta(marca, modelo, matricula, precio, cilindrada, deportivo);
    arrayVehiculos.push(motocicleta);
}

};

const listarVehiculos = function() {
  const lista = document.querySelector("#listaVehiculos");

  let sol = `<ul>`

  for (const vehiculo of arrayVehiculos) {
    
  }


};

const venderVehiculo = function() {
  return
};

const calcularImpuestos = function() {
  return
};


// main

const btnAñadir = document.querySelector("#btnAñadir");
const btnListarVehiculos = document.querySelector("#btnListarVehiculos");
const btnVender = document.querySelector("#btnVender");
const btnCalcularImpuestos = document.querySelector("#btnCalcularImpuestos");

btnAñadir.addEventListener('click', añadirVehiculo);
btnListarVehiculos.addEventListener('click', listarVehiculos);
btnVender.addEventListener('click', venderVehiculo);
btnCalcularImpuestos.addEventListener('click', calcularImpuestos);
