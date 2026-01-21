"use strict";

let fotos = [];
let currentIndex = Math.floor(Math.random() * 30);
const currentImage = document.querySelector("img");

// Cargar imágenes al inicio
(async function() {
    try {
        const response = await fetch("https://picsum.photos/v2/list");
        fotos = await response.json();
        
        // Mostrar primera imagen
        mostrarImagen();
        
    } catch (error) {
        console.error("Error:", error);
    }
})();

// Función para mostrar imagen actual
function mostrarImagen() {
    const foto = fotos[currentIndex];
    
    // Imagen
    currentImage.src = foto.download_url;
    currentImage.alt = `Foto por ${foto.author}`;
    
    // Autor
    const authorElement = document.querySelector("#authorName");
    if (authorElement) authorElement.textContent = `Autor: ${foto.author}`;
    
    // ID
    const idElement = document.querySelector("#imageId");
    if (idElement) idElement.textContent = `ID: ${foto.id}`;
}

// Eventos
document.querySelector("#nextBtn")?.addEventListener("click", () => {
    if (currentIndex < fotos.length - 1) {
        currentIndex++;
        mostrarImagen();
    }
});

document.querySelector("#prevBtn")?.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        mostrarImagen();
    }
});