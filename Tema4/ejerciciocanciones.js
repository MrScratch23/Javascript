

"use strict";

// funciones

let arrayFicheros = [];

const añadirCancionFichero = function() {
    
  
  const nombreFichero = document.querySelector("#fichero").value;
  const tamaño = document.querySelector("#tamaño").value;
  const nombreCancion = document.querySelector("#nombreCancion").value;
  const duracion = document.querySelector("#duracion").value;
    


const tipoAñadir = document.querySelector('input[name="tipo"]:checked')?.value;

if (!tipoAñadir) {
    return;
}


   // Convertir a números
  const tamañoNum = parseFloat(tamaño);
  const duracionNum = parseFloat(duracion);

  if (tipoAñadir === "cancion") {
    let cancion = new Cancion (nombreFichero, tamañoNum, nombreCancion, duracionNum);
    arrayFicheros.push(cancion);
       alert("Canción añadida:", cancion);
    
  }

  if (tipoAñadir === "fichero") {
    let fichero = new Fichero (nombreFichero, tamañoNum);
    arrayFicheros.push(fichero);
       alert("Fichero añadido:", fichero);
   
  }


};

const mostrarCancionFichero = function() {
    const divResultado = document.querySelector("#divResultado");
  let sol = `<ul>`

   for (const fichero of arrayFicheros) {
    sol += `<li>${fichero.getDatos()}</li>`;
   }

   
  sol += `</ul>`;
  
  divResultado.innerHTML = sol;

  
};


// main

const btnAñadir = document.querySelector("#btnAñadir");
btnAñadir.addEventListener('click', añadirCancionFichero);
const btnMostrar = document.querySelector("#btnMostrar");
btnMostrar.addEventListener('click', mostrarCancionFichero);

// Datos de prueba, 3 ficheros y 2 canciones
arrayFicheros.push(new Fichero("documento.txt", 1200));
arrayFicheros.push(new Fichero("imagen.jpg", 2500));
arrayFicheros.push(new Fichero("video.mp4", 15000));
arrayFicheros.push(new Cancion("cancion1.mp3", 3000, "Cancion Uno", 2.10));
arrayFicheros.push(new Cancion("cancion2.wav", 5000, "Cancion Dos", 1.80));