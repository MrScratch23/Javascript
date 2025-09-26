"use strict";

const texto = "echo el freno magdaleno";

let vocales = 0;

for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toLowerCase();  // Para evitar problemas con mayúsculas

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        vocales++;
    }
   
}

 alert(`El número de vocales es ${vocales}`);
