"use strict";


// <?xml version="1.0" encoding="UTF-8"?>
// <portes fecha="07/03/2025">
//   <porte especial="especial">
//     <palé mercancia="fruta">Melón</palé>
//     <palé mercancia="fruta">Sandía</palé>
//     <box mercancia="verdura">Calabacín</box>
//   </porte>



const arreglarFormulario = function() {
  const txtContenedor = document.querySelector("[name='txtContenedor']");
  txtContenedor.checked = true;
  txtContenedor.parentElement.nextElementSibling.firstElementChild.name = "txtContenedor";

  const txtFruta = document.querySelector("[name='txtFruta']");
   txtFruta.checked = true;

};

const cambiarTema = function() {
  
    let dialog = document.createElement("dialog");
    const form = document.createElement("form");
    const p = document.createElement("p");
    const boton1 = document.createElement("button");
    p.textContent = "¿Desea cambiar el tema?";
    const boton2 = document.createElement("button");


    boton1.textContent = "Cambiar tema";
    boton2.textContent = "Cerrar"
    boton1.type = "button";
    boton2.type = "button";
    

    boton2.addEventListener("click", () => {
        dialog.close();
        document.body.removeChild(dialog);
    });
    
    boton1.addEventListener('click', async () => {

        try {
        const {cambiarColor, Toasty} = await import ("./gestionarCSSyToast.js");
        cambiarColor();
        Toasty("Tema Cambiado");
        } catch (error) {
            console.error("Error al cargar el modulo");
        }

       
    });

        
form.append(p, boton1,boton2);

    dialog.appendChild(form);


    document.body.appendChild(dialog);
    dialog.show();


};


const crearLista = function() {
  let ul = document.createElement("ul");
  const divCrearPorte = document.querySelector("crearPorte");
    ul.id = "lista";
    let i = 0;
    for (const porte of oJornada.portes) {
        let li = document.createElement("li");
        li.textContent = "Porte: " + (i +1);
        li.dataset.pos =i;
        i++;
        ul.append(li);
    }

    ul.addEventListener('click', crearTabla)
  divCrearPorte.append(ul);
};

function crearTabla(e) {
    // Crear estructura básica de tabla
    const tabla = document.createElement('table');
    tabla.className = 'mi-tabla';
    tabla.id = 'tabla-datos';
    if (tabla) tabla.remove();
    
    // Crear encabezados
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    
    const th1 = document.createElement('th');
    th1.textContent = 'Nombre';
    trHead.appendChild(th1);
    
    const th2 = document.createElement('th');
    th2.textContent = 'Apellido';
    trHead.appendChild(th2);
    
    const th3 = document.createElement('th');
    th3.textContent = 'Edad';
    trHead.appendChild(th3);
    
    thead.appendChild(trHead);
    tabla.appendChild(thead);
    
    // Crear cuerpo
    const tbody = document.createElement('tbody');
    tabla.appendChild(tbody);
    
    // Insertar en el DOM
    document.querySelector('.contenedor').appendChild(tabla);



    
}

async function tratarFichero(xml) {
    const jornada = xml.firstElementChild;
 oJornada.fecha =  jornada.getAttribute("fecha");


 for (const porte of jornada.children) {
    const p = {
        especial: porte.getAttribute("especial") ? true : false,
        contenedores: [],
    }

    for (const contenedor of porte.children) {
        const tipo = contenedor.tagName == "box" ? "box" : "palé";
        const mercancia = contenedor.getAttribute("mercancia");
        const producto = contenedor.textContent;

        p.contenedores.push( {
            tipo, mercancia, producto
        });
    }
    oJornada.portes.push(p);
 }

 crearLista();

}


const cargarDatosDelFichero =  async function() {
  try {
    const response = await fetch ("portes.xml");
    if (!response.ok) throw new Error("No se pudo cargar el fichero XML");

        const texto = await response.text();
        const xml = new window.DOMParser().parseFromString(texto, "text/xml");
        tratarFichero(xml);
    
  } catch (error) {
    
  }
};

const oJornada = {
fecha : "",
portes: []
};


const porteNuevo = function() {
  
    let errores = [];
    const txtProducto = document.querySelector("#txtProducto").value.trim();

    if (txtProducto.lenght > 20 || txtProducto.lenght === 0) {
        errores.push("Error con el producto");
    }

    if (errores.lenght==0) {
        
    } else {
        crearDialog(errores);
    }



};

const crearDialog = function(errores) {
  return
};


arreglarFormulario();

cargarDatosDelFichero()

const btnCambiarTema = document.querySelector("#btnCambiarTema").addEventListener('click', cambiarTema);
const btnInicio = document.querySelector('#btnInicio');
const btnPortes = document.querySelector("#btnPortes");

// Función para mostrar la página de portes
btnPortes.addEventListener('click', () => {
    const divPage = document.querySelector("#landingPage");
    const crearPorte = document.querySelector("#crearPorte");
    
    // Ocultar landing page
    divPage.setAttribute("ocultar", "");
    
    // Mostrar crear porte
    crearPorte.removeAttribute("ocultar");
});

// Función para mostrar la página de inicio
btnInicio.addEventListener('click', () => {
    const divPage = document.querySelector("#landingPage");
    const crearPorte = document.querySelector("#crearPorte");
    
    // Mostrar landing page
    divPage.removeAttribute("ocultar");
    
    // Ocultar crear porte
    crearPorte.setAttribute("ocultar", "");
});


document.querySelector("#btnAddContenedorAlPorte").addEventListener('click', porteNuevo);

/////////////////
// FUNCTIONS
///////////////////



/////////////////
// MAIN
///////////////////


// ID de los botones
// btnCambiarTema
// btnPortes
// btnInicio

// btnAddContenedorAlPorte
// btnCrearPorte



