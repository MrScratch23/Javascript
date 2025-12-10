"use strict";

// funciones

const crearCards = function(arrayObjetos) {
     for (const carta of arrayObjetos) {
         let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = carta.imagen;
    img.dataset.producto = carta.producto;
    img.dataset.precio = carta.precio;
    img.dataset.tallas = carta.tallas;
    img.dataset.imagen = carta.imagen;

    div.append(img);
    divCards.append(div);
    }
};





// main

let arrayObjetos = [
  {
  "producto" : "Semi-sheer shirt with pintucks",
  "precio" : "29,95",
  "tallas" : ["XS", "S", "M", "L"],
  "imagen" : "https://m.media-amazon.com/images/I/81FNp+JBbML.jpg"
  },
  {
  "producto" : "Mini dress with lace trims",
  "precio" : "35,95",
  "tallas" : ["XL"],
  "imagen" : "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Rayman_Origins_Box_Art.jpg/250px-Rayman_Origins_Box_Art.jpg"
  },
  {
  "producto" : "Diamond pattern mini dress",
  "precio" : "35,95",
  "tallas" : ["S", "M", "L"],
  "imagen" : "https://alfabetajuega.com/hero/2019/09/Rayquaza.jpg?width=768&aspect_ratio=16:9&format=nowebp"
  },
  {
  "producto" : "Red shirt with laces",
  "precio" : "15,95",
  "tallas" : ["M", "L", "XL"],
  "imagen" : "https://www.nintenderos.com/wp-content/uploads/2020/05/deoxys.png"
  },
];

// 
console.log(arrayObjetos);


const divCards = document.querySelector("#divCards");
crearCards(arrayObjetos);

divCards.addEventListener('click', e => {
    if (e.target.tagName !='IMG') {
        return;
    }
    const img = e.target;

    let aside = document.createElement("aside");
    aside.id = "aside";

    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");

    ul.append(li1, li2, li3, li4);

    li1.textContent = img.dataset.producto;
    li2.textContent = img.dataset.precio;
    li3.textContent = img.dataset.tallas;
    li4.textContent = img.src;

    aside.append(img.parentElement, ul);
    document.body.append(aside);


       aside.addEventListener('click', e => {
        if (e.target.tagName === "IMG") {
            e.stopPropagation(); // Evita que el evento se propague
            aside.remove(); // Elimina el aside del DOM
        }
    });


})






/* let img = document.querySelector(“.producto > img”);

console.log( img.dataset.id); 
console.log( img.dataset.categoria);
console.log( img.dataset.precioDeProducto);

// Se actualiza el atributo
img.dataset.precioDeProducto=22;

// Se eliminan algunos atributos personalizados
// (si se accede a ellos devolverán undefined
delete img.dataset.categoria; 
img.removeAttribute("data-id");

// Se crea un nuevo atributo
img.dataset.nuevoAtributo = "azul";
console.log(img.dataset.nuevoAtributo); // aparece en consola "azul"

*/ 
