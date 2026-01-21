const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Simular fallos aleatorios
const simularFallo = () => Math.random() < 0.2; // 20% de probabilidad de fallo

// Datos iniciales en formato XML como en el enunciado
const datosXML = `<?xml version="1.0" encoding="UTF-8"?>
<jornada fecha="07/03/2025">
    <porte especial="especial">
        <palé mercancia="fruta">Melón</palé>
        <palé mercancia="fruta">Sandía</palé>
        <box mercancia="verdura">Calabacín</box>
    </porte>
    <porte especial="no">
        <box mercancia="fruta">Manzanas</box>
        <box mercancia="fruta">Peras</box>
        <palé mercancia="fruta">Plátanos</palé>
    </porte>
    <porte especial="especial">
        <palé mercancia="carne">Ternera</palé>
        <box mercancia="carne">Pollo</box>
    </porte>
</jornada>`;

// Ruta para obtener los portes en XML
app.get('/api/portes', (req, res) => {
    if (simularFallo()) {
        return res.status(500).json({ error: 'Error simulado del servidor' });
    }
    
    res.set('Content-Type', 'application/xml');
    res.send(datosXML);
});

// Ruta para obtener los portes en JSON (alternativa)
app.get('/api/portes/json', (req, res) => {
    if (simularFallo()) {
        return res.status(500).json({ error: 'Error simulado del servidor' });
    }
    
    res.json({
        fecha: "07/03/2025",
        portes: [
            {
                especial: true,
                contenedores: [
                    { tipo: "palé", mercancia: "fruta", producto: "Melón" },
                    { tipo: "palé", mercancia: "fruta", producto: "Sandía" },
                    { tipo: "box", mercancia: "verdura", producto: "Calabacín" }
                ]
            },
            {
                especial: false,
                contenedores: [
                    { tipo: "box", mercancia: "fruta", producto: "Manzanas" },
                    { tipo: "box", mercancia: "fruta", producto: "Peras" },
                    { tipo: "palé", mercancia: "fruta", producto: "Plátanos" }
                ]
            },
            {
                especial: true,
                contenedores: [
                    { tipo: "palé", mercancia: "carne", producto: "Ternera" },
                    { tipo: "box", mercancia: "carne", producto: "Pollo" }
                ]
            }
        ]
    });
});

// Ruta para añadir un nuevo porte (POST)
app.post('/api/portes', (req, res) => {
    if (simularFallo()) {
        return res.status(500).json({ 
            error: 'Error simulado del servidor al guardar' 
        });
    }
    
    console.log('Nuevo porte recibido:', req.body);
    
    // Simular procesamiento
    setTimeout(() => {
        res.status(201).json({ 
            mensaje: 'Porte añadido correctamente',
            id: Date.now() // ID simulado
        });
    }, 1000);
});

// Ruta para obtener categorías (si las necesitas)
app.get('/api/categorias', (req, res) => {
    res.json(['fruta', 'verdura', 'carne']);
});

// Ruta para servir el fichero de gestión de CSS
app.get('/gestionarCSSyToast.js', (req, res) => {
    const contenido = `
// Módulo para gestión de CSS y toast
export function cambiarColorAcento() {
    // Generar color aleatorio en formato rgb
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    const nuevoColor = \`rgb(\${r}, \${g}, \${b})\`;
    
    // Buscar y modificar la regla CSS de :root
    const estilos = document.styleSheets;
    
    for (let i = 0; i < estilos.length; i++) {
        try {
            const reglas = estilos[i].cssRules || estilos[i].rules;
            
            for (let j = 0; j < reglas.length; j++) {
                if (reglas[j].selectorText === ':root') {
                    // Eliminar la regla antigua de --accent-color
                    const estiloRoot = reglas[j].style;
                    estiloRoot.removeProperty('--accent-color');
                    // Añadir la nueva
                    estiloRoot.setProperty('--accent-color', nuevoColor);
                    
                    console.log('Color cambiado a:', nuevoColor);
                    return nuevoColor;
                }
            }
        } catch (e) {
            // Ignorar hojas de estilo de otros dominios
        }
    }
    
    // Si no encuentra :root, crearlo
    const style = document.createElement('style');
    style.textContent = \`:root { --accent-color: \${nuevoColor}; }\`;
    document.head.appendChild(style);
    
    return nuevoColor;
}

export function showToast(mensaje) {
    const divToast = document.getElementById('divToast');
    
    // Crear el toast
    const toastDiv = document.createElement('div');
    toastDiv.className = 'toast';
    toastDiv.style.width = '250px';
    toastDiv.style.padding = '1rem';
    toastDiv.style.backgroundColor = '#87CEEB'; // Celeste
    toastDiv.style.borderRadius = '5px';
    toastDiv.style.marginBottom = '10px';
    toastDiv.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    toastDiv.style.animation = 'slideIn 0.3s ease';
    
    // Añadir el mensaje
    const parrafo = document.createElement('p');
    parrafo.textContent = mensaje;
    toastDiv.appendChild(parrafo);
    
    // Añadir al principio del contenedor
    divToast.insertBefore(toastDiv, divToast.firstChild);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        toastDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (toastDiv.parentNode) {
                toastDiv.parentNode.removeChild(toastDiv);
            }
        }, 300);
    }, 3000);
}
    `;
    
    res.set('Content-Type', 'application/javascript');
    res.send(contenido);
});

// Ruta para servir el archivo de datos stringificados
app.get('/portes.estringuificados.js', (req, res) => {
    const contenido = `
// Datos de respaldo en caso de que falle la API
export const datosPortes = {
    fecha: "07/03/2025",
    portes: [
        {
            especial: true,
            contenedores: [
                { tipo: "palé", mercancia: "fruta", producto: "Melón" },
                { tipo: "palé", mercancia: "fruta", producto: "Sandía" },
                { tipo: "box", mercancia: "verdura", producto: "Calabacín" }
            ]
        },
        {
            especial: false,
            contenedores: [
                { tipo: "box", mercancia: "fruta", producto: "Manzanas" },
                { tipo: "box", mercancia: "fruta", producto: "Peras" },
                { tipo: "palé", mercancia: "fruta", producto: "Plátanos" }
            ]
        },
        {
            especial: true,
            contenedores: [
                { tipo: "palé", mercancia: "carne", producto: "Ternera" },
                { tipo: "box", mercancia: "carne", producto: "Pollo" }
            ]
        }
    ]
};
    `;
    
    res.set('Content-Type', 'application/javascript');
    res.send(contenido);
});

// Servir el index.html para cualquier otra ruta
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API REST corriendo en http://localhost:${PORT}`);
    console.log('Endpoints disponibles:');
    console.log(`  GET  /api/portes        - Obtener portes en XML`);
    console.log(`  GET  /api/portes/json   - Obtener portes en JSON`);
    console.log(`  POST /api/portes        - Añadir nuevo porte`);
    console.log(`  GET  /api/categorias    - Obtener categorías`);
    console.log(`  GET  /gestionarCSSyToast.js - Cargar módulo CSS dinámico`);
});