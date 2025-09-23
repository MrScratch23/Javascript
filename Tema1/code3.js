"use strict";


// aqui una forma bruta

let radio1 = 1;
let radio2 = 2;

let esferaRadio1= (4/3) * Math.PI * Math.pow (radio1, 3);
let esferaRadio2 = (4/3) * Math.PI * Math.pow (radio2, 3);

console.log(esferaRadio1);
console.log(esferaRadio2);

// Aqui lo he creado con una funcion para hacerlo mas rapido

/**
 * Comentarios para que se entienda mejor la funcion
 * Calcula volumen de una esfera
 * @param {Number} numero 
 * @returns Number
 */

function calcularEsfera (numero) {
    return (4/3) * Math.PI * Math.pow (numero , 3);
}

console.log(calcularEsfera(radio1));
console.log(calcularEsfera(radio2));

// con alert

// usando la funcion

// let esferaRadio1 = calcularEsfera(1);

// alert ("El volumen de una esfera de radio 1 es: "+ esferaRadio1);
// alert("El volumen de una esfera de radio 2 es: "+ esferaRadio2);

// 1.-Recuperamos el boton del html



function recuperarDatosyCalcular(){
    
    // Recuperamos el imput donde el usuario ha escrito el radio
    const radioTxt = document.querySelector("#txtRadio");

    // Recuperamos  el valor del imput
    const radio = radioTxt.value;

    // se puede convertir a cualquier valor asi
    // const radio = radioTxt.valueAsNumber;

// se puede hacer en una sola linea

// const radio = document.querySelector("txtRadio").value;


    // alerta para comprobar que todo va bien
    alert(radio)
    // Calculamos el volumen de la esfera
    const volumenEsfera = calcularEsfera(radio);
      
    // Presentamos el dato
    alert (volumenEsfera);
}

const btnCalcular = document.querySelector("#btnCalcular");
// 2.-Añadimos funcionalidad al boton
btnCalcular.addEventListener("click", recuperarDatosyCalcular);







