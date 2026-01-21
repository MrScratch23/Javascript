"use strict";

const divGritona = document.querySelector("#divGritona");

document.addEventListener('click', async e => {
    if (e.target.id === "btnAPIGritona") {
       
        const texto = document.querySelector("[name='txtGritar']").value.trim();

        if (!texto) {
            return;
        }
        // esto para los submits 
        //e.preventDefault()
     
        divGritona.setAttribute('aria-busy', 'true');
        
        try {
         
            const u = new URL('http://localhost:3000/api/gritona');
            u.searchParams.append("texto", texto);
            
          
            const response = await fetch(u.href);
            
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            
           
            const textoGritado = await response.text();
            
           divGritona.textContent = '';

            let p = document.createElement("p");
            p.textContent = textoGritado; 
            divGritona.appendChild(p);
            
        } catch (error) {
            console.error("Error:", error);
            // mostrar error
            let p = document.createElement("p");
            p.textContent = `Error: ${error.message}`;
            p.style.color = "red";
            divGritona.appendChild(p);
        } finally {
          
            divGritona.setAttribute('aria-busy', 'false');
        }
    }

    if (e.target.id === "btnTodosLosAlumnos") {

        try {

        const response = await fetch("http://localhost:3000/api/alumno");
        // hacemos que se muestre en consola el resultado

        
          const alumnos = await response.json();
            console.log("Al menos funciona");
            console.log(alumnos);

        } catch (error) {
            console.error("Error:", error);
        }
    }

    if (e.target.id === "btnPantallaAltaAlumnos") {
    const container = document.querySelector(".container");

    try {
        const response = await fetch("http://localhost:3000/altaAlumno");
        const html = await response.text();
        
        // Parsear el HTML como documento XML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Obtener el artículo del documento parseado
        const articleFromResponse = doc.querySelector('article');
        
        if (!articleFromResponse) {
            throw new Error('No se encontró el formulario en la respuesta');
        }
        
        // Limpiar container sin innerHTML
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        
        // Importar el nodo al documento actual (esto es clave)
        const importedArticle = document.importNode(articleFromResponse, true);
        
        // Agregar el artículo importado al container
        container.appendChild(importedArticle);
        
        // Remover el botón que disparó el evento
        e.target.remove();

        const form = container.querySelector("#frmRegistroAlumno");
        
        form.addEventListener('submit', async function(event) {
            event.preventDefault(); // ¡IMPORTANTE! Previene el envío normal
            
            const nombre = document.querySelector("#nombre").value.trim();
            const edad = document.querySelector("input[name=edad]").valueAsNumber; // Cambiado a 
            const curso = document.querySelector('input[name="curso"]:checked')?.value; // Cambiado nombre de variable
            const grupo = document.querySelector("#grupo").value.trim();
            const email = document.querySelector("#email").value.trim();

            // Validaciones
            if (!nombre || !edad || !curso || !grupo || !email) {
                alert("Por favor, complete todos los campos obligatorios");
                return;
            }

            try {
                const response = await fetch("http://localhost:3000/api/alumno", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nombre: nombre,
                        edad: parseInt(edad),
                        curso: curso, // Usamos la variable correcta
                        grupo: grupo,
                        email: email
                    })
                });
                
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
                }
                
                const alumnoCreado = await response.text();
                alert("Alumno creado exitosamente");
                form.reset(); // Opcional: limpiar formulario después del éxito
                
            } catch (error) {
                // console.error("Error en fetch:", error);
                alert(`Error al crear alumno: ${error.message}`);
            }
        });

    } catch (error) {
        console.error("Error:", error);
        const p = document.createElement('p');
        p.textContent = `Error: ${error.message}`;
        p.style.color = 'red';
        container.appendChild(p);
    }
}
    /*if (e.target.id === "btnPantallaAltaAlumnos") {

        const container = document.querySelector(".container");

        try {
            const response = await fetch("http://localhost:3000/altaAlumno");
             const html = await response.text();
             container.innerHTML = html;
           // borrar el boton del documento
            e.target.remove();

        } catch (error) {
            
            console.error("Error:", error);
        }
    }
    
    if (e.target.type === "BUTTON") {
        
    }
*/

}); 



