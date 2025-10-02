"use strict"

// funciones


function conseguirCookie() {

    

    // //CREAR COOKIE
    //     document.cookie = "user=Iker; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;";

    //     //ACCEDER A LA COOKIE Y MOSTRAR
    //     function getCookieValue(nombre) {
    //         var cookies = document.cookie.split(";"); // Divide la cadena de cookies en un array
    //         for (var i = 0; i < cookies.length; i++) {
    //             var cookie = cookies[i].trim(); // Elimina los espacios en blanco al principio y al final
    //             if (cookie.startsWith(nombre + "=")) {
    //                 return cookie.substring(nombre.length + 1); // Retorna el valor de la cookie
    //             }
    //         }
    //         return null; // Si no se encuentra la cookie, retorna null
    //     }

    //     var nombreCookie = getCookieValue("user");
    //     console.log(nombreCookie); // Muestra el valor en la consola


    
}










// main
const rojo = document.querySelector("#rojo");
const azul = document.querySelector("#azul");
const btnCambiar = document.querySelector('#btnCambiar')
btnCambiar.addEventListener('click', conseguirCookie);