// Recuperar el carrito del localStorage, si existe
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para actualizar el carrito y mostrarlo
function updateCart() {
    const cartList = document.getElementById('cart-list'); // Aquí deberías tener una lista con el ID 'cart-list'
    const totalSpan = document.getElementById('total'); // Aquí deberías tener un elemento con el ID 'total'
    const cartCount = document.getElementById('cart-count'); // El contador de productos en el carrito

    // Limpiar la lista de productos en el carrito
    cartList.innerHTML = '';

    // Añadir los productos del carrito a la lista
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    // Calcular el total del carrito
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalSpan.textContent = total.toFixed(2);

    // Mostrar la cantidad de productos en el carrito
    cartCount.textContent = cart.length; // Actualiza el contador con el número de productos

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Añadir productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        cart.push({ name: productName, price: productPrice }); // Añadir el producto al carrito
        updateCart(); // Actualizar la vista del carrito
    });
});

// Función para vaciar el carrito
document.getElementById('clear-cart').addEventListener('click', function() {
    cart = []; // Vaciar el carrito
    updateCart(); // Actualizar la vista del carrito
});

// Al cargar la página, asegurarse de que el carrito esté actualizado
window.addEventListener('load', function() {
    updateCart(); // Mostrar el carrito al cargar la página
});

