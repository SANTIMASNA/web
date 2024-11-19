const codigosValidos = {
    'DSC1001': 'Descuento del 10% en tu próxima compra.',
    'DSC1002': 'Obtén envío gratis en tu pedido.',
    'DSC1003': 'Promoción exclusiva del 2024.',
    'DSC1004': '50% de descuento en artículos seleccionados.'
};

// Referencias a elementos del DOM
const btnAgregarCupon = document.getElementById('btnAgregarCupon');
const codigoCupon = document.getElementById('codigoCupon');
const mensajeError = document.getElementById('mensajeError');
const cuponesLista = document.getElementById('cuponesLista');

// Evento para agregar un cupón
btnAgregarCupon.addEventListener('click', () => {
    const codigo = codigoCupon.value.trim().toUpperCase();
    mensajeError.textContent = ''; // Limpia el mensaje de error al intentar de nuevo

    if (!codigo) {
        // Muestra una alerta si no hay código
        alert('Por favor, ingresa un código válido.');
        return;
    }

    if (codigosValidos[codigo]) {
        agregarCupon(codigo);
        codigoCupon.value = ''; // Limpia el campo
    } else {
        // Muestra un mensaje debajo si el código es inválido
        mensajeError.textContent = 'Código de cupón no reconocido.';
    }
});

// Función para agregar un cupón
function agregarCupon(codigo) {
    // Verifica si el cupón ya está en la lista
    const existe = [...cuponesLista.children].some(cupon => cupon.querySelector('.codigo').textContent === codigo);
    if (existe) {
        mensajeError.textContent = 'El cupón ya está agregado.';
        return;
    }

    // Crear un nuevo elemento para el cupón
    const cuponDiv = document.createElement('div');
    cuponDiv.classList.add('cupon');

    const cuponCodigo = document.createElement('div');
    cuponCodigo.classList.add('codigo');
    cuponCodigo.textContent = codigo;

    const cuponDescripcion = document.createElement('div');
    cuponDescripcion.classList.add('descripcion');
    cuponDescripcion.textContent = codigosValidos[codigo];

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
        cuponDiv.remove(); // Elimina el cupón
    });

    // Añadir elementos al contenedor del cupón
    cuponDiv.appendChild(cuponCodigo);
    cuponDiv.appendChild(cuponDescripcion);
    cuponDiv.appendChild(btnEliminar);

    // Agregar el cupón a la lista
    cuponesLista.appendChild(cuponDiv);
}