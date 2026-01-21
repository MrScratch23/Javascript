"use strict";

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#verificarBtn").addEventListener('click', function() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const resultado = document.querySelector("#resultado");
        
        // Contar checkboxes marcados con for...of
        let contador = 0;
        for (const checkbox of checkboxes) {
            if (checkbox.checked) contador++;
        }
        
        resultado.textContent = '';
        
        if (contador === 0 || contador === 3) {
            resultado.textContent = 'Error: Selecciona entre 1 y 2 opciones';
        } else {
            const ul = document.createElement('ul');
            
            for (const checkbox of checkboxes) {
                if (checkbox.checked) {
                    const li = document.createElement('li');
                    li.textContent = checkbox.nextElementSibling.textContent;
                    ul.appendChild(li);
                }
            }
            resultado.appendChild(ul);
        }
    });
});