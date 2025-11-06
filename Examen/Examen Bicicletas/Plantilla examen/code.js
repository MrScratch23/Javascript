"use strict";

// funciones
let arrayBicis = [];
// datos de prueba
arrayBicis.push(new Carretera(1, 2009, false, 8));
arrayBicis.push(new Carretera(2, 2005, false, 5));
arrayBicis.push(new Carretera(3, 2003, true, 3));
arrayBicis.push(new Montaña(4, 1967, true, 3));
arrayBicis.push(new Montaña(5, 2000, false, 7));
arrayBicis.push(new Montaña(6, 2001, false, 5));


const mostrarAlta = function() {
    
    const localizador = document.querySelector("#txtLocalizador").value.trim();
    const anio = document.querySelector("#lstAnio").value.trim();
    const tipoBicicleta = document.querySelector('input[name="rbtTipoBicicleta"]:checked')?.value;
    if (!tipoBicicleta) {
        alert("Selecciona una opción");
        return;
    }

    const suspensiones = document.querySelector("#txtSuspensiones").valueAsNumber;
    const platos = document.querySelector("#txtPlatos").valueAsNumber;

    if (localizador === "" || anio === "" || tipoBicicleta === "" || suspensiones === "" || platos === "") {
        alert("Todos los campos deben estar rellenos.");
    }

    let bicicleta = [localizador, anio, tipoBicicleta, suspensiones, platos];
    
    for (const bici of arrayBicis) {
        if (bici.localizador === localizador) {
            alert("Bicicleta registrada previamente.")
            return;
        }    
    }

    let nuevaBici;
    if (tipoBicicleta === "carretera") {
        // 
        nuevaBici = new Carretera(localizador, anio, false, platos);
    } else if (tipoBicicleta === "montana") {
        nuevaBici = new Montaña(localizador, anio, false, suspensiones );
    }

    arrayBicis.push(nuevaBici);
    alert("Alta Bicicleta OK");
    // ocultar con style.display = "none"
    const frmAltaBicicleta = document.querySelector("form[form='frmAltaBicicleta']");
frmAltaBicicleta.style.display = "none";
    // con css
    // const frmAltaBicicleta = document.querySelector("#frmAltaBicicleta");
    //frmAltaBicicleta.classList.add("hidden"); // O "d-none" si usas Bootstrap


};

const mostrarVenta = function() {
    const localizador = document.querySelector("[name='txtLocalizadorVenta']").value;

    
    if (isNaN(localizador)) {
        alert("Introduce un localizador válido");
        return;
    }

    for (const bici of arrayBicis) {
        if (bici.localizador === localizador) {
            if (!bici.vendida) {
                bici.vendida = true;
                alert("Bicicleta vendida correctamente");
            } else {
                alert("Bicicleta ya estaba vendida");
            }
            return;
        }      
    }
    
    alert("Bicicleta no encontrada");
};

const mostrarTotales = function() {
 
const totales = document.querySelector("#totales");

let bicisMontaña = 0;
let bicisCarretera = 0;
let totalBicicletas = arrayBicis.length;
let totalVentas = 0;
let totalSinVender = 0;
/*
<h3>Bicicletas de carretera: 0 </h3>
<h3>Bicicletas de montaña: 0 </h3>
<h3>Total de bicicletas: 0 </h3>
<h3>Total de ventas: 0 </h3>
*/

for (const bici of arrayBicis) {
    if (bici instanceof Montaña) {
        bicisMontaña++;
    } 
    if (bici instanceof Carretera) {
        bicisCarretera++;
    }
    if (bici.vendida) {
        totalVentas++;
    }
    if (!bici.vendida) {
        totalSinVender++;
    }
}

totales.innerHTML = `
<h3>Bicicletas de carretera: ${bicisCarretera} </h3> <br>
<h3>Bicicletas de montaña: ${bicisMontaña} </h3> <br>
<h3>Total de bicicletas: ${totalBicicletas} </h3> <br>
<h3>Total de ventas: ${totalVentas} </h3> <br>
<h3> Total sin vender: ${totalSinVender} </h3>
`
 
};

const mostrarListado = function() {
  
};





// main



const btnMostrarAlta = document.querySelector("#btnAltaBicicleta");
const btnMostrarVenta = document.querySelector("#btnVentaBicicleta");
const btnAccionTotales = document.querySelector("#btnMostrarTotales");
const btnAccionListado = document.querySelector("#btnMostrarListado");






btnMostrarAlta.addEventListener('click', mostrarAlta);
btnMostrarVenta.addEventListener('click', mostrarVenta);
btnMostrarTotales.addEventListener('click', mostrarTotales);
btnMostrarListado.addEventListener('click', mostrarListado);