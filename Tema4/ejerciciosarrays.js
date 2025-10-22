"use strict";

// funciones

// funcion ejercicio 1

/* const compararArray = function(array1, array2) {
      let resultado = JSON.stringify(array1) === JSON.stringify(array2);
    alert(resultado)
  return resultado;

}; 
// funcion ejercicio 2

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

// funcion ejercicio 3
/*
const nombresMap = function(nombres) {

  
  let nombresCambiados = nombres.map(n=>n.split(" ").map(p=>p[0].toUpperCase()+p.slice(1).toLowerCase()).join(" "));;

 
  
  return nombresCambiados;
}; */


// funcion ejercicio 4

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
 
// funcion ejercicio 5

/* const modificarCoches = function(coches) {
// añadir seat a la segunda posicion
coches.splice(2, 0, "Seat");
// modificar el tercer elemtno para que sea Mitsubisho
coches.splice(3, 1, "Mitsubishi");
// filtrar por coches con mas de cuatro letras:

let newCoches  =  coches.filter(n=>n.length>4 );

// añadir la longitud

  a = a.map(m=>[m, m.length]).flat();

  return newCoches;
};
*/




/* 

// funcion ejercicio 6

let arrNombres = [];

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
  
};
*/


// funcion ejercicio 7
/* 
let nombres = [];
let apellidos = [];

const añadirNombre = function() {
    const txtNombre = document.querySelector('#nombre');
    const nombre = txtNombre.value;
    const txtApellido = document.querySelector("#apellido");
    const apellido = txtApellido.value;

    const divErrores = document.querySelector("#divErrores");
    divErrores.innerHTML = "";

    if (nombre === "" && apellido === "") { 
        divErrores.innerHTML = "Los nombres y los apellidos no pueden estar vacios.";
    } else {
        if (nombre) {
            nombres.push(nombre);
        }
        if (apellido) {
            apellidos.push(apellido); 
        }
    }
};

const generarNombre = function() {
    const divErrores = document.querySelector("#divErrores");
    const divResultado = document.querySelector("#divResultado");

    divErrores.innerHTML = "";

    if (nombres.length === 0 && apellidos.length === 0) {
        divErrores.innerHTML = "Error: nombre y/o apellidos vacios.";
        return; 
    }

    let numNombre = parseInt(Math.random() * nombres.length);
    let numApellido = parseInt(Math.random() * apellidos.length);

    let nombreNuevo = nombres[numNombre];
    let apellidoNuevo = apellidos[numApellido];

    let nombreAlAzar = nombreNuevo + " " + apellidoNuevo;
    divResultado.innerHTML = nombreAlAzar;
};




*/


// funcion ejercicio 8 


/* const infoCuenta = function(cuentas) {
  let sumaTotalAcreedores = 0;
  let resultado = "";
for (let i = 0; i < cuentas.length ; i++) {
    let nombreCuenta = cuentas[i][0];
    let usuarioCuenta = cuentas[i][1];
    let saldoCuenta = cuentas[i][2];
    
    let estadoCuenta = "";


    if (saldoCuenta>0) {
      estadoCuenta = "Acreedor";
       sumaTotalAcreedores += saldoCuenta;
    } 
    if (saldoCuenta<0) {
      estadoCuenta = "Deudor";
      break;
      
    }

    if (saldoCuenta === 0) {
      estadoCuenta = "Nulo";
      break;
    }

   resultado += `Cuenta: ${nombreCuenta} | Usuario: ${usuarioCuenta} | Saldo : ${saldoCuenta} | Estado de cuenta: ${estadoCuenta}\n`;

  
}


    resultado += `\nSuma total de acreedores: ${sumaTotalAcreedores}`;

    return resultado;
  
};
*/ 



// funcion ejercicio 9

/*
const agregarPalabra = function() {
  const texto = document.querySelector("#texto");
  const palabra = texto.value;
  const divArrayResultados = document.querySelector("#divArrayResultados");

  palabras.push(palabra)

  let primeraPalabra = palabras[0];
  let ultimaPalabra = palabras [palabras.length-1];
  let numeroPalabras = palabras.length;
  let palabrasOrdenados = palabras.sort();

  let resultado = "";

  resultado += `Primero palabra: ${primeraPalabra} | Ultima palabra: ${ultimaPalabra} | Numero de palabras en el array: ${numeroPalabras} | Palabras ordenadadas alfabeticamente: ${palabrasOrdenados}\n`;


  divArrayResultados.innerHTML = resultado;
};

*/


// funcion ejercicio 10
/*
const convertirNumeros = function() {
  const numeroInput = document.querySelector("#numeroInput");
  const numero = numeroInput.value;
  const divTabla = document.querySelector("#contenedorTabla");
  const arrayNumero = numero.split('');

function obtenerNombre(numero) {
    switch(numero) {
        case '0': return 'cero';
        case '1': return 'uno';
        case '2': return 'dos';
        case '3': return 'tres';
        case '4': return 'cuatro';
        case '5': return 'cinco';
        case '6': return 'seis';
        case '7': return 'siete';
        case '8': return 'ocho';
        case '9': return 'nueve';
        default: return 'desconocido';
    }
}


  let sol = "";

 sol += "<table border='1'>";
            sol += "<thead><tr><th>Número</th><th>Nombre</th></tr></thead>";
            sol += "<tbody>";
            
            for (const n of arrayNumero) {

                sol += `<tr><td>${n}</td><td>${obtenerNombre(n)}</td></tr>`;
            }
            
            sol += "</tbody></table>";

    divTabla.innerHTML = sol;        

 

};
*/


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

/* 
const btnGuardar = document.querySelector("#btnGuardar");
btnGuardar.addEventListener('click', añadirTexto);

const btnMostrar = document.querySelector("#btnMostrar");
btnMostrar.addEventListener('click', mostrarTexto);

const btnEliminar = document.querySelector("#btnEliminar");
btnEliminar.addEventListener('click', eliminarTexto);
*/ 

// ejercicio 7

/* const btnAñadir = document.querySelector("#btnAñadir");
btnAñadir.addEventListener('click', añadirNombre);
const btnGenerar = document.querySelector("#btnGenerar");
btnGenerar.addEventListener('click', generarNombre);
*/

// ejercicio 8

/* En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta. Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:

De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:
Estado de la cuenta:
'Acreedor' si el saldo es >0.
'Deudor' si el saldo es <0.
'Nulo' si el saldo es =0.
La suma total de los saldos acreedores.
Nota: cada cuenta se puede modelar como un array y, por tanto, la lista de cuentas puede ser un array de arrays */
/*
const cuentas = [
  ["Cuenta1", "Juan", 300],
  ["Cuenta2", "Alfonso", 600],
  ["Cuenta3", "Luisa", 40],
  ["Cuenta4", "Teleñoco", 50],
  ["Cuenta5", "Elmoroso", -500],
  ["Cuenta6", "Elon musk", 700000000000]
];
*/

// ejercicio 9

/* Crea una web que tome una serie de palabras ingresadas por el usuario y almacene esas palabras en un array. Cada vez que se añada una nueva palabra se mostrará:

La primera palabra ingresada por el usuario
La última palabra ingresada por el usuario
El número de palabras presentes en el array
Todas las palabras ordenadas alfabéticamente.



let palabras = [];
const btnGuardar  = document.querySelector("#btnGuardar");
btnGuardar.addEventListener('click', agregarPalabra);
*/

// ejercicio 10

/*  Escribe una función que reciba como entrada un número entero de 5 cifras como máximo y construya una tabla de dos columnas con sus dígitos.
Por ejemplo: 1835 = [1,8,3,5]. A continuación se recorrerá el array escribiendo un número en cada fila de la tabla, la primera columna tendrá el número y la segunda su nombre (uno, ocho, tres, cinco).

Número	Nombre
1	      uno
8	       ocho
3	      tres
5	      cinco
*/

/*

const btnConvertir = document.querySelector("#btnConvertir");
btnConvertir.addEventListener('click', convertirNumeros);
*/

// ejercicio 11
/* Para rellenar la primitiva queremos visualizar un array de seis elementos, conteniendo cada celda un número aleatorio comprendido entre 1 y 49 en la que habremos de evitar la posibilidad de que un número se repita dos veces */


/* const quiniela = function() {
    let numeros = [];
    
    for (let i = 0; i < 6; i++) {
        let numeroUnico = false;
        let intentos = 0;
        
        while (!numeroUnico && intentos < 100) {
            let entero = Math.floor(Math.random() * 49) + 1;
            
            if (!numeros.includes(entero)) {  
                numeroUnico = true;
                numeros.push(entero);
            }
            intentos++;
        }
    }
    
    return numeros.toString();  
}

alert(quiniela());

*/

// ejercicio 12