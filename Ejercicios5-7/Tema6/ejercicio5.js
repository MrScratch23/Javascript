"use strict";

  let tbody = document.querySelector("table tbody");

const btnOrdenar = document.querySelector("#btnOrdenar").addEventListener('click', e => {
    // transformacion a array mas facil
    const filasOrdenadas = Array.from(tbody.children).toSorted((fila1, fila2) => {
        return fila1.children[0].textContent.localeCompare(fila2.children[0].textContent);
    });
    
   // aqui ya lo metemos
    filasOrdenadas.forEach(fila => {
        tbody.appendChild(fila);
    });
});

  const btnBuscar = document.querySelector("#btnBuscar").addEventListener('click', e => {
     const resultadosBusqueda = document.querySelector("#resultadosBusqueda");
     // Buscar si ya hay una tabla en resultadosBusqueda y eliminarla
    const tablaExistente = resultadosBusqueda.querySelector("table");
    if (tablaExistente) {
        tablaExistente.remove();   
    }
    
   
    const busqueda = document.querySelector("#busqueda").value.trim().toLowerCase();
    const tbody = document.querySelector("table tbody");
    
    const alumnosEncontrados = Array.from(tbody.children).filter(fila => {
        const nombre = fila.children[0].textContent.toLowerCase();
        return nombre.startsWith(busqueda);
    });
    
    if (alumnosEncontrados.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "No se encontraron alumnos";
        resultadosBusqueda.appendChild(mensaje);
    } else {
      const tabla = document.createElement("table");

        
        // Crear encabezado de tabla
        const trHead = document.createElement("tr");
        const thNombre = document.createElement("th");
        thNombre.textContent = "Nombre";
        const thApellido = document.createElement("th");
        thApellido.textContent = "Apellido";
        
        trHead.appendChild(thNombre);
        trHead.appendChild(thApellido);
        tabla.appendChild(trHead);
        
        // Crear filas con los alumnos encontrados
        alumnosEncontrados.forEach(fila => {
            const tr = document.createElement("tr");
            
            const tdNombre = document.createElement("td");
            tdNombre.textContent = fila.children[0].textContent;
            
            const tdApellido = document.createElement("td");
            tdApellido.textContent = fila.children[1].textContent;
            
            tr.appendChild(tdNombre);
            tr.appendChild(tdApellido);
            tabla.appendChild(tr);
        });
        
        
        resultadosBusqueda.appendChild(tabla);
    }




});