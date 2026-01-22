"use strict";

let arrBombillas = [];

document.querySelector("#btnDetectarBombillas").addEventListener('click', async e => {
    
    try {
        // Verificar si ya hay opciones cargadas
        const slCtrlBombilla = document.querySelector("#slCtrlBombilla");
        
        // Si ya tiene opciones y estamos en display:block, no hacemos nada
        if (slCtrlBombilla.children.length > 0 && slCtrlBombilla.style.display === "block") {
            return;
        }
        
        // Si tiene opciones pero está oculto, solo lo mostramos
        if (slCtrlBombilla.children.length > 0) {
            slCtrlBombilla.style.display = "block";
            return;
        }
        
        const response = await fetch("/api/bombilla");
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }
        
        const bombillas = await response.json();
       
        slCtrlBombilla.style.display = "block";
        
        // Agregar opción por defecto
        let defaultOption = document.createElement("option");
        defaultOption.textContent = "Selecciona una bombilla";
        defaultOption.value = "";
        slCtrlBombilla.append(defaultOption);
        
        for (const bombilla of bombillas) {
            let option = document.createElement("option");
            option.textContent = bombilla.etiqueta;
            option.value = bombilla.id;
            slCtrlBombilla.append(option);
        }

        slCtrlBombilla.addEventListener('change', async e => {
            const id = slCtrlBombilla.value;
            
            if (!id) return;
            
            const idNum = parseInt(id);
            const existeBombilla = arrBombillas.find(b => b.id === idNum);
            
            // si existe no hacemos la peticion
            if (existeBombilla) {
                return;
            }

            // y si no existe hacemos la peticion
            try {
                const response = await fetch(`/api/bombilla/${id}`);
                
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
                }
                
                const oBombilla = await response.json();
                console.log(oBombilla);

                arrBombillas.push(oBombilla);

                // creamos el div
                let div = document.createElement("div");
                div.id = "divControlBombilla";
                let img = document.createElement("img");
                let historial = oBombilla.historial;
                
                // Determinamos el estado actual
                if (historial.length === 0) {
                    img.src = "img/bombilla-off.svg";
                } else {
                    // Tomamos el último estado del historial
                    const ultimoEstado = historial[historial.length - 1];
                    if (ultimoEstado.encendido === true) {
                        img.src = "img/bombilla-on.svg";
                    } else {
                        img.src = "img/bombilla-off.svg";
                    }
                }

                div.append(img);
                const secControl = document.querySelector("#secControl");
                const divControlBombilla = document.querySelector("#divControlBombilla");
                if (divControlBombilla) {
                    secControl.removeChild(divControlBombilla);
                }
                secControl.append(div);
                
                // evento para cambiar el estado de la bombilla
                img.addEventListener('click', async e => {
                    e.stopPropagation();
                    
                    try {
                        // Cambiamos la imagen inmediatamente (estrategia optimista)
                        const currentSrc = img.src;
                        if (currentSrc.includes("bombilla-off.svg")) {
                            img.src = "img/bombilla-on.svg";
                        } else {
                            img.src = "img/bombilla-off.svg";
                        }

                        let fecha = new Date();
                        // Formato de fecha: DD/MM/YYYY
                        let fechaBombilla = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
                        // Formato de hora: HH:MM
                        let horaMinutos = fecha.getHours() + ":" + (fecha.getMinutes() < 10 ? "0" : "") + fecha.getMinutes();
                        
                        // Determinar el nuevo estado (opuesto al actual)
                        let nuevoEstado;
                        if (currentSrc.includes("bombilla-off.svg")) {
                            nuevoEstado = true; // Encender
                        } else {
                            nuevoEstado = false; // Apagar
                        }

                        let estado = {
                            bombilla_id: idNum,
                            fecha: fechaBombilla,
                            hora: horaMinutos,
                            encendido: nuevoEstado
                        };

                        const response = await fetch(`/api/estado`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(estado)
                        });
                        
                        if (!response.ok) {
                            throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
                        }
                        
                        // añadir el nuevo estado al historial en arrBombillas
                        const bombillaIndex = arrBombillas.findIndex(b => b.id === idNum);
                        if (bombillaIndex !== -1) {
                            arrBombillas[bombillaIndex].historial.push(estado);
                        }
                        
                    } catch (error) {
                        // Si falla, restaurar la imagen original
                        const currentSrc = img.src;
                        if (currentSrc.includes("bombilla-off.svg")) {
                            img.src = "img/bombilla-on.svg";
                        } else {
                            img.src = "img/bombilla-off.svg";
                        }
                        
                        let dialog = document.createElement("dialog");
                        dialog.textContent = `Error al cambiar el estado de la bombilla: ${error}`;
                        
                        let closeButton = document.createElement("button");
                        closeButton.textContent = "Cerrar";
                        closeButton.addEventListener("click", () => {
                            dialog.close();
                            document.body.removeChild(dialog);
                        });
                        
                        dialog.appendChild(document.createElement("br"));
                        dialog.appendChild(closeButton);
                        
                        document.body.appendChild(dialog);
                        dialog.showModal();
                    }
                });
                
            } catch (error) {
                let dialog = document.createElement("dialog");
                dialog.textContent = `Error al cargar la bombilla: ${error}`;
                
                let closeButton = document.createElement("button");
                closeButton.textContent = "Cerrar";
                closeButton.addEventListener("click", () => {
                    dialog.close();
                    document.body.removeChild(dialog);
                });
                
                dialog.appendChild(document.createElement("br"));
                dialog.appendChild(closeButton);
                
                document.body.appendChild(dialog);
                dialog.showModal();
            }
        });
        
    } catch (error) {
        let dialog = document.createElement("dialog");
        dialog.textContent = `Error al cargar las bombillas: ${error}`;
        
        let closeButton = document.createElement("button");
        closeButton.textContent = "Cerrar";
        closeButton.addEventListener("click", () => {
            dialog.close();
            document.body.removeChild(dialog);
        });
        
        dialog.appendChild(document.createElement("br"));
        dialog.appendChild(closeButton);
        
        document.body.appendChild(dialog);
        dialog.showModal();
        const slCtrlBombilla = document.querySelector("#slCtrlBombilla");
        slCtrlBombilla.style.display = "none";
    }
});