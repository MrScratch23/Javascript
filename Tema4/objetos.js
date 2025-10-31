"use strict"

class Fichero {
    constructor(nombreFichero, tamaño) {
        this.nombreFichero = nombreFichero;
    this.tamaño = tamaño;
    }
    extension () {
        // para obtener la extensión del fichero
        let partes = this.nombreFichero.split(".");
        return partes[partes.length - 1];
    }
    getDatos () {
        return `Nombre: ${this.nombreFichero} - Tamaño: " ${this.tamaño} " MB`;
    }

}


class Cancion extends Fichero {
    constructor(nombreFichero, tamaño, nombreCancion, duracion) {
        super(nombreFichero, tamaño); 
        this.nombreCancion = nombreCancion;  // Nombre artístico de la canción
        this.duracion = duracion;
    }

    getDatos(){
        return `Canción: ${this.nombreCancion} - Duración: ${this.duracion} minutos - Tamaño: ${this.tamaño} MB`;
    }
}

// usando herencia de prototipos
// creamos el fichero
// function Fichero (nombreFichero, tamaño) {
//     this.nombreFichero = nombreFichero;
//     this.tamaño = tamaño;
// }

// // creamos la canción
// function Cancion (nombreFichero, tamaño, nombreCancion, duracion) {
//     Fichero.call(this, nombreFichero, tamaño); // llamar al constructor de la clase padre
//     this.nombreCancion = nombreCancion;  // Nombre artístico de la canción
//     this.duracion = duracion;
// }
// Fichero.prototype.extension = function() {
//     // para obtener la extensión del fichero
//     let partes = this.nombreFichero.split(".");
//     return partes[partes.length - 1];
// };

// Fichero.prototype.getDatos = function() {
//     return `Nombre: ${this.nombreFichero} - Tamaño: " ${this.tamaño} " MB`;
// };

// Cancion.prototype = Object.create(Fichero.prototype);
// Cancion.prototype.constructor = Cancion;

// Cancion.prototype.getDatos = function() {
//     return `Canción: ${this.nombreCancion} - Duración: ${this.duracion} minutos - Tamaño: ${this.tamaño} MB`;
// };
