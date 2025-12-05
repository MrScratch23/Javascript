"use strict";


function procesarListaAlumnos(tbody) {
    
    const itemsAlumnos = document.querySelector('.listaAlumnos');
    
 for (const li of itemsAlumnos.children) {
    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    const tdApellidos = document.createElement("td");
    tr.append(tdNombre, tdApellidos);
    tbody.append(tr);

    const [nombre, apellidos] = li.textContent.split(" ");
    tdNombre.textContent = nombre;
    tdApellidos.textContent = apellidos;


 }
}



document.querySelector("#agregarAlumno").addEventListener('click', e => {
    const nombre = document.querySelector("#nombre").value.trim();
    const apellido = document.querySelector("#apellido").value.trim();
    const checkboxAlt = document.querySelector('input[type="checkbox"]');

    let li = document.createElement("li");
    li.textContent = nombre + " " + apellido;

    if (checkboxAlt) {
         document.querySelector(".listaAlumnos").appendChild(li);
    }
    document.querySelector(".listaAlumnos").prepend(li);
   
 

      const tabla = document.querySelector("#tablaAlumnos");
    
        const tbody = tabla.querySelector('tbody');
        const tr = document.createElement('tr');
        const tdNombre = document.createElement('td');
        const tdApellido = document.createElement('td');
        
        tdNombre.textContent = nombre;
        tdApellido.textContent = apellido;
        
        tr.append(tdNombre, tdApellido);
        tbody.append(tr);
    


})






document.querySelector("#crearTabla").addEventListener('click', e => {

     const tablaExistente = document.querySelector("#tablaAlumnos");
    
   
    if (tablaExistente) {
        tablaExistente.remove();
    }

  
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const trHead = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");

th1.textContent = "Nombre";
th2.textContent = "Apellidos";



trHead.append(th1, th2);
thead.append(trHead);

table.append(thead, tbody);

procesarListaAlumnos(tbody);

table.id="tablaAlumnos";
document.body.append(table);


})

document.querySelector(".listaAlumnos").addEventListener('click', e => {
    if (e.target.tagName != "LI") {
        return;
    }
    
    const li = e.target;
    const lista = li.parentElement;
    lista.prepend(li);
});