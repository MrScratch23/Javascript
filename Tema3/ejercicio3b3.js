"use strict";



//////////////////////////
// FUNCTION
///////////////////


/**
 * Añade un nuevo fichaje al array de fichajes del localStorage. Cada fichaje se va a guardar
 * como el timeStamp del momento en el que se pulsó el botón
 */
function fichar(){
  // 1. Cargar datos existentes
  let arrFichajesEntrada = localStorage.entradas ? JSON.parse(localStorage.entradas) : [];
  let arrFichajesSalida = localStorage.salidas ? JSON.parse(localStorage.salidas) : [];
  // desahibilitar el boton 
 const btnFichar = document.querySelector("#btnFichar");
  btnFichar.disabled = true;

  const tipoSeleccionado = document.querySelector('input[name="tipoFichaje"]:checked').value;

  // 2. Validar secuencia ANTES de guardar
  const numEntradas = arrFichajesEntrada.length;
  const numSalidas = arrFichajesSalida.length;
  
  if (tipoSeleccionado === "entrada" && numEntradas > numSalidas) {
    arrFichajesSalida.push(null);
  }
  
  if (tipoSeleccionado === "salida" && numSalidas >= numEntradas) {
    arrFichajesEntrada.push(null);
  }

  // 3. Guardar nuevo fichaje
  let nuevoFichaje = Date.now();
  
  if (tipoSeleccionado === "entrada") {
    arrFichajesEntrada.push(nuevoFichaje);
  } else {
    arrFichajesSalida.push(nuevoFichaje);
  }

  // 4. Guardar todo en localStorage
  localStorage.entradas = JSON.stringify(arrFichajesEntrada);
  localStorage.salidas = JSON.stringify(arrFichajesSalida);
  
  const todosLosFichajes = arrFichajesEntrada.concat(arrFichajesSalida);
  localStorage.fichajes = JSON.stringify(todosLosFichajes);


 setTimeout(() => {
    btnFichar.disabled = false;
  }, 2000);

}









/**
 * Muestra los fichajes en forma de lista en una división del HTML
 */
function mostrar(){
  const divFichajes = document.querySelector("#divFichajes");
  
  if( !localStorage.fichajes ){
    divFichajes.innerHTML = "<p><strong>Atención</strong>: Todavía no se ha guardado ningún fichaje.</p>";
    return;
  }

  const arrFichajes = JSON.parse( localStorage.fichajes );
  let sol = "<ul>";

  for (let i = 0; i < arrFichajes.length; i++) {
    if (arrFichajes[i] === null) {
      sol += `<li>Fichaje olvidado</li>`;
    } else {
      const fichaje = new Date( arrFichajes[i] );
      sol += `<li>${ fichaje.toLocaleString() }</li>`;
    }
  }

  sol += "</ul>";
  divFichajes.innerHTML = "<h3>Fichajes</h3>" + sol;
}
/**
 * Elimina todos los fichajes del localStorage
 */
function resetear(){
  // Eliminamos el array de fichajes...
  localStorage.removeItem("fichajes");
  // ...O directamente eliminamos todo lo que haya en el localStorage
  //localStorage.clear();
}



//////////////////////////
// MAIN
//////////////////

document.querySelector("#btnFichar").addEventListener("click", fichar);
document.querySelector("#btnMostrar").addEventListener("click", mostrar);
document.querySelector("#btnResetear").addEventListener("click", resetear);


