"use strict";

// Arrays con los datos
const colores = [
    "Rojo", "Verde", "Azul", "Amarillo", 
    "Morado", "Naranja", "Rosa", "Marrón"
];

const animales = [
    "Perro", "Gato", "León", "Elefante", 
    "Pájaro", "Delfín", "Tigre", "Conejo"
];

document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[name="txtOpcion"]');
    const contenidoDiv = document.querySelector('#contenido');
    
    radios.forEach(radio => {
        radio.addEventListener('change', function(e) {
            // Limpiar contenido anterior
            contenidoDiv.innerHTML = '';
            
            if (e.target.value === 'colores') {
                mostrarLista(colores, 'colores');
            } else if (e.target.value === 'animales') {
                mostrarLista(animales, 'animales');
            }
        });
    });
    
    function mostrarLista(items, titulo) {
        // Crear título
        const tituloElement = document.createElement('h3');
        tituloElement.textContent = `Lista de ${titulo}:`;
        contenidoDiv.appendChild(tituloElement);
        
        // Crear lista
        const ul = document.createElement('ul');
        
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        
        contenidoDiv.appendChild(ul);
    }
});