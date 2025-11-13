
"use strict";


/**
 *
 *
 * @class Libro
 * @param {String} isbn - El código ISBN del libro.
 * @param {String} titulo - El título del libro.
 * @param {String} genero - El género del libro.
 * @param {number} anio - El año de publicación del libro.
 * @param {Autor} autor - objeto autor
 * @param {boolean} prestado - true para si lo esta, false para si no. 
 */
class Libro {
    constructor(isbn, titulo, genero, anio) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.autor = null;
        this.prestado = false;
    }
    
    asignarAutor(autor) {
        const autorExiste = Libro.find(l => l.autor.trim().toLowerCase() === autor.nombre.trim().toLowerCase())
        if (autorExiste) {
            return "Este libro ya tiene asignado este autor";
        } else {
            this.autor = autor;
        }
    }

    marcarPrestado () {
            this.prestado = true;
        }

    marcarDisponible () {
        this.prestado = false;
    }

}




/**
 *
 *
 * @class Autor
 * @param {String} id
 * @param {String} nombre
 * @param {String} nacionalidad
 * @param {Array} libros
 */
class Autor {
    constructor(id, nombre, nacionalidad) {
        this.id = id;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.libros = [];
    }
    
    agregarLibro(libro) {
        const libroExiste = this.libros.find(l => l.isbn.trim().toLowerCase() === libro.isbn.trim().toLowerCase())
        if (libroExiste) {
            return "El autor ya tiene asignado este libro";
        } else {
            this.libros.push(libro);
        }


    }
}



/**
 *
 *
 * @class Estudiante
 * @param {String} matricula
 * @param {String} nombre
 * @param {String} carrera
 * @param {Number} semestre
 * @param {Array} librosPrestados
 */
class Estudiante {
    constructor(matricula, nombre, carrera, semestre) {
        this.matricula = matricula;
        this.nombre = nombre;
        this.carrera = carrera;
        this.semestre = semestre;
        this.librosPrestados = [];
    }
    
    agregarPrestamo(libroPrestado) {
        const existePrestamo = this.librosPrestados.find(l => l.isbn.trim().toLowerCase === libroPrestado.isbn.trim().toLowerCase())
        if (existePrestamo) {
            return "El estudiante ya ese libro en prestamo.";
        } else {
            this.librosPrestados.push(libroPrestado);
        }
    }

    devolverPrestamo(libroDevolver){
        const indice = this.librosPrestados.findIndex(l => l.isbn.trim().toLowerCase() === libroDevolver.isbn.trim().toLowerCase)
        if (indice <0) {
            return "No existe ese libro en los prestamos.";
        } else {
            this.librosPrestados.splice(indice, 1);


        }
    }


}


/**
 *
 *
 * @param {*} isbn
 * @param {*} matricula
 * @param {*} fechaPrestamo
 * @param {*} fechaDevolucion
 */
function Prestamo (isbn, matricula, fechaPrestamo, fechaDevolucion) {
  this.isbn = isbn;
  this.matricula = matricula;
  this.fechaPrestamo = fechaPrestamo;
  this.fechaDevolucion = fechaDevolucion;
  this.devuelto = false;
}

// Métodos del objeto usando prototipos
Prestamo.prototype.marcarDevuelto = function() {

this.devuelto = true;
return "Libro devuelto";

};



