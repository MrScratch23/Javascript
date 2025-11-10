"use strict";


/**
 *
 *
 * @class Vehiculo
 * @description Clase que representa un vehículo con sus propiedades y métodos.
 * @param {string} marca - La marca del vehículo.
 * @param {string} modelo - El modelo del vehículo.
 * @param {number} año - El año de fabricación del vehículo.
 * @param {number} precio - El precio del vehículo.
 * @param {boolean} stock - Indica si el vehículo está en stock (true) o no (false).
 * @method obtenerDescripcion - Devuelve una descripción completa del vehículo.
 * @method vender - Cambia el estado del stock del vehículo.
 */
class Vehiculo {
    constructor(marca, modelo, año, precio, stock) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.stock = stock;
    }
    
    obtenerDescripcion() {
        return `Marca: ${this.marca} - Modelo: ${this.modelo} - Año: ${this.año} - Precio: ${this.precio} - Stock: ${this.stock?"Si":"No"}`;
    }

    vender() {
        if (this.stock === true) {
            this.stock === false;
        } elseif (this.stock === false)
        this.stock === true;
    }
}


/**
 * @class Coche
 * @extends {Vehiculo}
 * 
 */
class Coche extends Vehiculo {
    constructor(marca, modelo, año, precio, stock, numeroPuertas, matricula, tipoCombustible) {
        super(marca, modelo, año, precio, stock);
        this.numeroPuertas = numeroPuertas;
        this.matricula = matricula;
        this.tipoCombustible = tipoCombustible;
    }
    
   calcularImpuestos() {
    let impuestos = 0;
    let tipo = this.tipoCombustible.toLowerCase;
    let precio = this.precio;

    if (tipo === "gasolina") {
        impuestos = precio * 0.10;
    } 
    if (tipo === "diesel") {
        impuestos = precio * 0.15;
    } 
    if (tipo === "electrico" || tipo === "gas") {
        impuestos = precio * 0.5;
    }
    return `Los impuestos son un total de: ${impuestos} del precio original: ${precio}`;
    }

    obtenerDescripcion() {
        return `${super.obtenerDescripcion()} - Nº Puertas: ${this.numeroPuertas} - Matrícula: ${this.matricula} - Tipo Combustible: ${this.tipoCombustible}`;
    }


}
/**
 *
 *
 * @class Motocicleta
 * @extends {Vehiculo}
 */
class Motocicleta extends Vehiculo {
    constructor(marca, modelo, año, precio, stock, matricula, cilidranda, tipo) {
        super(marca, modelo, año, precio, stock);
        this.matricula = matricula;
        this.cilidranda = cilidranda;
        this.tipo = tipo;
    }
    obtenerDescripcion() {
        return `${super.obtenerDescripcion()} - Matrícula: ${this.matricula} - Cilindrada: ${this.cilidranda} - Tipo: ${this.tipo}`;
    }
    calcularImpuesto() {
        let cilindrada = this.cilidranda;
        let impuestos = 0
        let precio = this.precio

        if (cilindrada < 500) {
            impuestos = precio * 0.5;
        }
        if (cilindrada > 500) {
            impuestos = precio * 1.5
            
        }
        return `Los impuestos son un total de: ${impuestos} del precio original: ${precio}`;

    }

}