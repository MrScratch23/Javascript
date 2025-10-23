"use strict"

// funciones


const añadirPerro = function() {
const txtPerro = document.querySelector("#text");
const perroNombre = txtPerro.value;
const txtEdad = document.querySelector("#edad");
const edad = txtEdad.value;
const tipoRaza = document.querySelector("#raza").value;

const perro = {perroNombre, edad, tipoRaza};

perros.push(perro);



  return
};

const mostrarPerros = function() {
  return
};

const mostrarEdad = function() {
  return
};

const mostrarRaza = function() {
  return
};



// main

let perros = [];


const btnAñadir = document.querySelector("#btnAñadir");
const btnMostrar = document.querySelector("#btnMostrar");
const btnEdad = document.querySelector("#btnEdad");
const btnRaza = document.querySelector("#btnRaza");

btnAñadir.addEventListener('click', añadirPerro);
btnMostrar.addEventListener('click', mostrarPerros);
btnEdad.addEventListener('click', mostrarEdad);
btnRaza.addEventListener('click', mostrarRaza);