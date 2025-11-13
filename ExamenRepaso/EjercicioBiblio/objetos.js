// =============================================
// 🎯 CLASES - GESTIÓN DE BIBLIOTECA
// =============================================

// 📖 CLASE LIBRO - 
 class Libro {
    constructor(isbn, titulo, genero, anio, autor = null) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.autor = autor;
        this.prestado = false;
    }
    
    AsignarAutor(autor) {
        // VERIFICAR PRIMERO SI EL AUTOR ES VÁLIDO
        if (!autor || !autor.id) {
            return "Error: Autor no válido";
        }
        
        // VERIFICAR SI YA TIENE ESTE AUTOR ASIGNADO
        if (this.autor && this.autor.id === autor.id) {
            return "Este libro ya tiene asignado este autor.";
        } else {
            this.autor = autor;
            return "Autor asignado correctamente";
        }
    }
    
    marcarPrestado() {
        if (this.prestado === false) {
            this.prestado = true;
            return "Libro marcado como prestado";
        }
        return "El libro ya estaba prestado";
    }

    marcarDisponible() {
        if (this.prestado === true) {
            this.prestado = false;
            return "Libro marcado como disponible";
        }
        return "El libro ya estaba disponible";
    }
}
    

// 👨‍🏫 CLASE AUTOR 
class Autor {
    constructor(id, nombre, nacionalidad, libros = []) {
        this.id = id;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.libros = libros;
    }
    
    agregarLibro(libro) {
        const existeLibro = this.libros.some(l => l.isbn === libro.isbn)
        if (existeLibro) {
           return "Este autor ya tiene este libro registrado"; 
        } else {
            this.libros.push(libro);
            return "Libro agregado al autor correctamente";
        }
    }
}

// 🎓 CLASE ESTUDIANTE 
class Estudiante {
    constructor(matricula, nombre, carrera, semestre, librosPrestados = []) {
        this.matricula = matricula;
        this.nombre = nombre;
        this.carrera = carrera;
        this.semestre = semestre;
        this.librosPrestados = librosPrestados;
    }
    
    agregarPrestamo(libro) {
        const libroPrestado = this.librosPrestados.some(l => l.isbn === libro.isbn);
        if (libroPrestado) {
            return "Este estudiante ya tiene este libro prestado.";
        } else {
            this.librosPrestados.push(libro);
            return "Préstamo agregado correctamente";
        }
    }

    devolverLibro(libro) {
        const indice = this.librosPrestados.findIndex(l => l.isbn === libro.isbn);
        if (indice !== -1) {
            this.librosPrestados.splice(indice, 1);
            return "Libro devuelto correctamente";
        }
        return "Este estudiante no tenía este libro prestado";
    }
}

// 📋 CLASE PRÉSTAMO 
class Prestamo {
    constructor(isbn, titulo, matricula, fechaPrestamo, fechaDevolucion) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.matricula = matricula;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
        this.devuelto = false;
    }
    
    marcarDevuelto() {
        this.devuelto = true;
        return "Préstamo marcado como devuelto";
    }
}

/* Constructor para un objeto genérico
function Libro(isbn, titulo, genero, anio, autor = null) {
  this.id = isbn;
  this.titulo = titulo;
  this.genero = genero;
  this.anio = anio;
  this.autor = autor;
  this.prestado = false;
}

// Métodos del objeto usando prototipos
Libro.prototype.AsignarAutor = function(autor) {
        // VERIFICAR PRIMERO SI EL AUTOR ES VÁLIDO
        if (!autor || !autor.id) {
            return "Error: Autor no válido";
        }
        
        // VERIFICAR SI YA TIENE ESTE AUTOR ASIGNADO
        if (this.autor && this.autor.id === autor.id) {
            return "Este libro ya tiene asignado este autor.";
        } else {
            this.autor = autor;
            return "Autor asignado correctamente";
        }
    }

    Libro.prototype.MarcarPrestado = function() {
        if (this.prestado === false) {
            this.prestado = true;
            return "Libro marcado como prestado";
        }
        return "El libro ya estaba prestado";

    }

    Libro.prototype.MarcarDisponible = function() {    
        if (this.prestado === true) {
            this.prestado = false;
            return "Libro marcado como disponible";
        }
        return "El libro ya estaba disponible";
    }
   
  
// --------- Herencia: Clase LibroDigital (hija de Libro) ---------

// Constructor de la clase LibroDigital
function LibroDigital(isbn, titulo, genero, anio, autor = null, formato = "PDF", resolucion = "1080p") {
  // Llamamos al constructor de la clase padre (Libro)
  Libro.call(this, isbn, titulo, genero, anio, autor);
  this.formato = formato; // Nuevo atributo para el formato digital
  this.resolucion = resolucion; // Nuevo atributo para la resolución
}

// Heredando los métodos de Libro
LibroDigital.prototype = Object.create(Libro.prototype);

// Agregar métodos específicos de la clase LibroDigital
LibroDigital.prototype.CambiarResolucion = function(resolucion) {
  this.resolucion = resolucion;
  return `Resolución cambiada a: ${resolucion}`;
};

LibroDigital.prototype.CambiarFormato = function(formato) {
  this.formato = formato;
  return `Formato cambiado a: ${formato}`;
};

// ----- Ejemplo de uso -----
const autor1 = { id: 1, nombre: "J.K. Rowling", nacionalidad: "Británica" };
const libroFisico = new Libro("978-3-16-148410-0", "Harry Potter y la Piedra Filosofal", "Fantasía", 1997, autor1);
const libroDigital = new LibroDigital("978-3-16-148410-1", "Harry Potter y la Cámara Secreta", "Fantasía", 1998, autor1, "EPUB", "720p");

console.log(libroFisico.MarcarPrestado()); // "Libro marcado como prestado"
console.log(libroDigital.MarcarDisponible()); // "Libro marcado como disponible"
console.log(libroDigital.CambiarResolucion("4K")); // "Resolución cambiada a: 4K"
console.log(libroDigital.CambiarFormato("PDF")); // "Formato cambiado a: PDF"

// Guardar el objeto libroFisico en localStorage
localStorage.setItem("libro", JSON.stringify(libroFisico));

// Recuperar el objeto desde localStorage
let libroRecuperado = JSON.parse(localStorage.getItem("libro"));

// Verificar que se ha recuperado correctamente
console.log(libroRecuperado);*/
