"use strict";

class Toast {
    constructor(mensaje, tipo) {

        let divToast = document.querySelector("[data-div-toast]");


        if (!divToast) {
        divToast = document.createElement("div");
        divToast.style = `
        position:fixed;
        top:1 rem;
        right:1 rem;
        `;
        divToast.dataset.divToast = "yeah";

        document.body.append(divToast);
        }


        let color = "#3355FFCC";
        if (tipo == Toast.ERROR) {
            color = "red"
        }
   
        const divMensaje = document.createElement("div");
        divMensaje.textContent = mensaje;
        divMensaje.style = `
        background-color: ${color};
        color: white;
        border: 1px solid white;
        border-radius: 5px;
        padding: 0.5rem 1 rem;
        min-width: 300px;
        text-aling: center;
        margin-bottom: 1rem;
        `;
        divToast.prepend(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000)
    }
    
    static INFO =0;
    static ERROR = 1;
}