"use strict";

let arrBombillas = [];

document.querySelector("#btnDetectarBombillas").addEventListener('click', async e => {
    
    try {
        const response = await fetch("/api/bombilla");
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }
        
        const bombillas = await response.json();
       

        const slCtrlBombilla = document.querySelector("#slCtrlBombilla");
        slCtrlBombilla.style.display="block";
        for (const bombilla of bombillas) {
            let option = document.createElement("option");
            option.textContent = bombilla.etiqueta;
            option.value = bombilla.id;
            slCtrlBombilla.append(option);
        }

        slCtrlBombilla.addEventListener('change', async e => {
            const id = slCtrlBombilla.value;
            // buscamos la bombilla en el array de bombillas por el id
              const existeBombilla = arrBombillas.find(b => b.id === id)
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
                
                
                // no encontre una forma menos bestia, lo lamento
                if (historial.length === 0) {
                    img.src = "img/bombilla-off.svg";
                }
                 for (const historialBombilla of historial) {
                    if (historialBombilla.encendido === true) {
                        img.src = "img/bombilla-on.svg";
                    }
                    if (historialBombilla.encendido == false) {
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
               

                // no se como hacer para que se centre
                
                secControl.addEventListener('click', async e => {
                    e.stopPropagation();
                    if (e.target.tagName === "IMG") {
                        try {

                            if (img.src === "bombilla-off.svg") {
                                img.src = "img/bombilla-on.svg";
                            }
                            if (img.src === "bombilla-on.svg") {
                                img.src = "img/bombilla-off.svg";
                            }


                            let fecha = new Date();
                            // lamento la forma bestia de sacar las horas, minutos, y la fecha
                            let fechaBombilla = fecha.getDay() + "/" + fecha.getMonth()+1 + "/" + fecha.getFullYear()
                            let horaMinutos = fecha.getHours() + " " + fecha.getMinutes;
                             let historial = oBombilla.historial;
                            let bombillaEstado = "";
                               for (const historialBombilla of historial) {
                                if (historialBombilla.encendido === true) {
                                    bombillaEstado === false;
                                     }
                                if (historialBombilla.encendido == false) {
                                    bombillaEstado === true;
                                    }

                                    };

                             let estado = {
                                bombilla_id: id,
                                fecha: fechaBombilla,
                                hora: horaMinutos,
                                encendido: bombillaEstado
                             }       


                            const response = await fetch(`/api/estado/${id}`, {
                                method: 'POST',
                                headers:{
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                 bombilla_id: estado.bombilla_id,
                                 fecha: estado.fecha,
                                 hora:  estado.hora,
                                 encendido: estado.bombillaEstado 
                                })
                            });
                            
                            if (!response.ok) {
                                throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
                            }
                            
                            arrBombillas[$id].historial.push(estado);
                            
                            
                        } catch (error) {
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
                            dialog.show();
                               if (img.src === "bombilla-off.svg") {
                                img.src = "img/bombilla-on.svg";
                            }
                            if (img.src === "bombilla-on.svg") {
                                img.src = "img/bombilla-off.svg";
                            }

                
                        }
                    }
                })
                

                
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
                dialog.show();
                
               
                // throw error; // O return null;
            }

           


        })



        
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
        dialog.show();
        const slCtrlBombilla = document.querySelector("#slCtrlBombilla");
        slCtrlBombilla.style.display = "none";
        // throw error; // O return null;
    }

})