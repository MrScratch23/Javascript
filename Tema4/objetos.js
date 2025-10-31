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
        return `Nombre: ${this.nombreFichero} - Tamaño: " ${this.tamaño} " bytes`;
    }

}


class Cancion extends Fichero {
    constructor(nombreFichero, tamaño, nombreCancion, duracion) {
        super(nombreFichero, tamaño); 
        this.nombreCancion = nombreCancion;  // Nombre artístico de la canción
        this.duracion = duracion;
    }

    getDatos(){
        return `Canción: ${this.nombreCancion} - Archivo: ${this.nombreFichero} - Duración: ${this.duracion} segundos - Tamaño: ${this.tamaño} bytes`;
    }
}