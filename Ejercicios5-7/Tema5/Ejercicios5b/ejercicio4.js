"use strict";

// Array con datos de prueba
let puntuaciones = [
    { sabor: "vainilla", estrellas: 5 },
    { sabor: "vainilla", estrellas: 4 },
    { sabor: "vainilla", estrellas: 5 },
    { sabor: "vainilla", estrellas: 3 },
    { sabor: "chocolate", estrellas: 4 },
    { sabor: "chocolate", estrellas: 5 },
    { sabor: "chocolate", estrellas: 2 },
    { sabor: "fresa", estrellas: 5 },
    { sabor: "fresa", estrellas: 5 },
    { sabor: "fresa", estrellas: 4 },
    { sabor: "nata", estrellas: 3 },
    { sabor: "nata", estrellas: 2 },
    { sabor: "nata", estrellas: 1 }
];

document.addEventListener('click', e => {
    if (e.target.id === "btnVotar") {
        const sabor = document.querySelector("#sabor").value;
        const radioValue = document.querySelector('input[name="puntuacion"]:checked')?.value;
        
        if (!radioValue) {
            alert("Selecciona una puntuación");
            return;
        }
        
        let helado = {
            sabor: sabor,
            estrellas: parseInt(radioValue)
        };

        puntuaciones.push(helado);
        
        // Mostrar confirmación
        const infoDiv = document.querySelector("#info");
        infoDiv.textContent = `Voto registrado: ${sabor} - ${radioValue} estrellas. Total votos: ${puntuaciones.length}`;
    }

    if (e.target.id === "btnMostrar") {
        // Limpiar el contenido anterior
        const infoDiv = document.querySelector("#info");
        infoDiv.innerHTML = "";
        
        // Si no hay votos
        if (puntuaciones.length === 0) {
            infoDiv.textContent = "No hay votos registrados";
            return;
        }
        
        // Mostrar primero los datos de prueba
        const datosPrueba = document.createElement('div');
        datosPrueba.innerHTML = `<strong>Datos de prueba cargados:</strong> ${puntuaciones.length} votos totales<br><br>`;
        infoDiv.appendChild(datosPrueba);
        
        // Crear objeto para estadísticas por sabor
        const estadisticas = {
            vainilla: { votos: [], maximos: 0 },
            fresa: { votos: [], maximos: 0 },
            chocolate: { votos: [], maximos: 0 },
            nata: { votos: [], maximos: 0 }
        };
        
        // Procesar todas las votaciones
        for (const helado of puntuaciones) {
            const sabor = helado.sabor;
            const puntos = helado.estrellas;
            
            // Agregar puntos al array del sabor
            estadisticas[sabor].votos.push(puntos);
            
            // Contar si es puntuación máxima (5)
            if (puntos === 5) {
                estadisticas[sabor].maximos++;
            }
        }
        
        // Crear tabla
        const tabla = document.createElement('table');
        tabla.style.border = "1px solid black";
        tabla.style.borderCollapse = "collapse";
        tabla.style.marginTop = "20px";
        
        // Crear encabezados
        const thead = document.createElement('thead');
        const trHead = document.createElement('tr');
        
        const headers = ['Sabor', 'Número Votos', 'Media', 'Nº Máximo (5)'];
        for (const header of headers) {
            const th = document.createElement('th');
            th.textContent = header;
            th.style.border = "1px solid black";
            th.style.padding = "5px";
            trHead.appendChild(th);
        }
        
        thead.appendChild(trHead);
        tabla.appendChild(thead);
        
        // Crear cuerpo de la tabla
        const tbody = document.createElement('tbody');
        
        // Crear fila para cada sabor
        const sabores = ['vainilla', 'fresa', 'chocolate', 'nata'];
        
        for (const sabor of sabores) {
            const datos = estadisticas[sabor];
            const totalVotos = datos.votos.length;
            
            // Solo mostrar sabores que tengan votos
            if (totalVotos > 0) {
                const tr = document.createElement('tr');
                
                // Calcular media
                let media = 0;
                if (totalVotos > 0) {
                    const suma = datos.votos.reduce((total, puntos) => total + puntos, 0);
                    media = suma / totalVotos;
                }
                
                // Celda 1: Sabor
                const tdSabor = document.createElement('td');
                tdSabor.textContent = sabor.charAt(0).toUpperCase() + sabor.slice(1);
                tdSabor.style.border = "1px solid black";
                tdSabor.style.padding = "5px";
                tr.appendChild(tdSabor);
                
                // Celda 2: Número de votos
                const tdVotos = document.createElement('td');
                tdVotos.textContent = totalVotos;
                tdVotos.style.border = "1px solid black";
                tdVotos.style.padding = "5px";
                tr.appendChild(tdVotos);
                
                // Celda 3: Media
                const tdMedia = document.createElement('td');
                tdMedia.textContent = media.toFixed(2);
                tdMedia.style.border = "1px solid black";
                tdMedia.style.padding = "5px";
                tr.appendChild(tdMedia);
                
                // Celda 4: Número de máximos (5)
                const tdMaximos = document.createElement('td');
                tdMaximos.textContent = datos.maximos;
                tdMaximos.style.border = "1px solid black";
                tdMaximos.style.padding = "5px";
                tr.appendChild(tdMaximos);
                
                tbody.appendChild(tr);
            }
        }
        
        tabla.appendChild(tbody);
        infoDiv.appendChild(tabla);
        
        // Agregar botón para ver datos en consola
        const btnConsola = document.createElement('button');
        btnConsola.textContent = "Ver datos en consola";
        btnConsola.style.marginTop = "10px";
        btnConsola.addEventListener('click', function() {
            console.log("=== DATOS DE PRUEBA ===");
            console.log("Array completo puntuaciones:", puntuaciones);
            console.log("Estadísticas calculadas:", estadisticas);
            console.log("Total de votos:", puntuaciones.length);
            
            // Mostrar detalle por sabor
            for (const sabor in estadisticas) {
                if (estadisticas[sabor].votos.length > 0) {
                    console.log(`${sabor}:`, estadisticas[sabor]);
                }
            }
            alert("Datos mostrados en consola (F12 para ver)");
        });
        infoDiv.appendChild(btnConsola);
    }
});