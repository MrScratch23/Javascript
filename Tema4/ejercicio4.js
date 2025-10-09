"use strict";



// Funciones

// 3 versiones mayor Edad

function mayorEdadclasico(numero) {
    let mayor = false;
    if (numero >=18) {
    mayor = true;
    }
    return mayor;
}

const mayorEdadAnonima = function (numero) {
     let mayor = false;
    if (numero >=18) {
    mayor = true;
    }
    return mayor;
}


// mayoredadversionsimple
// const mayorEdad = num => num >= 18;



const mayorEdad = (num) => { if (num>=18) return true; {
    } } 


    // Crea una función que reciba cualquier número de parámetros numéricos y devuelva su media.

const media = (...numeros) => {

    if (numeros.length === 0) {
        return;
    }


    let media ;
    let suma = 0;
    for (let i = 0; i < numeros.length; index++) {
         suma  += numeros[i];
        }

     media = suma/numeros.length;
     return media;   


};

//Crea una función que reciba tres números y devuelva el menor.

const menorNumero = (num1,num2,num3) => {

    const menor = Math.min(num1, num2, num3);
    

    return menor;


}


// Main


