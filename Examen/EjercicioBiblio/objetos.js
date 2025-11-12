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