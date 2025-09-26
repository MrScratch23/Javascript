

"use strict";


let navegador = navigator.userAgent;
  let numeros = 0;

for (let i = 0; 0<navegador.length; i++) {

  
    if (navegador.at(i).isNumber) {
        numeros += navegador.at(i);
    }
    
console.log(numeros);

}