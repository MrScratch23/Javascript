"use strict";

// Objeto para almacenar el porte en proceso
let oPorte = {
  especial: false,
  contenedores: []
};

// Objeto para almacenar la jornada completa
const oJornada = {
  fecha: "",
  portes: []
};

// Función para configurar valores por defecto en el formulario
const arreglarFormulario = function() {
  const crearPorte = document.querySelector("#crearPorte");
  if (!crearPorte || crearPorte.classList.contains("ocultar")) {
    return;
  }
  
  const form = crearPorte.querySelector("form");
  if (!form) return;
  
  // Marcar Box como seleccionado por defecto
  const boxRadio = form.querySelector('input[value="box"]');
  if (boxRadio) {
    boxRadio.checked = true;
    // Asegurar que ambos radios tengan el mismo name
    const paleRadio = form.querySelector('input[value="palé"]');
    if (paleRadio) {
      paleRadio.name = "txtContenedor";
      boxRadio.name = "txtContenedor";
    }
  }
  
  // Marcar Fruta como seleccionado por defecto
  const frutaRadio = form.querySelector('input[value="fruta"]');
  if (frutaRadio) frutaRadio.checked = true;
  
  // Resetear número de contenedores a 1
  const numContenedores = document.querySelector("#txtNumContendores");
  if (numContenedores) numContenedores.value = 1;
  
  // Limpiar campo producto
  const txtProducto = document.querySelector("#txtProducto");
  if (txtProducto) txtProducto.value = "";
  
  // Desmarcar checkbox especial
  const chkEspecial = document.querySelector("[name='chkEspecial']");
  if (chkEspecial) chkEspecial.checked = false;
};

// Función para validar el producto
const validarProducto = function(producto) {
  if (producto.length === 0) {
    return "El producto no puede estar vacío";
  }
  
  if (producto.length > 20) {
    return "El producto no puede tener más de 20 caracteres";
  }
  
  // Validar que empiece con letra mayúscula
  const primerCaracter = producto.charAt(0);
  if (!/^[A-ZÁÉÍÓÚÜÑÇ]$/.test(primerCaracter)) {
    return "El producto debe comenzar con una letra mayúscula";
  }
  
  // Validar el resto de caracteres
  const resto = producto.substring(1);
  
  // Patrón: letras minúsculas (incluyendo acentuadas) y posiblemente números al final
  const patron = /^[a-záéíóúüñç]*\d*$/;
  
  if (!patron.test(resto)) {
    return "El producto solo puede contener letras minúsculas después de la inicial y números solo al final";
  }
  
  // Verificar que los números solo estén al final
  if (/\d/.test(resto)) {
    const match = resto.match(/([a-záéíóúüñç]+)(\d*)/);
    if (match && match[1] && match[2]) {
      // Hay letras seguidas de números, esto es correcto
    } else if (match && !match[1] && match[2]) {
      // Solo hay números después de la mayúscula
      return "El producto debe contener letras después de la inicial";
    }
  }
  
  return null; // Sin errores
};

// Función para validar que no se mezclen tipos de mercancía incompatibles
const validarMercanciaCompatibilidad = function(nuevaMercancia) {
  if (oPorte.contenedores.length === 0) {
    return null; // No hay contenedores previos
  }
  
  const primeraMercancia = oPorte.contenedores[0].mercancia;
  
  // Si ya hay carne, no se puede añadir fruta o verdura
  if (primeraMercancia === "carne" && (nuevaMercancia === "fruta" || nuevaMercancia === "verdura")) {
    return "No se puede mezclar carne con fruta o verdura en el mismo porte";
  }
  
  // Si ya hay fruta o verdura, no se puede añadir carne
  if ((primeraMercancia === "fruta" || primeraMercancia === "verdura") && nuevaMercancia === "carne") {
    return "No se puede añadir carne a un porte que ya contiene fruta o verdura";
  }
  
  return null; // Compatible
};

// Función para añadir contenedores al porte
const añadirContenedoresAlPorte = function() {
  let errores = [];
  
  // Obtener valores del formulario
  const tipoContenedor = document.querySelector('input[name="txtContenedor"]:checked');
  const tipoMercancia = document.querySelector('input[name="txtMercancia"]:checked');
  const txtProducto = document.querySelector("#txtProducto");
  const chkEspecial = document.querySelector("[name='chkEspecial']");
  const numContenedoresInput = document.querySelector("#txtNumContendores");
  
  // Validaciones básicas
  if (!tipoContenedor) {
    errores.push("Debe seleccionar un tipo de contenedor");
  }
  
  if (!tipoMercancia) {
    errores.push("Debe seleccionar un tipo de mercancía");
  }
  
  if (!txtProducto) {
    errores.push("El campo producto es obligatorio");
  }
  
  if (!numContenedoresInput) {
    errores.push("Debe especificar el número de contenedores");
  }
  
  // Si hay errores básicos, mostrar diálogo y salir
  if (errores.length > 0) {
    crearDialog(errores);
    return;
  }
  
  const producto = txtProducto.value.trim();
  const numContenedores = parseInt(numContenedoresInput.value);
  
  // Validar producto
  const errorProducto = validarProducto(producto);
  if (errorProducto) {
    errores.push(errorProducto);
  }
  
  // Validar número de contenedores
  if (isNaN(numContenedores) || numContenedores <= 0) {
    errores.push("El número de contenedores debe ser un número positivo");
  }
  
  // Validar compatibilidad de mercancía
  if (tipoMercancia) {
    const errorCompatibilidad = validarMercanciaCompatibilidad(tipoMercancia.value);
    if (errorCompatibilidad) {
      errores.push(errorCompatibilidad);
    }
  }
  
  // Si hay errores, mostrar diálogo
  if (errores.length > 0) {
    crearDialog(errores);
    return;
  }
  
  // Actualizar si el porte es especial
  oPorte.especial = chkEspecial ? chkEspecial.checked : false;
  
  // Añadir los contenedores al objeto oPorte
  for (let i = 0; i < numContenedores; i++) {
    oPorte.contenedores.push({
      tipo: tipoContenedor.value,
      mercancia: tipoMercancia.value,
      producto: producto
    });
  }
  
  // Mostrar mensaje de éxito
  showToast(`Se añadieron ${numContenedores} contenedores al porte`);
  
  // Actualizar contador en la interfaz
  actualizarContadorPorte();
  
  // Limpiar formulario para siguiente entrada
  if (txtProducto) txtProducto.value = "";
  if (numContenedoresInput) numContenedoresInput.value = 1;
};

// Función para actualizar contador de contenedores en el porte
const actualizarContadorPorte = function() {
  const btnCrearPorte = document.querySelector("#btnCrearPorte");
  if (btnCrearPorte) {
    const count = oPorte.contenedores.length;
    btnCrearPorte.textContent = `Añadir porte a la jornada (${count} contenedores)`;
  }
};

// Función para añadir el porte a la jornada
const añadirPorteAJornada = async function() {
  if (oPorte.contenedores.length === 0) {
    showToast("No se puede añadir un porte vacío");
    return;
  }
  
  // Añadir el porte a la jornada
  oJornada.portes.push({
    especial: oPorte.especial,
    contenedores: [...oPorte.contenedores]
  });
  
  // Mostrar mensaje de éxito
  showToast(`Porte añadido a la jornada con ${oPorte.contenedores.length} contenedores`);
  
  // Resetear oPorte para un nuevo porte
  oPorte = {
    especial: false,
    contenedores: []
  };
  
  // Actualizar interfaz
  actualizarContadorPorte();
  crearLista();
  
  // Opcional: Enviar al servidor (simulado)
  try {
    const response = await fetch('/api/portes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(oJornada)
    });
    
    if (response.ok) {
      showToast("Datos enviados al servidor correctamente");
    } else {
      throw new Error('Error en el servidor');
    }
  } catch (error) {
    showToast("Error al conectar con el servidor, pero los datos se guardaron localmente");
  }
};

// Función para crear diálogo de errores
const crearDialog = function(errores) {
  let dialog = document.createElement("dialog");
  const div = document.createElement("div");
  const p = document.createElement("p");
  const boton = document.createElement("button");
  
  p.textContent = "Se encontraron los siguientes errores:";
  p.style.fontWeight = "bold";
  p.style.marginBottom = "10px";
  
  const ul = document.createElement("ul");
  ul.style.paddingLeft = "20px";
  ul.style.marginBottom = "20px";
  
  for (const error of errores) {
    const li = document.createElement("li");
    li.textContent = error;
    li.style.marginBottom = "5px";
    ul.appendChild(li);
  }
  
  boton.textContent = "Entendido";
  boton.type = "button";
  boton.style.padding = "8px 16px";
  boton.style.backgroundColor = "var(--accent-color)";
  boton.style.color = "white";
  boton.style.border = "none";
  boton.style.borderRadius = "4px";
  boton.style.cursor = "pointer";
  
  boton.addEventListener("click", () => {
    dialog.close();
    document.body.removeChild(dialog);
  });
  
  div.append(p, ul, boton);
  dialog.appendChild(div);
  document.body.appendChild(dialog);
  dialog.showModal();
};

// Función para cambiar tema
const cambiarTema = function() {
  let dialog = document.createElement("dialog");
  const form = document.createElement("form");
  const p = document.createElement("p");
  const boton1 = document.createElement("button");
  p.textContent = "¿Desea cambiar el tema?";
  const boton2 = document.createElement("button");

  boton1.textContent = "Cambiar tema";
  boton2.textContent = "Cerrar";
  boton1.type = "button";
  boton2.type = "button";

  boton2.addEventListener("click", () => {
    dialog.close();
    document.body.removeChild(dialog);
  });
  
  boton1.addEventListener('click', async () => {
    try {
      const { cambiarColor, showToast } = await import("./gestionarCSSyToast.js");
      cambiarColor();
      showToast("Tema Cambiado");
      dialog.close();
      document.body.removeChild(dialog);
    } catch (error) {
      console.error("Error al cargar el módulo:", error);
      showToast("Error al cambiar el tema");
    }
  });

  form.append(p, boton1, boton2);
  dialog.appendChild(form);
  document.body.appendChild(dialog);
  dialog.showModal();
};

// Función para crear lista de portes
const crearLista = function() {
  // Limpiar lista existente
  const listaExistente = document.querySelector("#lista");
  if (listaExistente) listaExistente.remove();
  
  if (oJornada.portes.length === 0) return;
  
  let ul = document.createElement("ul");
  const divCrearPorte = document.querySelector("#crearPorte");
  
  if (!divCrearPorte) return;
  
  ul.id = "lista";
  ul.style.marginTop = "20px";
  ul.style.padding = "10px";
  ul.style.backgroundColor = "#333";
  ul.style.borderRadius = "5px";
  
  let i = 0;
  for (const porte of oJornada.portes) {
    let li = document.createElement("li");
    li.textContent = `Porte ${i + 1}: ${porte.contenedores.length} contenedores ${porte.especial ? '(Especial)' : ''}`;
    li.dataset.pos = i;
    li.style.cursor = "pointer";
    li.style.padding = "8px";
    li.style.margin = "5px 0";
    li.style.backgroundColor = "#444";
    li.style.borderRadius = "3px";
    li.style.listStyleType = "none";
    i++;
    ul.append(li);
  }

  ul.addEventListener('click', crearTabla);
  divCrearPorte.append(ul);
};

// Función para crear tabla de detalles del porte
function crearTabla(e) {
  if (!e.target || e.target.tagName !== 'LI') return;
  
  // Eliminar tabla existente si hay una
  const tablaExistente = document.querySelector('#tabla-datos');
  if (tablaExistente) tablaExistente.remove();

  const pos = parseInt(e.target.dataset.pos);
  const porte = oJornada.portes[pos];
  
  if (!porte) return;
  
  // Crear nueva tabla
  const tabla = document.createElement('table');
  tabla.className = 'mi-tabla';
  tabla.id = 'tabla-datos';
  tabla.style.marginTop = "20px";
  tabla.style.width = "100%";
  tabla.style.borderCollapse = "collapse";
  
  // Crear encabezados
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  
  const headers = ['Tipo', 'Mercancía', 'Producto', 'Cantidad'];
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    th.style.padding = "10px";
    th.style.backgroundColor = "var(--accent-color)";
    th.style.color = "white";
    th.style.border = "1px solid #555";
    trHead.appendChild(th);
  });
  
  thead.appendChild(trHead);
  tabla.appendChild(thead);
  
  // Agrupar contenedores por tipo/mercancía/producto
  const grupos = {};
  porte.contenedores.forEach(contenedor => {
    const clave = `${contenedor.tipo}-${contenedor.mercancia}-${contenedor.producto}`;
    if (!grupos[clave]) {
      grupos[clave] = {
        tipo: contenedor.tipo,
        mercancia: contenedor.mercancia,
        producto: contenedor.producto,
        cantidad: 0
      };
    }
    grupos[clave].cantidad++;
  });
  
  // Crear cuerpo con datos agrupados
  const tbody = document.createElement('tbody');
  
  Object.values(grupos).forEach(grupo => {
    const tr = document.createElement('tr');
    
    const td1 = document.createElement('td');
    td1.textContent = grupo.tipo;
    td1.style.padding = "8px";
    td1.style.border = "1px solid #555";
    tr.appendChild(td1);
    
    const td2 = document.createElement('td');
    td2.textContent = grupo.mercancia;
    td2.style.padding = "8px";
    td2.style.border = "1px solid #555";
    tr.appendChild(td2);
    
    const td3 = document.createElement('td');
    td3.textContent = grupo.producto;
    td3.style.padding = "8px";
    td3.style.border = "1px solid #555";
    tr.appendChild(td3);
    
    const td4 = document.createElement('td');
    td4.textContent = grupo.cantidad;
    td4.style.padding = "8px";
    td4.style.border = "1px solid #555";
    td4.style.textAlign = "center";
    tr.appendChild(td4);
    
    tbody.appendChild(tr);
  });
  
  tabla.appendChild(tbody);
  
  // Insertar después de la lista
  const lista = document.querySelector("#lista");
  if (lista && lista.parentNode) {
    lista.parentNode.insertBefore(tabla, lista.nextSibling);
  }
}

// Función para cargar datos del fichero XML
async function tratarFichero(xml) {
  const jornada = xml.firstElementChild;
  if (jornada) {
    oJornada.fecha = jornada.getAttribute("fecha") || new Date().toLocaleDateString();
  }

  for (const porte of jornada.children) {
    const p = {
      especial: porte.getAttribute("especial") ? true : false,
      contenedores: [],
    };

    for (const contenedor of porte.children) {
      const tipo = contenedor.tagName == "box" ? "box" : "palé";
      const mercancia = contenedor.getAttribute("mercancia");
      const producto = contenedor.textContent;

      p.contenedores.push({
        tipo, mercancia, producto
      });
    }
    oJornada.portes.push(p);
  }

  crearLista();
}

const cargarDatosDelFichero = async function() {
  try {
    const response = await fetch("portes.xml");
    if (!response.ok) throw new Error("No se pudo cargar el fichero XML");

    const texto = await response.text();
    const xml = new window.DOMParser().parseFromString(texto, "text/xml");
    tratarFichero(xml);
  } catch (error) {
    console.error("Error al cargar el fichero:", error);
    // Fecha por defecto si no hay XML
    oJornada.fecha = new Date().toLocaleDateString();
  }
};

// Función showToast simplificada para usar si no se carga el módulo
function showToast(mensaje) {
  // Intentar usar el módulo si está disponible
  if (window.showToastModule) {
    window.showToastModule(mensaje);
    return;
  }
  
  // Fallback simple
  const toast = document.createElement('div');
  toast.textContent = mensaje;
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.right = '20px';
  toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  toast.style.color = 'white';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '5px';
  toast.style.zIndex = '10000';
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 500);
  }, 3000);
}

// Inicialización cuando el DOM esté cargado
window.addEventListener('DOMContentLoaded', () => {
  const divPage = document.querySelector("#landingPage");
  const crearPorte = document.querySelector("#crearPorte");
  
  if (crearPorte) crearPorte.classList.add("ocultar");
  if (divPage) divPage.classList.remove("ocultar");
  
  // Inicializar contador
  actualizarContadorPorte();
  
  // Cargar datos del fichero
  cargarDatosDelFichero();
  
  // Precargar módulo de toast
  import("./gestionarCSSyToast.js")
    .then(module => {
      window.showToastModule = module.showToast;
    })
    .catch(() => {
      console.log("Módulo toast no disponible, usando versión simple");
    });
});

// Configuración de navegación
document.querySelector("#btnCambiarTema").addEventListener('click', cambiarTema);

const btnInicio = document.querySelector('#btnInicio');
const btnPortes = document.querySelector("#btnPortes");

// Función para mostrar la página de portes
btnPortes.addEventListener('click', () => {
  const divPage = document.querySelector("#landingPage");
  const crearPorte = document.querySelector("#crearPorte");
  
  if (divPage && crearPorte) {
    divPage.classList.add("ocultar");
    crearPorte.classList.remove("ocultar");
    // Arreglar formulario cuando se muestra
    setTimeout(() => arreglarFormulario(), 10);
  }
});

// Función para mostrar la página de inicio
btnInicio.addEventListener('click', () => {
  const divPage = document.querySelector("#landingPage");
  const crearPorte = document.querySelector("#crearPorte");
  
  if (divPage && crearPorte) {
    divPage.classList.remove("ocultar");
    crearPorte.classList.add("ocultar");
  }
});

// Configurar botones del formulario
document.querySelector("#btnAddContenedorAlPorte").addEventListener('click', añadirContenedoresAlPorte);
document.querySelector("#btnCrearPorte").addEventListener('click', añadirPorteAJornada);