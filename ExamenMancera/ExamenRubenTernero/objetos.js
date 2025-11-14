
"use strict";

/**
 *
 * Function Persona : crear objeto persona
 * @param {String} nombre
 * @param {Number} telefono
 * @param {String} email
 */
function Persona(nombre, telefono, email) {
  this.id = nombre;
  this.telefono = telefono;
  this.email = email;
}

/**
 *
 * Function Medico : crear objeto medico heredado de persona
 * @param {Number} id
 * @param {String} nombre
 * @param {String} email
 * @param {Number} idMedico
 * @param {String} colegiado
 */
function Medico(id, nombre, email, idMedico, colegiado) {
    Persona.call(this, id, nombre, email);    
  this.idMedico = idMedico;
  this.colegiado = colegiado;
  
}

// Métodos del objeto usando prototipos
Medico.prototype.toHTMLRow = function() {
  let html = `<tr>
        <td>${this.id}</td>
         <td${this.nombre}</td>
         <td>${this.descripcion}</td>
         <td>${this.idMedico}</td>
         <td${this.colegiado}</td>
         </tr>`;

        return html;

};


/**
 *
 *
 * @class Cita: Creamos el objeto cita
 * @param {Number} idMedico
 * @param {String} paciente
 * @param {Date} fecha
 * @param {Number} hora
  */
class Cita {
  constructor(idMedico, paciente, fecha, hora) {
    this.idMedico = idMedico;
    this.paciente = paciente;
    this.fecha = fecha;
    this.hora = hora;
  }
  
  toHTMLRow(nombreMedico) {

     let html = `<tr>
     <td>${this.idMedico}<td>
     <td>${nombreMedico}</td>
     <td>${this.paciente}</td>
     <td>${this.fecha.ToLocaleDateString()}
     <td>${this.hora}</td>`;
    
   
   
  }
}

/**
 *
 *
 * @class Hospital creamos el hospital con sus arrays correspondientes
 * @param {Array} medicos
 * @param {Array} citas
 */
class Hospital {
  constructor(medicos = [], citas = []) {
    this.medicos = medicos;
    this.citas = citas;
  }


 
  altaMedico(oMedico) {
    const existe = this.medicos.find(m => m.id === oMedico.id)
   
    if (existe) {
        return "Error: IDMedico ya registrado";
       
    } else {
          this.medicos.push(oMedico);
    return "Alta de medico OK";

    
    }
  
  }

  altaCita(oCita) {
        const existe = this.citas.find(c => c.id === oCita.id)
    

    if (!existe) {
        return "IDMedico no registrado";
        
    } else {
         this.citas.push(oCita);
    return "Alta de cita OK";


    }
   
  }

  listadoMedicos() {

    const medicosSinEmail = this.medicos.filter(m => m.email = "");
    const sinEmail = medicosSinEmail.length;

    



    let html = `
    <table>
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>email</th>
            <th>idMedico</th>
            <th>idColegiado</th>
            </tr>
        </thead>
        <tbody>`;

        for (const medico of this.medicos) {
            html += medico.toHTMLRow();
        }

        html += `
        </tr>
        </tbody>
    </table>
    <tfooter>El numero de medicos sin email es: ${sinEmail}</tfooter>`;


    return html;
  }

  listadoCitas() {
    
    let html = `
    <table>
        <thead>
            <tr>
            <th>IDMedico</th>
            <th>NombreMedico</th>
            <th>Paciente</th>
            <th>Fecha</th>
            <th>Hora</th>
            </tr>
        </thead>
        <tbody>`;

        for (const cita of this.citas) {
            
            const nombre = cita.getNombreMedico(cita.idMedico);
            html += cita.toHTMLRow(nombre);
        }

        
        html += `
        </tr>
        </tbody>
    </table>`;

    return html;
  }


  getNombreMedico(idMedico) {
    const medico = this.medicos.find(m => m.idMedico.trim().toLowerCase() === idMedico.trim().toLowerCase());

    if (!medico) {
          return "Desconocido";
    } 

    return medico.nombre;

  }

  // no entendi que querias que hiciera exactamente con el tipo, asi que los ordene por ID y nombre segun lo que introduzca el usuario
  ordenarMedicos(tipo) {
    let mensaje = "";

    if (tipo === "id") {
        const medicosOrdenadosID = this.medicos.toSorted(a, b => a.idMedico -b.idMedico);

    let mensaje = `
    <table>
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>email</th>
            <th>idMedico</th>
            <th>idColegiado</th>
            </tr>
        </thead>
        <tbody>`;

        for (const medico of medicosOrdenadosID) {
            mensaje += medico.toHTMLRow();
            
        }

        mensaje += `
             </tr>
        </tbody>
    </table>
    <tfooter>El numero de medicos sin email es: ${sinEmail}</tfooter>`;     
    }

    
    
    if (tipo === "nombre") {
        const medicosOrdenadosNombre = this.medicos.toSorted(a, b => a.nombre -b.nombre);
    let mensaje = `
    <table>
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>email</th>
            <th>idMedico</th>
            <th>idColegiado</th>
            </tr>
        </thead>
        <tbody>`;

        for (const medico of medicosOrdenadosNombre) {
            mensaje += medico.toHTMLRow();
            
        }

        mensaje += `
             </tr>
        </tbody>
    </table>
    <tfooter>El numero de medicos sin email es: ${sinEmail}</tfooter>`;

    }

    
    return mensaje;
    }
  }






 