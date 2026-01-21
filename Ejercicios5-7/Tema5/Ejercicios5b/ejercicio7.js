"use strict";

/**
 * Valida si una fecha en formato AÑO-MES-DÍA es válida
 * @param {String} dateStr - Fecha en formato AÑO-MES-DÍA 
 * @returns Boolean
 */
function isValidDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    const date = new Date(year, month - 1, day);
    
    return date.getFullYear() == year &&
           date.getMonth() == month - 1 &&
           date.getDate() == day;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#formFechas');
    const resultado = document.querySelector('#resultado');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores
        const fecha1Input = document.querySelector('#txtFecha1').value;
        const dia2 = document.querySelector('#dia2').value;
        const mes2 = document.querySelector('#mes2').value;
        const anio2 = document.querySelector('#anio2').value;
        
        // Validar que todos los campos estén rellenos
        if (!fecha1Input || !dia2 || !mes2 || !anio2) {
            resultado.innerHTML = '<strong>Error:</strong> Todos los campos deben estar rellenos.';
            resultado.style.color = 'red';
            return;
        }
        
        // Validar Fecha 1
        if (!isValidDate(fecha1Input)) {
            resultado.innerHTML = '<strong>Error:</strong> La Fecha 1 no es una fecha válida.';
            resultado.style.color = 'red';
            return;
        }
        
        // Construir y validar Fecha 2
        const mes2Formateado = mes2.padStart(2, '0');
        const dia2Formateado = dia2.padStart(2, '0');
        const fecha2Str = `${anio2}-${mes2Formateado}-${dia2Formateado}`;
        
        if (!isValidDate(fecha2Str)) {
            resultado.innerHTML = `<strong>Error:</strong> La Fecha 2 (${dia2}/${mes2}/${anio2}) no es una fecha válida.`;
            resultado.style.color = 'red';
            return;
        }
        
        // Comparar fechas
        const fecha1 = new Date(fecha1Input);
        const fecha2 = new Date(fecha2Str);
        
        if (fecha1 >= fecha2) {
            resultado.innerHTML = '<strong>Error:</strong> La Fecha 1 debe ser anterior a la Fecha 2.';
            resultado.style.color = 'red';
            return;
        }
        
        // Formatear fechas para mostrar
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        const fecha1Formateada = fecha1.toLocaleDateString('es-ES', opciones);
        const fecha2Formateada = fecha2.toLocaleDateString('es-ES', opciones);
        
        // Todo correcto
        resultado.innerHTML = '<strong>¡Éxito!</strong> Todas las validaciones son correctas:<br>' +
                             `• Fecha 1: ${fecha1Formateada}<br>` +
                             `• Fecha 2: ${fecha2Formateada}<br>` +
                             `• Fecha 1 es anterior a Fecha 2`;
        resultado.style.color = 'green';
    });
    
    // Opcional: Limpiar mensajes cuando se modifiquen los campos
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            resultado.innerHTML = 'Los resultados aparecerán aquí...';
            resultado.style.color = '';
        });
    });
});