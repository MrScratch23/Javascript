"use strict";

document.addEventListener('click', async e => {
    // Recoger el elemento una sola vez al principio
    const contenido = document.querySelector("#contenido");
    
    if (!contenido) {
        console.error("No se encontró el elemento '#contenido'");
        return;
    }
    
const element = document.querySelector("#id");

    if (e.target.id === "btnXml") {
        try {
            const response = await fetch("https://mocktarget.apigee.net/xml");
            if (!response.ok) throw new Error(`Error: ${response.status}`);
            
            const xmlText = await response.text();
            const xml = new DOMParser().parseFromString(xmlText, "text/xml");
            
            const errorNode = xml.querySelector("parsererror");
            if (errorNode) throw new Error("Error al parsear XML");
            
            contenido.innerHTML = "<h3>Datos XML</h3>";
            
            const root = xml.querySelector("root");
            if (root) {
                for (let elemento of root.children) {
                    const p = document.createElement("p");
                    p.textContent = `${elemento.tagName}: ${elemento.textContent}`;
                    contenido.appendChild(p);
                }
            }
            
        } catch (error) {
            contenido.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }
    }

    if (e.target.id === "btnHtml") {
        contenido.textContent = "Cargando...";
        
        fetch("https://mocktarget.apigee.net/iloveapis")
            .then(response => {
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                return response.text();
            })
            .then(htmlText => {
                contenido.textContent = htmlText;
            })
            .catch(error => {
                contenido.textContent = `Error: ${error.message}`;
            });
    }

    if (e.target.id === "btnJson") {
        try {
            contenido.textContent = "Cargando JSON...";
            
            let response = await fetch("https://mocktarget.apigee.net/json");
            if (!response.ok) throw new Error(`Error: ${response.status}`);

            let datos = await response.json();
            
            contenido.innerHTML = "";
            
            const titulo = document.createElement("h3");
            titulo.textContent = "JSON de la API";
            contenido.appendChild(titulo);
            
            for (let key in datos) {
                const p = document.createElement("p");
                p.textContent = `${key}: ${datos[key]}`;
                contenido.appendChild(p);
            }
            
        } catch (error) {
            contenido.textContent = `Error: ${error.message}`;
        }
    }
});