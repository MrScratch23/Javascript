"use strict";

// Variable global para mantener el tamaño
let fontSize = 16;

document.addEventListener('DOMContentLoaded', function() {
    const divEditable = document.querySelector("#divEditable");
    // Inicializar el tamaño
    divEditable.style.fontSize = fontSize + 'px';
    
    document.addEventListener('keydown', e => {
        if (e.ctrlKey) {
            e.preventDefault();
            
            if (e.key === 'b' || e.key === 'B') {
                divEditable.style.fontWeight = 
                    divEditable.style.fontWeight === 'bold' ? 'normal' : 'bold';
            }
            
            if (e.key === 'i' || e.key === 'I') {
                divEditable.style.fontStyle = 
                    divEditable.style.fontStyle === 'italic' ? 'normal' : 'italic';
            }
            
            if (e.key === 'u' || e.key === 'U') {
                divEditable.style.textDecoration = 
                    divEditable.style.textDecoration === 'underline' ? 'none' : 'underline';
            }
            
            if (e.key === '+' || e.key === '=') {
                fontSize += 2;
                divEditable.style.fontSize = fontSize + 'px';
            }
            else if (e.key === '-' || e.key === '_') {
                if (fontSize > 8) {
                    fontSize -= 2;
                    divEditable.style.fontSize = fontSize + 'px';
                }
            }
        }
    });
});