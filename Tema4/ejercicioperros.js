"use strict";

// funciones

let perros = [];
const lista = document.querySelector("#lista");

function Perro (nombre, edad, raza) {
this.nombre = nombre;
this.edad = edad,
this.raza = raza;
};

Perro.prototype.mostrarDatos = function () {
  return `Nombre: ${this.nombre}, Edad: ${this.edad}, Raza: ${this.raza}`;
}

  


const añadirPerro = function() {


const txtPerro = document.querySelector("#nombre");
const perroNombre = txtPerro.value.trim();
const txtEdad = document.querySelector("#edad");
const edad = txtEdad.value.asNumber;
const tipoRaza = document.querySelector("#raza").value.trim();


// validaciones basicas 

if (!perroNombre) {
    lista.innerHTML = "Por favor, introduce un nombre para el perrete.";
  return;
}

if (!edad || edad <0) {
  lista.innerHTML = "Por favor, introduce una edad correcta para el perrete.";
  return;
  
}

if (!tipoRaza) {
    lista.innerHTML = "Por favor, introduce una raza para el perrete.";
  return;
}

// verificar si el perrete ya existe

if (perros.some(perro => perro.nombre.toLowerCase() === perroNombre.toLowerCase)) {
  lista.innerHTML = "El perrete ya esta registrado.";
  return;
}

let perro = new Perro (perroNombre, edad, tipoRaza);
perros.push(perro);

innerHTML = `${perroNombre} añadido correctamente!`;

// limpiar campos

document.querySelector("#nombre").value = "";
document.querySelector("edad").value = "";


 
};

const mostrarPerros = function() {

let sol = "";

if (perros.length === 0) {
  lista.innerHTML = " <p> No hay perretes registrados todavia. </p>";
  return;
}


  sol += "<ol>"


  for (const perro of perros) {
    sol += `<li>${perro.mostrarDatos()}</li>`;
    
  }

  sol += "</ol>";

  lista.innerHTML = sol;
  
};
  


const mostrarEdad = function() {

  if (perros.length === 0) {
  lista.innerHTML = " <p> No hay perretes registrados todavia. </p>";
return; }

let sol = "";

const perrosOrdenados = perros.toSorted((a,b) => a.edad - b.edad);

sol = "<ol>";

 for (const perro of perros) {
    sol += `<li>${perro.mostrarDatos()}</li>`; 
  }

  sol += "</ol>";

  lista.innerHTML = sol;
  
};

const mostrarRaza = function() {


  let sol = "";

    if (perros.length === 0) {
  lista.innerHTML = " <p> No hay perretes registrados todavia. </p>";
return; }



const perrosOrdenadosRaza = perros.toSorted((a, b) => a.raza.localeCompare(b.raza));

sol += "<ol>";

for (const perro of perros) {
    sol += `<li>${perro.mostrarDatos()}</li>`;
    
  }

  sol += "</ol>";

  lista.innerHTML = sol;
  
  
};



// main



const btnAñadir = document.querySelector("#btnAñadir");
const btnMostrar = document.querySelector("#btnMostrar");
const btnEdad = document.querySelector("#btnEdad");
const btnRaza = document.querySelector("#btnRaza");

btnAñadir.addEventListener('click', añadirPerro);
btnMostrar.addEventListener('click', mostrarPerros);
btnEdad.addEventListener('click', mostrarEdad);
btnRaza.addEventListener('click', mostrarRaza);