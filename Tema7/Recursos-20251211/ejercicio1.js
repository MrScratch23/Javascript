"use strict";

function loadXMLDoc(filename, callback) {
  let xhttp; // Definimos el objeto XMLHTTPRequest
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  }
  else { // código de IE5 and IE6
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function (){ // Definimos el listener
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        callback(xhttp.responseXML);
        // callback(xhttp.responseText); // si el fichero es de texto
      } else {
        console.log("Hubo un error con la petición.");
      }
    }	
  };
  xhttp.open("GET", filename, true); //true = asíncrona, //false = síncrona
  xhttp.send();
}

const listado = document.querySelector("#listado");

// Crear estructura básica de tabla
        const tabla = document.createElement('table');
        tabla.className = 'mi-tabla';
        tabla.id = 'tabla-datos';
        
        // Crear encabezados
        const thead = document.createElement('thead');
        const trHead = document.createElement('tr');
        
        const th1 = document.createElement('th');
        th1.textContent = 'Nombre';
        trHead.appendChild(th1);
        
        const th2 = document.createElement('th');
        th2.textContent = 'Precio';
        trHead.appendChild(th2);
        
        const th3 = document.createElement('th');
        th3.textContent = 'Descripcion';
        trHead.appendChild(th3);
        
        const th4 = document.createElement('th');
        th4.textContent = "Calorias";
        trHead.appendChild(th4)

        thead.appendChild(trHead);
        tabla.appendChild(thead);
        
        // Crear cuerpo
        const tbody = document.createElement('tbody');
        tabla.appendChild(tbody);


const tratarXML = (XML) => {

    console.log(XML)
    XML.querySelectorAll("food").forEach(food=> {
        const name = food.children[0].textContent;
        const precio = food.children[1].textContent;
        console.log(name);
        console.log(precio);
        const descripcion = food.children[2].textContent;
        console.log(descripcion);
        const calorias = food.children[3].textContent;
        console.log(calorias);

        
        
    // Agregar nueva fila a tabla existente

    const tr = document.createElement('tr');
    
    const tdNombre = document.createElement('td');
    tdNombre.textContent = name;
    tdNombre.className = 'nombre';
    tr.appendChild(tdNombre);
    
    const tdPrecio = document.createElement('td');
    tdPrecio.textContent = precio;
    tdPrecio.className = 'precio';
    tr.appendChild(tdPrecio);
    
    const tdDescripcion = document.createElement('td');
    tdDescripcion.textContent = descripcion;
    tdDescripcion.className = 'descripcion';
    tr.appendChild(tdDescripcion);

    const tdCalorias = document.createElement('td');
    tdCalorias.textContent = calorias;
    tdDescripcion.className = "calorias";
    tr.appendChild(tdCalorias)    
    
    tbody.appendChild(tr);

        // forma desestructurada
        // const [nombre, precio, descripcion, calorias] = food.children;

    }) 

    
}

const cargar = document.querySelector("#cargar").addEventListener('click', e => {

loadXMLDoc("simple.xml", tratarXML);
listado.append(tabla);

});
