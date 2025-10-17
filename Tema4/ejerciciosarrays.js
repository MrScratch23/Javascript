"use strict";

// funciones


/* const compararArray = function(array1, array2) {
      let resultado = JSON.stringify(array1) === JSON.stringify(array2);
    alert(resultado)
  return resultado;

}; 

/* const camelCase = function(texto) {
  const partes = texto.split("-");
  
  const resultado = partes.map((palabra, index) => {
    if (index === 0) {
      return palabra; // La primera palabra se queda igual
    }
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  }).join("");
  
  alert(resultado);
  return resultado;
}; */

/**
 * 
 * @param {String} nombres 
 * @returns 
 */
/*
const nombresMap = function(nombres) {

  
  let nombresCambiados = nombres.map(n=>n.split(" ").map(p=>p[0].toUpperCase()+p.slice(1).toLowerCase()).join(" "));;

 
  
  return nombresCambiados;
}; */


/* const devolverVocales = function(texto) {

  const vocalesTexto = [];
  const textoSinEspacios = texto.replace(/\s+/g, "");
  const vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
 
  for (const char of textoSinEspacios) {
      if (vocales.includes(char)) {
        vocalesTexto.push(char);
          
      }
  }

  let resultado = JSON.stringify(vocalesTexto)


 return resultado ;
    
  }
*/
  
/* const modificarCoches = function(coches) {
// añadir seat a la segunda posicion
coches.splice(2, 0, "Seat");
// modificar el tercer elemtno para que sea Mitsubisho
coches.splice(3, 1, "Mitsubishi");
// filtrar por coches con mas de cuatro letras:

let newCoches  =  coches.filter(n=>n.length>4 );

  return newCoches;
};
*/

// ejercicio 6 - MAIN PRIMERO
let arrNombres = [];

// Luego las funciones
const añadirTexto = function() {
  const textoNombre = document.querySelector("#txtNombre");
  const textoAAñadir = textoNombre.value.trim();

  if (textoAAñadir === "") {
    alert("El texto no puede estar vacío");
  } else {
    arrNombres.push(textoAAñadir);
    textoNombre.value = "";
    alert("Texto añadido correctamente");
  }
};

const mostrarTexto = function() {
  const divResultado = document.querySelector("#divResultado");
  let sol = "";

  if (arrNombres.length === 0) {
    sol = "No hay elementos que mostrar.";
  } else {
    const arrayOrdenado = [...arrNombres].sort(); // Copia para no modificar original
    
    sol += "<ul>";
    for (const nombre of arrayOrdenado) {
      sol += `<li>${nombre}</li>`;
    }
    sol += "</ul>";
  }

  divResultado.innerHTML = sol;
};

const eliminarTexto = function() {
  const textoNombre = document.querySelector("#txtNombre");
  const textoABorrar = textoNombre.value.trim();

  if (arrNombres.length === 0) {
    alert("El array de nombres está vacío.");
  } else if (textoABorrar === "") {
    alert("Por favor, escribe un texto para eliminar.");
  } else {
    let posicion = arrNombres.indexOf(textoABorrar);
    if (posicion !== -1) {
      arrNombres.splice(posicion, 1);
      alert("Texto borrado correctamente.");
    } else {
      alert("El texto no se encontró en el array.");
    }
  }
  // ❌ NO return aquí
};




// main


// ejercicio 1
/* let array1 = ["Pekachu", "Chorizard", "MEGARAYQUAZA"];
let array2 = ["Pekachu", "Chorizard", "MEGARAYQUAZA"];
compararArray (array1, array2); */

// ejercicio 2

/* let texto = "En-un-lugar-de-la-Mancha";
camelCase(texto); */

// ejercicio 3

/* let nombres =["joRge","ana","PEDRO", "jUAn"]
let nombresCompuestos = ["joRge juAN","ana","PEDRO joSé", "jUAn PeDRo"]

alert(nombresMap(nombres));
alert(nombresMap(nombresCompuestos)); */


// ejercicio 4

/* let vocales = "Hola caracola";
alert(devolverVocales(vocales)); */

// ejercicio 5

/* Crear un programa con un array con una serie de marcas de coches. Añadir una función que reciba el array y haga lo siguiente:

Añada un nuevo elemento en la posición 2 llamado "Seat"
Modifique el tercer elemento para que sea "Mitsubishi"
Devuelva un nuevo array que contenga sólo las marcas de coche cuyo nombre contenga más de 4 letras
*/

// let coches = ['Toyota', 'BMW', 'Mercedes', 'Audi', 'Fiat', "Lamborghini", "Kazuhira"];


// ejercicio 6


const btnGuardar = document.querySelector("#btnGuardar");
btnGuardar.addEventListener('click', añadirTexto);

const btnMostrar = document.querySelector("#btnMostrar");
btnMostrar.addEventListener('click', mostrarTexto);

const btnEliminar = document.querySelector("#btnEliminar");
btnEliminar.addEventListener('click', eliminarTexto);


