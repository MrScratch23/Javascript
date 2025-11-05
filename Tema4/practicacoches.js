"use strict";

// funciones
let arrayVehiculos = [];
// vehiculos de prueba
// Vehículos de prueba
const vehiculo1 = new Vehiculo("Toyota", "Corolla", 2023, 20000, true);
arrayVehiculos.push(vehiculo1);

const coche1 = new Coche("Honda", "Civic", 2022, 25000, true, 4, "1234XYZ", "Gasolina");
arrayVehiculos.push(coche1);

const coche2 = new Coche("Tesla", "Model 3", 2023, 35000, true, 4, "5678ABC", "Electrico");
arrayVehiculos.push(coche2);

const moto1 = new Motocicleta("Yamaha", "R1", 2021, 15000, true, "A123BCD", 600, "Deportiva");
arrayVehiculos.push(moto1);

const moto2 = new Motocicleta("Kawasaki", "Ninja 400", 2022, 9000, true, "B234CDE", 399, "Deportiva");
arrayVehiculos.push(moto2);


const añadirVehiculo = function() {
  
const tipoVehiculo = document.querySelector('input[name="tipoVehiculo"]:checked')?.value;
if (!tipoVehiculo) {
    alert("Selecciona una opción");
    return;
}


const marca = document.querySelector("#marca").value;
const modelo = document.querySelector("#modelo").value;
const matricula = document.querySelector("#matricula").value;
const precio = document.querySelector("#precio");

if (marca === "" || modelo === "" || matricula === "" || precio === "") {
    alert("Todas las opciones deben ser rellenadas");
    return;
}

if (tipoVehiculo.toLowerCase === "coche") {
    const tipoCombustible = document.querySelector('input[name="tipoCombustibleCoche"]:checked')?.value;
    if (!tipoCombustible) {
        alert("Selecciona una opción para el combustible");
        return;
    }

    const numeroPuertas = document.querySelector("#numeroPuertas");
    let coche = new Coche(marca, modelo, matricula, precio, tipoCombustible, numeroPuertas);
    arrayVehiculos.push(coche);
}


if (tipoVehiculo.toLowerCase === "motocicleta") {
    const cilindrada = document.querySelector("#cilindrada").valueAsNumber;
    const tipoMoto = document.querySelector("#tipoMoto").value;

    let motocicleta = new Motocicleta(marca, modelo, matricula, precio, cilindrada, deportivo);
    arrayVehiculos.push(motocicleta);
}

};

const listarVehiculos = function() {
  const lista = document.querySelector("#listaVehiculos");

  let sol = `<ul>`

  for (const vehiculo of arrayVehiculos) {
      sol += `<li>${vehiculo.marca}</li>`;
      sol += `<li>${vehiculo.modelo}</li>`;
      sol += `<li>${vehiculo.año}</li>`;
      sol += `<li>${vehiculo.precio}</li>`;
      sol += `<li>${vehiculo.stock}</li>`;
      sol += `<li>${vehiculo.obtenerDescripcion()}</li>`;
  }

  sol += `</ul>`;

  lista.innerHTML = sol;


};

const venderVehiculo = function() {
  const matriculaVenta = document.querySelector("#matriculaVenta").value;
  const mensajeVenta = document.querySelector("#mensajeVenta");
  let sol = "";

  for (const vehiculo of arrayVehiculos) {
    if (matriculaVenta === vehiculo.matricula) {
      if (vehiculo.stock === true) {
        vehiculo.stock === false;
      } else if (vehiculo.stock === false) {
        vehiculo.stock === true;
      }
      sol += "Venta de vehiculo confirmado.";
    } else {
      sol += "Error en la venta. Matriculo no encontrada.";
    }
  }

  mensajeVenta.innerHTML = sol;


  return
};

const calcularImpuestos = function() {
  return
};


// main

const btnAñadir = document.querySelector("#btnAñadir");
const btnListarVehiculos = document.querySelector("#btnListarVehiculos");
const btnVender = document.querySelector("#btnVender");
const btnCalcularImpuestos = document.querySelector("#btnCalcularImpuestos");

btnAñadir.addEventListener('click', añadirVehiculo);
btnListarVehiculos.addEventListener('click', listarVehiculos);
btnVender.addEventListener('click', venderVehiculo);
btnCalcularImpuestos.addEventListener('click', calcularImpuestos);


