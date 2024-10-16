// Lista de productos con nombre, precio y cantidad en stock
const productosDisponibles = [
    { id: 1, nombre: 'Laptop', precio: 1500, stock: 10 },
    { id: 2, nombre: 'Celular', precio: 800, stock: 20 },
    { id: 3, nombre: 'Tablet', precio: 400, stock: 15 }
];

// Carrito de compras
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito() {
    const productoSeleccionado = document.getElementById('productos').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    // Validar selección y cantidad
    if (productoSeleccionado === '0' || isNaN(cantidad) || cantidad <= 0) {
        alert('Por favor, seleccione un producto y una cantidad válida.');
        return;
    }

    // Buscar el producto seleccionado en la lista de productos
    const producto = productosDisponibles.find(p => p.id === parseInt(productoSeleccionado));

    // Validar si hay suficiente stock del producto
    if (producto.stock < cantidad) {
        alert(`No hay suficiente stock de ${producto.nombre}. Solo hay ${producto.stock} unidades disponibles.`);
        return;
    }

    // Verificar si el producto ya está en el carrito
    const productoEnCarrito = carrito.find(p => p.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad; // Si ya está, aumentar la cantidad
    } else {
        carrito.push({ ...producto, cantidad }); // Si no está, agregarlo al carrito
    }

    producto.stock -= cantidad; // Reducir la cantidad en el stock

    actualizarCarrito(); // Actualizar la vista del carrito
}

// Función para actualizar el carrito y mostrar el total
function actualizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = ''; // Limpiar el carrito antes de agregar los productos

    let totalCompra = 0; // Total de la compra

    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad; // Subtotal de cada producto
        totalCompra += subtotal; // Acumular total

        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `${producto.nombre} - Cantidad: ${producto.cantidad} - Subtotal: $${subtotal}`;
        carritoDiv.appendChild(productoDiv);
    });

    document.getElementById('total').innerText = `Total de la Compra: $${totalCompra}`;
}

// Asignar la función al botón de "Agregar al Carrito"
document.getElementById('agregarProducto').addEventListener('click', agregarAlCarrito);
