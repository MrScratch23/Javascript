"use strict";

// datos de prueba 
  let libros = [];
  let estudiantes = [];
  let autores = [];
  

  let libro1 = new Libro("77", "Er quijotazo", "Comedia", 1997);
  let libro2 = new Libro("78", "Er quijotazo 2: Ahora es personal", "Drama", 1999);
  let libro3 = new Libro("79", "Er quijotazo 3: El retorno del rey", "Ciencia Ficcion", 2000);
  libros.push(libro1, libro2, libro3);

  let autor1 = new Autor("1", "Roberto bocachancla", "Español (creo)");
  let autor2 = new Autor("2", "Juan de val", "Español");

  autores.push(autor1, autor2);
  autor1.agregarLibro(libro1);
  libro1.asignarAutor(autor1);

  let estudiante1 = new Estudiante("E003", "Ruben D", "Informatica", 2);
  let estudiante2 = new Estudiante("E004", "Sergio", "Informatica", 2);

  estudiantes.push(estudiante1, estudiante2);

 





const actualizarTablas = function() {
    let sol = `
     <th>ISBN</th>
    <th>Título</th>
    <th>Género</th>
    <th>Año</th>
    <th>Autor</th>
    <th>Estado</th>`;

    for (const libro of libros) {
        sol+= `
        <tr>
        <td>${libro.isbn}</td>
        <td>${libro.titulo}</td>
        <td>${libro.genero}</td>
        </tr>
        `
    }



};






