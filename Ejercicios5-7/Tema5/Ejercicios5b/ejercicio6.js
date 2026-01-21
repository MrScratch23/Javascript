"use strict";

const form = document.querySelector('#formularioRegistro');

document.addEventListener('click', e => {
    
    // Mostrar/ocultar campos fecha
    if (form.fechaOpcion.value === "si") {
        const camposFecha = document.querySelector("#camposFecha");
        camposFecha.style.display = "";
    } else {
        const camposFecha = document.querySelector("#camposFecha");
        camposFecha.style.display = "none";
    }
    
    if (e.target.id === "btnEnviar") {
        let errores = [];
        
        if (!form.nickname.value.trim()) {
            errores.push("Nickname: campo obligatorio");
        } else if (form.nickname.value.length < 3 || form.nickname.value.length > 8) {
            errores.push("Nickname: debe tener entre 3 y 8 caracteres");
        }
        
        if (!form.pin1.value.trim() || !form.pin2.value.trim()) {
            errores.push("Los campos de PIN son obligatorios");
        } else if (form.pin1.value.length !== 4 || form.pin2.value.length !== 4) {
            errores.push("El PIN debe tener exactamente 4 dígitos");
        } else if (form.pin1.value !== form.pin2.value) {
            errores.push("Los PINs no coinciden");
        }
        
        if (!/^\d{4}$/.test(form.pin1.value)) {
            errores.push("El PIN solo puede contener dígitos (0-9)");
        }
        if (!/^\d{4}$/.test(form.pin2.value)) {
            errores.push("El PIN solo puede contener dígitos (0-9)");
        }
        
        if (form.fechaOpcion.value === "si") {
            if (form.dia < 1 && form.dia > 31) {
                errores.push("El dia tiene que estar entre el 1 y el 31");
            }
            if (form.mes < 1 && form.mes > 12) {
                errores.push("El mes tiene que estar entre el 1 y el 12");
            }
            
            const anioActual = new Date().getFullYear();
            const anioUsuario = parseInt(form.anio.value);
            
            if (isNaN(anioUsuario)) {
                errores.push("El año debe ser un número válido");
            } else if (anioUsuario < 1900 || anioUsuario > anioActual) {
                errores.push(`El año debe estar entre 1900 y ${anioActual}`);
            }
        }
        
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        let contador = 0;
        
        for (const checkbox of checkboxes) {
            if (checkbox.checked) {
                contador++;
            }
        }
        
        if (contador < 2) {
            errores.push("Seleccione al menos dos opciones.");
        }


        // Al final de tu validación, después de contar los checkboxes
if (contador === 2) {
    const colores = [];
    document.querySelectorAll('input[name="colores"]:checked').forEach(cb => {
        colores.push(cb.value);
    });
    
    const combinacion = colores.sort().join('-');
    if (combinacion === 'azul-rojo') {
        document.body.style.backgroundColor = 'purple';
    } else if (combinacion === 'rojo-verde') {
        document.body.style.backgroundColor = 'yellow';
    } else if (combinacion === 'azul-verde') {
        document.body.style.backgroundColor = 'turquoise';
    }
} else {
    document.body.style.backgroundColor = '';
}

        
        if (errores.length != 0) {
            let dialog = document.createElement("dialog");
            dialog.textContent = "Errores encontrados";
            
            let closeButton = document.createElement("button");
            let ul = document.createElement("ul");
            
            for (const error of errores) {
                let li = document.createElement("li");
                li.textContent = error;
                ul.append(li);
            }
            
            closeButton.textContent = "Cerrar";
            closeButton.addEventListener("click", () => {
                dialog.close();
                document.body.removeChild(dialog);
            });
            
            dialog.append(ul);
            dialog.append(document.createElement("br"));
            dialog.append(closeButton);
            
            document.body.appendChild(dialog);
            dialog.show();
        }
    }
});
