"use strict";

///////////////////////////////////
// FUNCTIONS
///////////////////////////////////

const crearTabla = function(historialBombilla) {

   const historialOrdenado = historialBombilla.reverse()
   
   

  const tabla = document.createElement('table');
                tabla.className = 'mi-tabla';
                tabla.id = 'tabla-datos';
                
                // Crear encabezados
                const thead = document.createElement('thead');
                const trHead = document.createElement('tr');
                
                const th1 = document.createElement('th');
                th1.textContent = 'Fecha';
                trHead.appendChild(th1);
                
                const th2 = document.createElement('th');
                th2.textContent = 'Hora';
                trHead.appendChild(th2);
                
                const th3 = document.createElement('th');
                th3.textContent = 'ON/OFF';
                trHead.appendChild(th3);
                
                thead.appendChild(trHead);
                tabla.appendChild(thead);
                
                // Crear cuerpo
                const tbody = document.createElement('tbody');
                tabla.appendChild(tbody);


                for (const historial of historialOrdenado) {
                    // Agregar nueva fila a tabla existente
                const tr = document.createElement('tr');
                
                const tdNombre = document.createElement('td');
                tdNombre.textContent = historial.fecha;
                tdNombre.className = 'fecha';
                tr.appendChild(tdNombre);
                
                const tdApellido = document.createElement('td');
                tdApellido.textContent = historial.hora;
                tdApellido.className = 'hora';
                tr.appendChild(tdApellido);
                
                const tdEdad = document.createElement('td');
                tdEdad.textContent = historial.encendido;
                tdEdad.className = 'encendido';
                tr.appendChild(tdEdad);
                
                tbody.appendChild(tr);
                }
                
                
  
    return tabla;
};


///////////////////////////////////
// MAIN
///////////////////////////////////

let n_reglas = document.styleSheets[0].cssRules.length;
let arrBombillas = [];



document.styleSheets[0].insertRule(':root { --bg-header : var (--accent-color)}', n_reglas-1);
document.styleSheets[0].insertRule('.oculto { display:none}', n_reglas-1);

const secControl = document.querySelector("#secControl")
secControl.classList.add("oculto");
const secHistorial = document.querySelector("#secHistorial")
secHistorial.classList.add("oculto");

document.querySelector("#btnControl").addEventListener('click', () => {
    
    secHistorial.classList.add("oculto");
    secControl.classList.remove("oculto");
});
document.querySelector("#btnHistorial").addEventListener('click', e => {
    
    secControl.classList.add("oculto");
    secHistorial.classList.remove("oculto");
});

document.querySelector("#btnDetectarBombillasHistorial").addEventListener('click', async e => {
    
    
    try {
        const response = await fetch("/api/bombilla");
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }
        
        
      

        const secHistorial = document.querySelector("#secHistorial");
        const bombillas = await response.json();
        arrBombillas.push(bombillas);
        let ul = document.createElement("ul");
        ul.id = "Lista";
       

        for (const bombilla of bombillas) {
            let li = document.createElement("li");
            li.textContent = bombilla.etiqueta;
            li.dataset.id = bombilla.id;
            ul.append(li);
        }

         const lista = secHistorial.querySelector("#Lista");
       

       if (lista) {
           lista.remove();
       }
        
        secHistorial.append(ul);

      ul.addEventListener('click', async e => {
        if (e.target.tagName != "LI") {
            return;
        }

        if (e.target.tagName === "LI") {
            const li = e.target;

            const tabla = document.querySelector("#tabla-datos");

            if (tabla) {
                tabla.remove();
            }
            
            try {
                const response = await fetch(`/api/bombilla/${li.dataset.id}`);
                
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
                }
                
               


                const bombilla = await response.json();
                 const {comprobar} = await import("./checksum.js");


                // no me dio tiempo, lo lamento
             /*   if (!comprobar(bombilla.checksum)) {
                    tabla.remove();
                    let dialog = document.createElement("dialog");
                    dialog.textContent = "Error en el checksum";
                    
                    let closeButton = document.createElement("button");
                    closeButton.textContent = "Cerrar";
                    closeButton.addEventListener("click", () => {
                        dialog.close();
                        document.body.removeChild(dialog);
                    });
                    
                    dialog.appendChild(document.createElement("br"));
                    dialog.appendChild(closeButton);
                    
                    document.body.appendChild(dialog);
                    dialog.show();


                    return;
                }
                */

                const existeBombilla = arrBombillas.find(b => b.id === bombilla.id);
                const historialBombilla = bombilla.historial;
                if (existeBombilla) {
                    let tabla = crearTabla(historialBombilla);
                    secHistorial.appendChild(tabla);
                    return;
                }

                    let tabla = crearTabla(historialBombilla);
                    secHistorial.appendChild(tabla);
                
                
           

                
            } catch (error) {
                let dialog = document.createElement("dialog");
                dialog.textContent = `Error al crear la tabla${error}`;
                
                let closeButton = document.createElement("button");
                closeButton.textContent = "Cerrar";
                closeButton.addEventListener("click", () => {
                    dialog.close();
                    document.body.removeChild(dialog);
                });
                
                dialog.appendChild(document.createElement("br"));
                dialog.appendChild(closeButton);
                
                document.body.appendChild(dialog);
                dialog.show();
            
            }
        }
      })
 
        

    } catch (error) {

        let dialog = document.createElement("dialog");
        dialog.textContent = `Error: ${error}`;
        
        let closeButton = document.createElement("button");
        closeButton.textContent = "Cerrar";
        closeButton.addEventListener("click", () => {
            dialog.close();
            document.body.removeChild(dialog);
        });
        
        dialog.appendChild(document.createElement("br"));
        dialog.appendChild(closeButton);
        
        document.body.appendChild(dialog);
        dialog.show();

        
    }
})

 