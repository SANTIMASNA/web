document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const usuario = document.getElementById('user').value;
    const telefono = document.getElementById('phone').value;
    let isValid = true;

    // Limpiar mensajes de error
    document.getElementById('nombreError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';

    // Validación del nombre
    if (nombre.length < 3) {
        document.getElementById('nombreError').textContent = 'El nombre debe tener al menos 3 caracteres.';
        isValid = false;
    }

    // Validación del correo electrónico
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Ingrese un correo electrónico válido.';
        isValid = false;
    }
    // Validación del teléfono
    const phonePattern = /^[0-9]+$/; // Solo permite números
    if (!phonePattern.test(telefono)) {
        document.getElementById('phoneError').textContent = 'El teléfono debe contener solo números.';
        isValid = false;
    }

    // Si el formulario es válido, mostrar mensaje de éxito
    if (isValid) {
        const mensaje = `¡Registro exitoso! Bienvenido, ${usuario}!`;
        document.getElementById('mensaje').textContent = mensaje;
        document.getElementById('registroForm').reset(); // Reiniciar el formulario
        document.getElementById("popup").style.display = "block";
        document.getElementById("overlay").style.display = "block";



    }

});
function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


