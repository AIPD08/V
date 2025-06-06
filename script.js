const productos = [
    { id: 1, nombre: 'Pioneer autoesterio', precio: 500, imagen: '1.jpg' },
    { id: 2, nombre: 'LLantas', precio: 450, imagen: '2.jpg' },
    { id: 3, nombre: 'Aceites', precio: 400, imagen: '3.jpg' },
    { id: 4, nombre: 'Volantes', precio: 550, imagen: '4.jpg' },
    { id: 5, nombre: 'Luces', precio: 330, imagen: '5.jpg' },
    { id: 6, nombre: 'Combustible flexible', precio: 400, imagen: '6.jpg' },
   
]; 

let carrito = [];

function cargarProductos() {
    const contenedor = document.getElementById('productos');
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="100">
            <span>${producto.nombre} - $${producto.precio}</span>
            <button onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
        `;
        contenedor.appendChild(div);
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const contenedor = document.getElementById('carrito');
    contenedor.innerHTML = '';
    let total = 0;
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="50">
            ${producto.nombre} - $${producto.precio}
        `;
        contenedor.appendChild(li);
        total += producto.precio;
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

document.getElementById('finalizarCompra').addEventListener('click', () => {
    if (carrito.length > 0) {
        generarTicket();
    } else {
        alert('El carrito está vacío');
    }
});

function generarTicket() {
    const contenedorTicket = document.getElementById('productosTicket');
    contenedorTicket.innerHTML = '';
    let total = 0;
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="50">
            ${producto.nombre} - $${producto.precio}
        `;
        contenedorTicket.appendChild(li);
        total += producto.precio;
    });
    document.getElementById('totalTicket').textContent = total.toFixed(2);
    document.getElementById('ticket').style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
}

cargarProductos();