"use strict";

// funciones


const mostrarAlta = function() {
    const localizador = document.querySelector("#txtLocalizador").value.trim();
    const anio = document.querySelector("#lstAnio").value.trim();
    const tipoBicicleta = document.querySelector('input[name="rbtTipoBicicleta"]:checked')?.value;
    if (!tipoBicicleta) {
        alert("Selecciona una opción");
        return;
    }

    const suspensiones = document.querySelector("#txtSuspensiones").valueAsNumber;
    const platos = document.querySelector("#txtPlatos").valueAsNumber;

    if (localizador === "" || anio === "" || tipoBicicleta === "" || suspensiones === "" || platos === "") {
        alert("Todos los campos deben estar rellenos.");
    }



};

const mostrarVenta = function() {
 
};

const mostrarTotales = function() {
 
};

const mostrarListado = function() {
  
};





// main


const btnMostrarAlta = document.querySelector("#btnMostrarAlta");
const btnMostrarVenta = document.querySelector("#btnMostrarVenta");
const btnMostrarTotales = document.querySelector("#id");
const btnMostrarListado = document.querySelector("#btnMostrarListado");


btnMostrarAlta.addEventListener('click', mostrarAlta);
btnMostrarVenta.addEventListener('click', mostrarVenta);
btnMostrarTotales.addEventListener('click', mostrarTotales);
btnMostrarListado.addEventListener('click', mostrarListado)