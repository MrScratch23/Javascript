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
             container.innerHTML = html;
           // borrar el boton del documento
            e.target.remove();

        } catch (error) {
            
            console.error("Error:", error);
        }
    }

    if (e.target.type === "BUTTON") {
        
    }

}); 