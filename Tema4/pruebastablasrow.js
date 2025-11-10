// Función htmlRow
function htmlRow(data) {
    if (Array.isArray(data)) {
        return `<tr>${data.map(item => `<td>${item}</td>`).join('')}</tr>`;
    }
    if (typeof data === 'object') {
        return `<tr>${Object.values(data).map(value => `<td>${value}</td>`).join('')}</tr>`;
    }
    return `<tr><td>${data}</td></tr>`;
}

// Función htmlTable
function htmlTable(data, headers = null) {
    let tableHTML = '<table border="1" style="border-collapse: collapse; margin: 10px;">';
    
    if (headers) {
        const headerCells = Array.isArray(headers) 
            ? headers.map(header => `<th style="padding: 8px; background: #f0f0f0;">${header}</th>`).join('')
            : Object.keys(headers).map(header => `<th style="padding: 8px; background: #f0f0f0;">${header}</th>`).join('');
        tableHTML += `<thead><tr>${headerCells}</tr></thead>`;
    }
    
    tableHTML += '<tbody>';
    
    if (Array.isArray(data)) {
        data.forEach(item => {
            tableHTML += htmlRow(item);
        });
    } else {
        tableHTML += htmlRow(data);
    }
    
    tableHTML += '</tbody></table>';
    return tableHTML;
}




// Pruebas directas en el DOM
const resultadoDiv = document.getElementById('resultado');

// Ejemplo 1: Arrays simples con headers
const frutas = [['Manzana', 'Rojo', '$2'], ['Plátano', 'Amarillo', '$1'], ['Naranja', 'Naranja', '$1.5']];
resultadoDiv.innerHTML += '<h2>Ejemplo 1: Array de frutas</h2>';
resultadoDiv.innerHTML += htmlTable(frutas, ['Fruta', 'Color', 'Precio']);

// Ejemplo 2: Objetos sin headers
const usuarios = [
    { nombre: 'Ana García', edad: 25, ciudad: 'Madrid' },
    { nombre: 'Luis Martínez', edad: 30, ciudad: 'Barcelona' },
    { nombre: 'Carlos López', edad: 28, ciudad: 'Valencia' }
];
resultadoDiv.innerHTML += '<h2>Ejemplo 2: Array de objetos (sin headers)</h2>';
resultadoDiv.innerHTML += htmlTable(usuarios);

// Ejemplo 3: Objetos con headers personalizados
resultadoDiv.innerHTML += '<h2>Ejemplo 3: Array de objetos (con headers)</h2>';
resultadoDiv.innerHTML += htmlTable(usuarios, ['Nombre Completo', 'Edad', 'Ciudad']);

// Ejemplo 4: Solo htmlRow con array
resultadoDiv.innerHTML += '<h2>Ejemplo 4: Solo htmlRow con array</h2>';
resultadoDiv.innerHTML += '<table border="1" style="border-collapse: collapse; margin: 10px;">';
resultadoDiv.innerHTML += htmlRow(['Producto A', 'Stock: 50', '$99.99']);
resultadoDiv.innerHTML += htmlRow(['Producto B', 'Stock: 25', '$149.99']);
resultadoDiv.innerHTML += '</table>';

// Ejemplo 5: Solo htmlRow con objeto
resultadoDiv.innerHTML += '<h2>Ejemplo 5: Solo htmlRow con objeto</h2>';
resultadoDiv.innerHTML += '<table border="1" style="border-collapse: collapse; margin: 10px;">';
resultadoDiv.innerHTML += htmlRow({ empleado: 'María Pérez', departamento: 'Ventas', salario: '$3000' });
resultadoDiv.innerHTML += '</table>';

// Ejemplo 6: Data simple
resultadoDiv.innerHTML += '<h2>Ejemplo 6: Data simple</h2>';
resultadoDiv.innerHTML += htmlTable('Solo un valor');

// Ejemplo 7: Array de valores simples
const numeros = [1, 2, 3, 4, 5];
resultadoDiv.innerHTML += '<h2>Ejemplo 7: Array de valores simples</h2>';
resultadoDiv.innerHTML += htmlTable(numeros, ['Números']);