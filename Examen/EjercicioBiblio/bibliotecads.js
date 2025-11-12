// =============================================
// 🎯 GESTOR - LÓGICA DE LA BIBLIOTECA
// =============================================

// =============================================
// 🎯 DEBUG - VERIFICAR SI EL CÓDIGO SE EJECUTA
// =============================================

console.log("✅ bibliotecadeepseek.js se está cargando");

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM completamente cargado");
    
    // Verificar que encontramos los elementos
    console.log("Buscando cuerpos de tabla:");
    console.log("cuerpoTablaLibros:", document.querySelector("#cuerpoTablaLibros"));
    console.log("cuerpoTablaAutores:", document.querySelector("#cuerpoTablaAutores"));
    console.log("cuerpoTablaEstudiantes:", document.querySelector("#cuerpoTablaEstudiantes"));
    console.log("cuerpoTablaPrestamos:", document.querySelector("#cuerpoTablaPrestamos"));
    
    // Verificar datos de prueba
    console.log("Libros cargados:", libros.length);
    console.log("Autores cargados:", autores.length);
    console.log("Estudiantes cargados:", estudiantes.length);
    
    // Probar actualizar tablas manualmente
    actualizarTablas();
    console.log("✅ actualizarTablas() ejecutado");
});




// 🗄️ ARRAYS GLOBALES
let libros = [];
let autores = [];
let estudiantes = [];
let prestamos = [];

// 📚 DATOS DE PRUEBA
function cargarDatosPrueba() {
    // Autores de prueba
    autores.push(new Autor("A001", "Gabriel García Márquez", "Colombia"));
    autores.push(new Autor("A002", "J.K. Rowling", "Reino Unido"));
    autores.push(new Autor("A003", "George Orwell", "Reino Unido"));
    
    // Libros de prueba
    libros.push(new Libro("9788437604947", "Cien años de soledad", "Realismo mágico", 1967));
    libros.push(new Libro("9788478884452", "Harry Potter y la piedra filosofal", "Fantasía", 1997));
    libros.push(new Libro("9788499890944", "1984", "Ciencia ficción", 1949));
    
    // Estudiantes de prueba
    estudiantes.push(new Estudiante("E001", "María García", "Ingeniería Informática", 3));
    estudiantes.push(new Estudiante("E002", "Carlos López", "Administración", 2));
    estudiantes.push(new Estudiante("E003", "Ana Torres", "Medicina", 4));
    
    // Asignar autores a libros
    libros[0].AsignarAutor(autores[0]);
    autores[0].agregarLibro(libros[0]);
    
    libros[1].AsignarAutor(autores[1]);
    autores[1].agregarLibro(libros[1]);
    
    libros[2].AsignarAutor(autores[2]);
    autores[2].agregarLibro(libros[2]);


    // Registrar un préstamo de prueba
    let prestamoPrueba = new Prestamo("9788437604947", "Cien años de soledad", "E001", "2024-06-01", "2024-06-15");
    prestamos.push(prestamoPrueba);
    estudiantes[0].agregarPrestamo(libros[0]);
    libros[0].marcarPrestado();

}

// 🎛️ FUNCIONES DE VALIDACIÓN
function validarISBNUnico(isbn) {
    const existeISBN = libros.find(l => l.isbn.trim().toLowerCase() === isbn.trim().toLowerCase());
    return existeISBN !== undefined;
}

function validarIDAutorUnico(id) {
    const existeID = autores.find(a => a.id.trim().toLowerCase() === id.trim().toLowerCase());
    return existeID !== undefined;
}

function validarMatriculaUnica(matricula) {
    const existeMatricula = estudiantes.find(e => e.matricula.trim().toLowerCase() === matricula.trim().toLowerCase());
    return existeMatricula !== undefined;
}

// 🖥️ FUNCIONES DE INTERFAZ
function actualizarTablas() {
    actualizarTablaLibros();
    actualizarTablaAutores();
    actualizarTablaEstudiantes();
    actualizarTablaPrestamos();
}

function actualizarTablaLibros() {
    const cuerpoTablaLibros = document.querySelector("#cuerpoTablaLibros");
    let solLibros = "";

    for (const libro of libros) {
        solLibros += `
        <tr>
            <td>${libro.isbn}</td>
            <td>${libro.titulo}</td>
            <td>${libro.genero}</td>
            <td>${libro.anio}</td>
            <td>${libro.autor ? libro.autor.nombre : 'Sin autor'}</td>
            <td>${libro.prestado ? "Prestado" : "Disponible"}</td>
        </tr>`;
    }
    cuerpoTablaLibros.innerHTML = solLibros;
}

function actualizarTablaAutores() {
    const cuerpoTablaAutores = document.querySelector("#cuerpoTablaAutores");
    let solAutores = "";

    for (const autor of autores) {
        solAutores += `
        <tr>
            <td>${autor.id}</td>
            <td>${autor.nombre}</td>
            <td>${autor.nacionalidad}</td>
            <td>${autor.libros.map(libro => libro.titulo).join(', ') || 'Sin libros'}</td>
        </tr>`;
    }
    cuerpoTablaAutores.innerHTML = solAutores;
}

function actualizarTablaEstudiantes() {
    const cuerpoTablaEstudiantes = document.querySelector("#cuerpoTablaEstudiantes");
    let solEstudiantes = "";

    for (const estudiante of estudiantes) {
        solEstudiantes += `
        <tr>
            <td>${estudiante.matricula}</td>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.carrera}</td>
            <td>${estudiante.semestre}</td>
            <td>${estudiante.librosPrestados.map(libro => libro.titulo).join(', ') || 'Sin libros'}</td>
        </tr>`;
    }
    cuerpoTablaEstudiantes.innerHTML = solEstudiantes;
}

function actualizarTablaPrestamos() {
    const cuerpoTablaPrestamos = document.querySelector("#cuerpoTablaPrestamos");
    let solPrestamos = "";



    for (const prestamo of prestamos) {
        solPrestamos += `
        <tr>
            <td>${prestamo.isbn}</td>
            <td>${prestamo.titulo}</td>
            <td>${prestamo.matricula}</td>
            <td>${prestamo.fechaPrestamo}</td>
            <td>${prestamo.fechaDevolucion}</td>
            <td>${prestamo.devuelto ? `<span style=color: green>Devuelto` : `<span style=color:red>Prestado</span>`}</td>
        </tr>`;
    }
    cuerpoTablaPrestamos.innerHTML = solPrestamos;
}

function limpiarFormularios() {
    // Limpiar formulario de Libro
    document.getElementById('isbnLibro').value = '';
    document.getElementById('tituloLibro').value = '';
    document.getElementById('generoLibro').value = '';
    document.getElementById('anioLibro').value = '';
    
    // Limpiar formulario de Autor
    document.getElementById('idAutor').value = '';
    document.getElementById('nombreAutor').value = '';
    document.getElementById('nacionalidadAutor').value = '';
    
    // Limpiar formulario de Estudiante
    document.getElementById('matriculaEstudiante').value = '';
    document.getElementById('nombreEstudiante').value = '';
    document.getElementById('carreraEstudiante').value = '';
    document.getElementById('semestreEstudiante').value = '';
    
    // Limpiar formularios de asignación
    document.getElementById('isbnAsignarAutor').value = '';
    document.getElementById('idAutorAsignar').value = '';
    document.getElementById('isbnPrestamo').value = '';
    document.getElementById('matriculaPrestamo').value = '';
    document.getElementById('fechaPrestamo').value = '';
    document.getElementById('fechaDevolucion').value = '';
    document.getElementById('isbnDevolucion').value = '';
    document.getElementById('matriculaDevolucion').value = '';
}

// 🔧 FUNCIONES PRINCIPALES
function registrarLibro() {
    const isbnLibro = document.getElementById("isbnLibro").value.trim();
    const titulo = document.getElementById("tituloLibro").value.trim();
    const generoLibro = document.getElementById("generoLibro").value.trim();
    const anioLibro = document.getElementById("anioLibro").value;
    const anio = parseInt(anioLibro);

    if (validarISBNUnico(isbnLibro)) {
        alert("❌ Libro ya registrado.");
        return;
    }

    let libro = new Libro(isbnLibro, titulo, generoLibro, anio);
    libros.push(libro);
    alert("✅ Libro registrado correctamente");
    
    limpiarFormularios();
    actualizarTablas();
}

function registrarAutor() {
    const idAutor = document.getElementById("idAutor").value.trim();
    const nombreAutor = document.getElementById("nombreAutor").value.trim();
    const nacionalidadAutor = document.getElementById("nacionalidadAutor").value.trim();

    if (validarIDAutorUnico(idAutor)) {
        alert("❌ Autor ya registrado.");
        return;
    }

    let autor = new Autor(idAutor, nombreAutor, nacionalidadAutor);
    autores.push(autor);
    alert("✅ Autor registrado correctamente");
    
    limpiarFormularios();
    actualizarTablas();
}

function registrarEstudiante() {
    const matriculaEstudiante = document.getElementById("matriculaEstudiante").value.trim();
    const nombreEstudiante = document.getElementById("nombreEstudiante").value.trim();
    const carreraEstudiante = document.getElementById("carreraEstudiante").value.trim();
    const semestreEstudiante = parseInt(document.getElementById("semestreEstudiante").value);

    if (validarMatriculaUnica(matriculaEstudiante)) {
        alert("❌ Estudiante ya registrado.");
        return;
    }

    let estudiante = new Estudiante(matriculaEstudiante, nombreEstudiante, carreraEstudiante, semestreEstudiante);
    estudiantes.push(estudiante);
    alert("✅ Estudiante registrado correctamente");
    
    limpiarFormularios();
    actualizarTablas();
}

function asignarAutor() {
    const isbnAsignarAutor = document.getElementById("isbnAsignarAutor").value.trim();
    const idAutorAsignar = document.getElementById("idAutorAsignar").value.trim();

    if (!validarISBNUnico(isbnAsignarAutor)) {
        alert("❌ No se encontró el libro.");
        return;
    }

    if (!validarIDAutorUnico(idAutorAsignar)) {
        alert("❌ No se encontró el autor.");
        return;
    }

    const libro = libros.find(l => l.isbn.toLowerCase().trim() === isbnAsignarAutor.toLowerCase().trim());
    const autor = autores.find(a => a.id.toLowerCase().trim() === idAutorAsignar.toLowerCase().trim());
    
    libro.AsignarAutor(autor);
    autor.agregarLibro(libro);
    
    alert("✅ Autor asignado correctamente al libro");
    limpiarFormularios();
    actualizarTablas();
}

function registrarPrestamo() {
    const isbnPrestamo = document.getElementById("isbnPrestamo").value.trim();
    const matriculaPrestamo = document.getElementById("matriculaPrestamo").value.trim();
    const fechaPrestamo = document.getElementById("fechaPrestamo").value;
    const fechaDevolucion = document.getElementById("fechaDevolucion").value;

    if (!validarISBNUnico(isbnPrestamo)) {
        alert("❌ No se encontró el libro.");
        return;
    }

    if (!validarMatriculaUnica(matriculaPrestamo)) {
        alert("❌ No se encontró el estudiante.");
        return;
    }

    const estudiante = estudiantes.find(e => e.matricula.toLowerCase().trim() === matriculaPrestamo.toLowerCase().trim());
    const libro = libros.find(l => l.isbn.toLowerCase().trim() === isbnPrestamo.toLowerCase().trim());

    if (libro.prestado) {
        alert("❌ El libro ya está prestado.");
        return;
    }

    let prestamo = new Prestamo(isbnPrestamo, libro.titulo, matriculaPrestamo, fechaPrestamo, fechaDevolucion);
    prestamos.push(prestamo);
    estudiante.agregarPrestamo(libro);
    libro.marcarPrestado();
    
    alert("✅ Préstamo registrado correctamente");
    limpiarFormularios();
    actualizarTablas();
}

function registrarDevolucion() {
    const isbnDevolucion = document.getElementById("isbnDevolucion").value.trim();
    const matriculaDevolucion = document.getElementById("matriculaDevolucion").value.trim();

    const prestamo = prestamos.find(p => 
        p.isbn.toLowerCase().trim() === isbnDevolucion.toLowerCase().trim() && 
        p.matricula.toLowerCase().trim() === matriculaDevolucion.toLowerCase().trim() &&
        !p.devuelto
    );

    if (!prestamo) {
        alert("❌ No se encontró un préstamo activo con esos datos.");
        return;
    }

    const libro = libros.find(l => l.isbn === prestamo.isbn);
    const estudiante = estudiantes.find(e => e.matricula === prestamo.matricula);

    libro.marcarDisponible();
    estudiante.devolverLibro(libro);
    prestamo.marcarDevuelto();
    
    alert("✅ Devolución registrada correctamente");
    limpiarFormularios();
    actualizarTablas();
}

// EVENT LISTENERS
// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btnRegistrarLibro").addEventListener('click', registrarLibro);
    document.getElementById("btnRegistrarAutor").addEventListener('click', registrarAutor);
    document.getElementById("btnRegistrarEstudiante").addEventListener('click', registrarEstudiante);
    document.getElementById("btnAsignarAutor").addEventListener('click', asignarAutor);
    document.getElementById("btnRegistrarPrestamo").addEventListener('click', registrarPrestamo);
    document.getElementById("btnRegistrarDevolucion").addEventListener('click', registrarDevolucion);
    
    // Cargar datos de prueba
    cargarDatosPrueba();
    actualizarTablas();  // ← DENTRO del DOMContentLoaded
    limpiarFormularios(); // ← DENTRO del DOMContentLoaded
});
