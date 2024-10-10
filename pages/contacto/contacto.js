document.getElementById('btn-enviar').addEventListener('click', function () { /* Al hacer click en el botón de enviar... */
   
    /* Pasamos los datos del html a valores para JavaScript */
    const nombre = document.getElementById('Nombre').value; 
    const apellido = document.getElementById('Apellido').value;
    const email = document.getElementById('E-mail').value;
    const telefono = document.getElementById('Telefono').value;
    const mensaje = document.getElementById('Mensaje').value;
    
    if (!isNaN(nombre)) {
        /* Si el nombre es distinto a lo estipulado suelta un mensaje de error */
        error("El nombre solo debe contener letras.", "errorBoxNombre");
    }

    if (!isNaN(apellido)) {
        /* Si el apellido es distinto a lo estipulado suelta un mensaje de error */
        error("El apellido sólo debe contener letras.", "errorBoxApellido");
    }

    if (email.includes('@') || !email.includes('.')) {
        /* Si el correo es distinto a lo estipulado suelta un mensaje de error */
        error("Ingresa un correo electrónico válido.", "errorBoxEmail");
    }

    if (telefono.length < 10) {
        /* Si el teléfono es distinto a lo estipulado suelta un mensaje de error */
        error("El teléfono debe contener más de 10 dígitos.", "errorBoxTelefono");
    }

    if (mensaje.length === 0) {
        /* El mensaje debe tener al menos 1 caracter, pero no debe estar vacío */
        error("El mensaje no puede estar vacío.", "errorBoxMensaje");
    }

    function error(mostrarMensajeDanger, errorBoxId) {
        const mensajeError = document.getElementById(errorBoxId);
        const alertError = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <p class="m-0">${mostrarMensajeDanger}</p>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

        /* Para insertar el código HTML en el documento en lugar de cambiar el contenido de un elemento, se usa el método insertAdjacentHTML (https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML) */
        mensajeError.insertAdjacentHTML('afterbegin', alertError);
    }
});
