"use strict";


class Tienda {
    // usando los arrays en vacio
  constructor(productos = [], clientes = [], categorias = [], pedidos = []) {
    this.productos = productos;
    this.clientes = clientes;
    this.categorias = categorias;
    this.pedidos = pedidos;
}
/* 
constructor(productos = [], clientes = [], categorias = [], pedidos = []) {
    this.productos = productos;
    this.clientes = clientes;
    this.categorias = categorias;
    this.pedidos = pedidos;
}
  */  
    guardarEnLocalStorage() {
        // no es this.Tienda, this para referenciar al objeto actual
        localStorage.setItem("Tienda", JSON.stringify(this));
    }

    cargarDesdeLocalStorage() {
       let tienda = JSON.parse(localStorage.getItem("Tienda"));
       let tiendaRehidratada = new Tienda(tienda.productos, tienda.clientes, tienda.categorias, tienda.pedidos);
       return tiendaRehidratada;
    }
}

class Producto {
    constructor(codigo, nombre, precio, stock, categoria) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria; 
    }
    
   vender() {
    if (this.stock <= 0) return "Ya no queda mas stock.";
    
    this.stock -= 1;
    return "Vendido";
}

    reponer() {
        this.stock +=1;
    }

    cambiarP(precio){
        this.precio = precio;
    }
}


function Cliente(dni, nombre, email, telefono) {
  this.dni = dni;
  this.nombre = nombre;
  this.email = email;
  this.telefono = telefono,
  this.pedidos = [];
}

// Métodos del objeto usando prototipos
Cliente.prototype.agregar = function(pedido) {
this.pedidos.push(pedido);
};

Cliente.prototype.totalG = function(){
    let sumaTotal = 0;
    for (const pedido of this.pedidos) {
        sumaTotal += pedido.total;
    }
    return `La suma total es: ${sumaTotal}`;
}

Cliente.prototype.pendient = function() {
    let pendientes = this.pedidos.filter(p => p.estado.trim().toLowerCase() === "pendiente");

    let html = `<ul>`

    for (const pendiente of pendientes) {
        html += `<li>${pendiente.id}</li>`
    }
    html += `</ul>`
    return html;

}

// Constructor para un objeto genérico
function Categoria(id, nombre, descripcion) {
  this.id = id;
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.productos = [];
}

// Métodos del objeto usando prototipos
Categoria.prototype.agregarProducto = function(producto) {

    let productoExiste = this.productos.find(p => p.codigo === producto.codigo)
    if (productoExiste) {
        return "Este producto ya esta dentro de la categoria.";
    } else 
    this.productos.push(producto);
}

Categoria.prototype.contar = function(){
    let sumaTotalProductos = this.productos.length;
  return sumaTotalProductos;
}

Categoria.prototype.listar = function (){
    let html = `<ul>`;
    for (const producto of this.productos) {
        html += `<li>${producto.nombre}</li>`
    }
    html += `</ul>`

    return html;

}


class Pedido {
    constructor(id, cliente, fecha, total, estado, detalles = []) {
        this.id= id;
        this.cliente = cliente;
        this.fecha = fecha;
        this.total = total;
        this.estado = estado;
        this.detalles = [];
    }
    
    calcular() {
      let total = 0;
        for (const pedido of this.detalles) {
            total += pedido.subtotal;
        }
        return total;
        }


        cambiarE(estado){
            this.estado = estado;
        }

        agregarD(detalle) {
            this.detalles.push(detalle);
        }
}

class Pedido_Detalle {
    constructor(producto, cantidad, precioUnit) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.precioUnit = precioUnit;
        this.subtotal = this.calcularSub();
    }
    
    calcularSub() {
        return this.cantidad * this.precioUnit;
    }
}