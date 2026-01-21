// TODO: Declarar variables globales aquí
// oJornada = { fecha: "", portes: [] }
// oPorte = { especial: false, contenedores: [] }

document.addEventListener('DOMContentLoaded', function() {
    console.log('Examen 2º Trimestre - Gestión de Portes');
    
    // TODO: Parte 1 - Carga de datos desde archivo/API
    // 1. Hacer petición GET para obtener datos iniciales
    // 2. Si falla, cargar datos desde portes.estringuificados.js
    // 3. Actualizar fechaJornada y totalPortes en el DOM
    
    // TODO: Configurar eventos
    // 1. Botón Inicio - Mostrar landingPage, ocultar crearPorte
    // 2. Botón Portes - Ocultar landingPage, mostrar crearPorte
    // 3. Botón Cambiar Tema - Mostrar diálogo de confirmación
    // 4. Botón Añadir contenedor - Validar y añadir a oPorte
    // 5. Botón Añadir porte - Añadir oPorte a oJornada
    
    // TODO: Configurar evento delegado en listaPortes
    // Cuando se haga click en un porte de la lista:
    // 1. Obtener índice desde data-x
    // 2. Mostrar tabla con detalles del porte
});

// TODO: Parte 1 - Función para cargar datos iniciales
async function cargarDatosIniciales() {
    try {
        // Intentar cargar desde API
        // const response = await fetch('/api/portes');
        // const data = await response.text();
        // Procesar XML o JSON
    } catch (error) {
        console.error('Error cargando datos:', error);
        // Cargar datos de respaldo
        const datosRespaldo = await import('./portes.estringuificados.js');
        // Inicializar oJornada con los datos
    }
}

// TODO: Parte 2 - Función para mostrar diálogo de cambio de tema
function mostrarDialogoTema() {
    // 1. Crear elemento <dialog> dinámicamente
    // 2. Añadir contenido: párrafo y dos botones
    // 3. Configurar eventos de los botones
    // 4. Mostrar diálogo con showModal()
}

// TODO: Parte 2 - Función para cargar dinámicamente gestión de CSS y toast
async function cargarGestionCSS() {
    // 1. Usar import() dinámico para cargar un módulo
    // 2. Ejecutar funciones del módulo cargado
    // 3. Mostrar toast con mensaje de confirmación
}

// TODO: Parte 3 - Función para validar contenedor
function validarContenedor() {
    // Validar:
    // 1. Todos los campos llenos
    // 2. Producto: máx 20 chars, empieza con mayúscula, solo letras y números al final
    // 3. No mezclar carne con fruta/verdura en mismo porte
    // 4. Cantidad positiva
    
    // Retornar { valido: boolean, errores: [] }
}

// TODO: Parte 3 - Función para añadir contenedor
function añadirContenedor() {
    // 1. Llamar a validarContenedor()
    // 2. Si es válido: añadir a oPorte.contenedores
    // 3. Mostrar toast de confirmación
    // 4. Si hay errores: mostrar en diálogo
}

// TODO: Parte 3 - Función para añadir porte
function añadirPorte() {
    // 1. Verificar que oPorte tiene contenedores
    // 2. Añadir oPorte a oJornada.portes
    // 3. Limpiar oPorte para nuevo porte
    // 4. Actualizar lista en DOM
    // 5. Intentar enviar a API (opcional)
}

// TODO: Parte 4 - Función para renderizar lista de portes
function renderizarListaPortes() {
    // Para cada porte en oJornada.portes:
    // 1. Crear elemento li
    // 2. Añadir textContent "Porte X"
    // 3. Añadir atributo data-x con índice
    // 4. Añadir a listaPortes
}

// TODO: Parte 4 - Función para mostrar detalle del porte
function mostrarDetallePorte(indice) {
    // 1. Obtener porte desde oJornada.portes[indice]
    // 2. Crear tabla con:
    //    - Cabecera: Porte, Fecha
    //    - Filas: Producto, Tipo, Precio (25€ box, 175€ palé)
    //    - Total: Suma de precios
    //    - Especial: sí/no
    // 3. Insertar tabla en detallePorte
    // 4. Mostrar sección detallePorte
}