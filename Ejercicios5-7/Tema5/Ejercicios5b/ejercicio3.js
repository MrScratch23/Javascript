"use strict";


document.addEventListener('click', e => {
    if (e.target.id === "btnAleatorio") {
        const numeros = document.querySelectorAll('.numero-input');
        for (const numero of numeros) {
            // textContent se usa para elementos como <div>, <p>, <span>, etc.
        numero.value = Math.floor(Math.random() * 201) - 100;
        }
    }

    if (e.target.id === "btnTodosPositivos") {
        let contador = 0;
             const numeros = document.querySelectorAll('.numero-input');
        for (const numero of numeros) {
            if (numero.value > 1) {
                contador++;
            }
        }
        let mensaje = '';

        if (contador === numeros.length) {
            mensaje = "Efectivamente, todos los numeros son positivos"
        } else {
            mensaje = "No todos son positivos";
        }

        const resultado = document.querySelector("#resultado");
        resultado.textContent = mensaje;
    }

    if (e.target.closest("#btnContarPositivos")) {
         let contador = 0;
             const numeros = document.querySelectorAll('.numero-input');
        for (const numero of numeros) {
            if (numero.value > 1) {
                contador++;
            }
        }

          const resultado = document.querySelector("#resultado");
        resultado.textContent = `El numero de numeros positivos es: ${contador}`;
    }


})