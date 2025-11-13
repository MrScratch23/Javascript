// tienda.js
"use strict";

// INSTANCIA GLOBAL DE TIENDA
let tienda = new Tienda();

// FUNCIONES PRINCIPALES
const generarDatosPrueba = function() {
    let categoria1 = new Categoria("cat1", "Calzado", "Zapatos y zapatillas");
    let categoria2 = new Categoria("cat2", "Accesorios", "Complementos");
    let categoria3 = new Categoria("cat3", "Electrónica", "Dispositivos electrónicos");
    
    let producto1 = new Producto("PROD001", "Zapatilla", 15, 7, categoria1);
    let producto2 = new Producto("PROD002", "Sombrero", 10, 9, categoria2);
    let producto3 = new Producto("PROD003", "Playstation7", 600, 500, categoria3);

    let cliente1 = new Cliente("12345678A", "Juan Pérez", "juan@email.com", "123456789");
    let cliente2 = new Cliente("87654321B", "María García", "maria@email.com", "987654321");

    for (const categoria of [categoria1, categoria2, categoria3]) {
        tienda.categorias.push(categoria);
    }

    for (const producto of [producto1, producto2, producto3]) {
        tienda.productos.push(producto);
    }

    for (const cliente of [cliente1, cliente2]) {
        tienda.clientes.push(cliente);
    }

    categoria1.agregarProducto(producto1);
    categoria2.agregarProducto(producto2);
    categoria3.agregarProducto(producto3);

    actualizarInterfaz();
};

// REGISTRAR PRODUCTO
document.querySelector("#btnRegistrarProducto").addEventListener('click', () => {
    const codigo = document.querySelector("[name='codigo']").value;
    const nombre = document.querySelector("[name='nombre']").value;
    const precio = parseFloat(document.querySelector("[name='precio']").value);
    const stock = parseInt(document.querySelector("[name='stock']").value);
    
    if (!codigo || !nombre || !precio || !stock) {
        alert("Por favor, complete todos los campos");
        return;
    }

    let productoExistente = false;
    for (const producto of tienda.productos) {
        if (producto.codigo === codigo) {
            productoExistente = true;
            break;
        }
    }

    if (productoExistente) {
        alert("El código del producto ya existe");
        return;
    }

    const nuevoProducto = new Producto(codigo, nombre, precio, stock, null);
    tienda.productos.push(nuevoProducto);
    
    document.querySelector("#formProducto").reset();
    alert("Producto registrado exitosamente");
    actualizarInterfaz();
});

// REGISTRAR CLIENTE
document.querySelector("#btnRegistrarCliente").addEventListener('click', () => {
    const dni = document.querySelector("[name='dni']").value;
    const nombre = document.querySelector("[name='nombreCliente']").value;
    const email = document.querySelector("[name='email']").value;
    const telefono = document.querySelector("[name='telefono']").value;

    if (!dni || !nombre || !email || !telefono) {
        alert("Por favor, complete todos los campos");
        return;
    }

    let clienteExistente = false;
    for (const cliente of tienda.clientes) {
        if (cliente.dni === dni) {
            clienteExistente = true;
            break;
        }
    }

    if (clienteExistente) {
        alert("El DNI ya está registrado");
        return;
    }

    const nuevoCliente = new Cliente(dni, nombre, email, telefono);
    tienda.clientes.push(nuevoCliente);
    
    document.querySelector("#formCliente").reset();
    alert("Cliente registrado exitosamente");
    actualizarInterfaz();
});

// REGISTRAR CATEGORÍA
document.querySelector("#btnRegistrarCategoria").addEventListener('click', () => {
    const id = document.querySelector("[name='idCategoria']").value;
    const nombre = document.querySelector("[name='nombreCategoria']").value;
    const descripcion = document.querySelector("[name='descripcion']").value;

    if (!id || !nombre || !descripcion) {
        alert("Por favor, complete todos los campos");
        return;
    }

    let categoriaExistente = false;
    for (const categoria of tienda.categorias) {
        if (categoria.id === id) {
            categoriaExistente = true;
            break;
        }
    }

    if (categoriaExistente) {
        alert("El ID de categoría ya existe");
        return;
    }

    const nuevaCategoria = new Categoria(id, nombre, descripcion);
    tienda.categorias.push(nuevaCategoria);
    
    document.querySelector("#formCategoria").reset();
    alert("Categoría registrada exitosamente");
    actualizarInterfaz();
});

// ACTUALIZAR INTERFAZ
function actualizarInterfaz() {
    actualizarTablaProductos();
    actualizarTablaClientes();
    actualizarTablaCategorias();
    actualizarSelectores();
}

function actualizarTablaProductos() {
    const cuerpo = document.querySelector("#cuerpoProductos");
    cuerpo.innerHTML = "";
    
    for (const producto of tienda.productos) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.codigo}</td>
            <td>${producto.nombre}</td>
            <td>€${producto.precio}</td>
            <td>${producto.stock}</td>
            <td>${producto.categoria ? producto.categoria.nombre : 'Sin categoría'}</td>
            <td>
                <button class="btn-vender" data-codigo="${producto.codigo}">Vender</button>
                <button class="btn-reponer" data-codigo="${producto.codigo}">Reponer</button>
            </td>
        `;
        cuerpo.appendChild(fila);
    }

    for (const btn of document.querySelectorAll('.btn-vender')) {
        btn.addEventListener('click', function() {
            venderProducto(this.dataset.codigo);
        });
    }

    for (const btn of document.querySelectorAll('.btn-reponer')) {
        btn.addEventListener('click', function() {
            reponerProducto(this.dataset.codigo);
        });
    }
}

function actualizarTablaClientes() {
    const cuerpo = document.querySelector("#cuerpoClientes");
    cuerpo.innerHTML = "";
    
    for (const cliente of tienda.clientes) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${cliente.dni}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.email}</td>
            <td>${cliente.telefono}</td>
            <td>€${cliente.totalG()}</td>
        `;
        cuerpo.appendChild(fila);
    }
}

function actualizarTablaCategorias() {
    const cuerpo = document.querySelector("#cuerpoCategorias");
    cuerpo.innerHTML = "";
    
    for (const categoria of tienda.categorias) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${categoria.id}</td>
            <td>${categoria.nombre}</td>
            <td>${categoria.descripcion}</td>
            <td>${categoria.contar()}</td>
        `;
        cuerpo.appendChild(fila);
    }
}

function actualizarSelectores() {
    const selectorCategoria = document.querySelector("[name='categoriaProducto']");
    selectorCategoria.innerHTML = '<option value="">Seleccionar categoría</option>';
    
    for (const categoria of tienda.categorias) {
        const option = document.createElement('option');
        option.value = categoria.id;
        option.textContent = categoria.nombre;
        selectorCategoria.appendChild(option);
    }
}

// FUNCIONES AUXILIARES
function venderProducto(codigo) {
    for (const producto of tienda.productos) {
        if (producto.codigo === codigo) {
            const resultado = producto.vender();
            alert(resultado);
            actualizarInterfaz();
            break;
        }
    }
}

function reponerProducto(codigo) {
    for (const producto of tienda.productos) {
        if (producto.codigo === codigo) {
            producto.reponer();
            alert("Stock repuesto");
            actualizarInterfaz();
            break;
        }
    }
}

// TOGGLE FORMULARIOS
document.querySelector("#toggleProducto").addEventListener('click', () => {
    const formProducto = document.querySelector("#formProducto");
    if (formProducto.style.display === "block") {
        formProducto.style.display = "none";
    } else {
        formProducto.style.display = "block";
    }
});

const toggleCliente = document.querySelector("#toggleCliente").addEventListener('click', () => {
    const formCliente = document.querySelector("#formCliente");
    if (formCliente.style.display === "block") {
        formCliente.style.display = "none";
    } else {
        formCliente.style.display = "block";
    }
});

document.querySelector("#toggleCategoria").addEventListener('click', () => {
    const form = document.querySelector("#formCategoria");
    if (form.classList.contains("ocultar")) {
        form.classList.remove("ocultar");
        form.classList.add("mostrar");
    } else {
        form.classList.remove("mostrar");
        form.classList.add("ocultar");
    }
});

document.querySelector("#togglePedido").addEventListener('click', () => {
    const formPedido = document.querySelector("[name='formPedido']");
    formPedido.classList.toggle("ocultar");
    formPedido.classList.toggle("mostrar");
});

const toggleInventario = document.querySelector('.form-section:nth-child(6) .form-toggle').addEventListener('click', () => {
    const formInventario = document.querySelector("#formInventario");  
    formInventario.classList.toggle("ocultar");
    formInventario.classList.toggle("mostrar");
});

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', function() {
    generarDatosPrueba();
});