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

    constructor(nombreCancion, duracion) {
        super(nombreFichero,tamaño);
        this.nombreFichero = nombreCancion;
        this.duracion = duracion;
        
    }

    getDatos(){
        return `Nombre: ${this.nombreCancion} - Duracion: ${this.duracion} - Tamaño: ${this.tamaño}`;
    }
}

